
const ids = {
    sports_fitness: 1,
    dance: 2,
    outdoors_adventure: 3,
    health_wellness: 4,
    music: 5,
    pets: 6,
    social: 7,
    photography: 8,
    arts: 9,
    hobbies_crafts: 10,
    scifi_games: 11,
    film: 12
};

export default function(choices){
    const output = [];

    for(const cat in choices){
        if(choices[cat] && ids[cat]){
            output.push(ids[cat]);
        }
    }
    return output;
}