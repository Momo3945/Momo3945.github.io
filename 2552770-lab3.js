/*const tracks = [
    { title: 'Blinding Lights',artist: 'The Weeknd', year: 2019 },
    { title: 'Levitating', artist: 'Dua Lipa', year: 2019 },
    { title: 'Save Your Tears', artist: 'The Weeknd', year: 2019 },
  ];
  */

function getMusicTitlesByYear(tracks){
    if (!Array.isArray(tracks)) {
        throw new Error('The input should be an array with tracks');
    }
    //sort tack array
    tracks.sort((a, b) => a.year - b.year);
    result = {};
    //loop through tracks
    tracks.forEach(track => {
        validateTrack(track);
    //checking if the year is in result    
        if (!result[track.year]) {
            result[track.year] = [];
        }
    //push title into results
        result[track.year].push(track.title);
    });
    //sort results array
    for (const year in result) {
        result[year].sort();
    }

    return result;

}

function validateTrack(track) {
    if (typeof track.title !== 'string' || typeof track.artist !== 'string' || typeof track.year !== 'number') {
        throw new Error('Invalid track object format');
    }
}



//console.log(getMusicTitlesByYear(tracks))