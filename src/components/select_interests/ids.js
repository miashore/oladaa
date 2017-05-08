
// const ids = {
//     sports_fitness: 1,
//     dance: 2,
//     outdoors_adventures: 3,
//     health_wellness: 4,
//     music: 5,
//     pets: 6,
//     social: 7,
//     photography: 8,
//     arts: 9,
//     hobbies_crafts: 10,
//     scifi_games: 11,
//     film: 12
// };

const ids= {
    'Sports & Fitness': 1,
    'Dance': 2,
    'Outdoors & Adventures': 3,
    'Health & Wellness': 4,
    'Music': 5,
    'Pets': 6,
    'Social': 7,
    'Photography': 8,
    'Arts': 9,
    'Hobbies & Crafts': 10,
    'Sci-Fi & Games': 11,
    'Film': 12
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