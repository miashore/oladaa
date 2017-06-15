$(document).ready(function(){
    closeModal();
});

function closeModal(){
    $('#failedLogin').click(function(){
        $('#failedLogin').css('display','none');
    });
    $('#failedLoginModal').click(function(){
        $('#failedLogin').css('display','none');
    });
}