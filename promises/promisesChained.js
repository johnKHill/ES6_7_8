const apiKey = `e9ddb24aed6d48c4342303aba5269e28`;
const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=`;
const imgUrl = `http://image.tmdb.org/t/p/w300/`;
const peopleUrl = `https://api.themoviedb.org/3/person`;
const castUrl = `https://api.themoviedb.org/3/movie`;


// The Promise WAY
function getMovieData(movieTitle) {
    return new Promise((resolve, reject) =>{
        $.ajax({
            url: apiUrl+movieTitle,
            method: 'get',
            success: (movieData)=> {
                // console.log(movieData)
                resolve(movieData.results);
            },
            error: (errorMsg)=> {
                reject(errorMsg);
            }
        })
    })
}


function getCast(movie) {
    // console.log(movie);
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `${castUrl}/${movie.id}/credits?api_key=${apiKey}`,
            method: 'get',
            success: (castData) => {
                resolve(castData.cast[0])
            }
        })
    })
}

function getPerson(person) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `${peopleUrl}/${person.id}?api_key=${apiKey}`,
            success: (personData) => {
                resolve(personData)
            }
        })
    })
}


document.getElementById('movie-form').addEventListener('submit',(event)=> {
    event.preventDefault();
    const movieElem = Array.from(document.getElementsByClassName('movie-title'))
    // console.log(movieElem);
    const moviePromise = getMovieData(movieElem[0].value)
    moviePromise.then((movieData)=> {
        // console.log(movieData);
        return getCast(movieData[0]);
    }).then((castInfo) => {
        // console.log(personInfo)
        return getPerson(castInfo)
    }).then((personInfo) => {
        console.log(personInfo)
    })
});





// Callback Hell
        // $.ajax({
        //     url: `${apiUrl}rocky`,
        //     method: 'get',
        //     success: (movieData)=> {
        //         // console.log(movieData)
        //         $.ajax({
        //             url: `${apiUrl}titanic`,
        //             method: 'get',
        //             success: (movieData2)=> {
        //                 // console.log(movieData)
        //                 $.ajax({
        //                     url: `${apiUrl}grease`,
        //                     method: 'get',
        //                     success: (movieData3)=> {
        //                         // console.log(movieData)
        //                         console.log(movieData.results);
        //                         console.log(movieData2.results);
        //                         console.log(movieData3.results);
        //                     },
        //                     error: (errorMsg3)=> {
        //                         reject(errorMsg);
        //                     }
        //                 })
        //                 },
        //             error: (errorMsg2)=> {
        //                 reject(errorMsg);
        //             }
        //         })        
        //     },
        //     error: (errorMsg)=> {
        //         reject(errorMsg);
        //     }
        // })