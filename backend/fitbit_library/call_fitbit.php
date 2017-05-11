<?php
session_start();
header("Access-Control-Allow-Origin: *");
use djchen\OAuth2\Client\Provider\Fitbit;
require_once __DIR__ . '/vendor/autoload.php';
require('fitbit_credentials.php');

$provider = new Fitbit([
'clientId'          => $my_client_id_from_fitbit,
'clientSecret'      => $my_client_secret_from_fitbit,
'redirectUri'       => $my_callback_url
]);


session_start();

// If we don't have an authorization code then get one
if (!isset($_GET['code'])) {

// Fetch the authorization URL from the provider; this returns the
// urlAuthorize option and generates and applies any necessary parameters
// (e.g. state).
    $authorizationUrl = $provider->getAuthorizationUrl(['scope' =>['heartrate']]);

// Get the state generated for you and store it to the session.
    $_SESSION['oauth2state'] = $provider->getState();

// Redirect the user to the authorization URL.
    header('Location: ' . $authorizationUrl);
    exit;

// Check given state against previously stored one to mitigate CSRF attack
} elseif (empty($_GET['state']) || ($_GET['state'] !== $_SESSION['oauth2state'])) {
    unset($_SESSION['oauth2state']);
    exit('Invalid state');

} else {

    try {

// Try to get an access token using the authorization code grant.
        $accessToken = $provider->getAccessToken('authorization_code', [
            'code' => $_GET['code']
        ]);

// We have an access token, which we may use in authenticated
// requests against the service provider's API.
//echo $accessToken->getToken() . "\n";
//echo $accessToken->getRefreshToken() . "\n";
//echo $accessToken->getExpires() . "\n";
//echo ($accessToken->hasExpired() ? 'expired' : 'not expired') . "\n";

// Using the access token, we may look up details about the
// resource owner.
        $resourceOwner = $provider->getResourceOwner($accessToken);

        var_export($resourceOwner->toArray());

// The provider provides a way to get an authenticated API request for
// the service, using the access token; it returns an object conforming
// to Psr\Http\Message\RequestInterface.
        $request = $provider->getAuthenticatedRequest(
            Fitbit::METHOD_GET,
            Fitbit::BASE_FITBIT_API_URL . '/1/user/-/activities/heart/date/today/7d.json',
            $accessToken,
            ['headers' => [Fitbit::HEADER_ACCEPT_LANG => 'en_US'], [Fitbit::HEADER_ACCEPT_LOCALE => 'en_US']]
// Fitbit uses the Accept-Language for setting the unit system used
// and setting Accept-Locale will return a translated response if available.
// https://dev.fitbit.com/docs/basics/#localization
        );
// Make the authenticated API request and get the parsed response.
        $response = $provider->getParsedResponse($request);


//print_r($response['activities-heart'][5]['value']['heartRateZones']);

        $fatBurnMin = $response['activities-heart'][5]['value']['heartRateZones'][1]['minutes'];
        $cardioMin = $response['activities-heart'][5]['value']['heartRateZones'][2]['minutes'];
        $peakMin = $response['activities-heart'][5]['value']['heartRateZones'][3]['minutes'];
        function getActivityScore($fatBurnMin, $cardioMin, $peakMin){
            $fatBurnScore = $fatBurnMin*3;
            $cardioScore = $cardioMin*4;
            $peakScore = $peakMin*5;
            $totalScore = ($fatBurnScore+$cardioScore+$peakScore);
            $totalMin = 60+($fatBurnMin+$cardioMin+$peakMin);
            $activityScore = $totalScore/$totalMin;
            if ($activityScore >= 0 && $activityScore < 2){
                $activityScore = round($activityScore);
            }
            else if($activityScore > 2){
                $activityScore = 2;
            }
            else{
                $activityScore = 'Invalid Inputs';
            }
            $_SESSION['activityScore'] = $activityScore;
            return $activityScore;
        }
        echo "\n";

        echo(getActivityScore($fatBurnMin,$cardioMin,$peakMin))."\n";

        print_r($_SESSION);

// If you would like to get the response headers in addition to the response body, use:
//$response = $provider->getResponse($request);
//$headers = $response->getHeaders();
//$parsedResponse = $provider->parseResponse($response);

    } catch (\League\OAuth2\Client\Provider\Exception\IdentityProviderException $e) {

// Failed to get the access token or user details.
        exit($e->getMessage());

    }

}
