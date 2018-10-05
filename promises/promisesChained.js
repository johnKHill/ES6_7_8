const apiKey = `e9ddb24aed6d48c4342303aba5269e28`;
const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=`;
const imgUrl = `http://image.tmdb.org/t/p/w300/`;
const peopleUrl = `https://api.themoviedb.org/3/person`;
const castUrl = `https://api.themoviedb.org/3/movie`;
// JQuery will be used for the AJAX requests

// The Promise WAY
// Take a movieTitle and 'get/fetch' the movieData
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

// Take the movieTitle and  'get/fetch' the cast/castData
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

// Then, take the first person in the castData and 'get/fetch' the person object in the movie
function getPerson(person) {
    return new Promise((resolve, reject) =>{
        $.ajax({
            url: `${peopleUrl}/${person.id}?api_key=${apiKey}`,
            success: (personData) =>{
                resolve(personData)
            }
        })
    })
}



async function addMovieToDom(movieTitle) {
    document.getElementById('movies').innerHTML = "";

    const movieData = await getMovieData(movieTitle);
    const castData = await getCast(movieData[0]);
    const personData = await getPerson(castData[0]);
    
    
    document.getElementById('movies').innerHTML += `
        <div class="col-sm-4">
            <div>
                <img src="${imgUrl}${movieData[0].poster_path}" />
            </div>
            
            <div>
                <img src="${imgUrl}${personData.profile_path}" />
            </div>
        </div>
    `
}


// Refactor this code with a function that our submit handlers can call
// 

document.getElementById('movie-form').addEventListener('submit',(event)=> {
    event.preventDefault();
    const movieElems = Array.from(document.getElementsByClassName('movie-title'))
    movieElems.forEach((elem)=> {
        addMovieToDom(elem.value);
    })

    // const moviePromise = getMovieData(movieElem[0].value)
    // moviePromise.then((movieData)=> {
    //     // console.log(movieData);
    //     return getCast(movieData[0]);
    // }).then((castInfo) => {
    //     // console.log(personInfo)
    //     return getPerson(castInfo)
    // }).then((personInfo) => {
    //     console.log(personInfo)
    // })
});


// 1st Code - Refactor this JS DOM manipulation with functions
// document.getElementById('movie-form').addEventListener('submit',(event)=> {
//     event.preventDefault();
//     const movieElem = Array.from(document.getElementsByClassName('movie-title'))
//     // console.log(movieElem);
//     const moviePromise = getMovieData(movieElem[0].value)
//     moviePromise.then((movieData)=> {
//         // console.log(movieData);
//         return getCast(movieData[0]);
//     }).then((castInfo) => {
//         // console.log(personInfo)
//         return getPerson(castInfo)
//     }).then((personInfo) => {
//         console.log(personInfo)
//     })
// });





// Avoid Callback Hell
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