const searchBtn = document.querySelector("#search_btn");
searchBtn.addEventListener("click", function (event) {
    event.preventDefault();
    const searchString = document.querySelector("#search_text");
    window.open('/search?title=' + searchString.value, '_self')
    searchString.value = "";
});

function addUserMovie(event) {
    console.log(event.target.dataset.movie_id);
    const token = localStorage.getItem('token')
    console.log(token)
    // fetch('/api/user_movies',
    //     {
    //         method: 'GET'
    //     })
    //     .then(response => {
    //         response.json().then(data => {
    //             console.log(data)
    //         })
    //     })

    const newMovie = {
        imdb_id: event.target.dataset.movie_id,
        movie_name: event.target.dataset.movie_name,
        movie_shelf: event.target.dataset.shelf,
    }

    fetch(`/api/user_movies?token=${token}`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
            body: JSON.stringify(newMovie)
        })
        .then(response => {
            response.json().then(data => {
                console.log(data)
            })
        })
    }


