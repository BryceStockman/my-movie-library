const searchBtn = document.querySelector("#search_btn");
searchBtn.addEventListener("click", function(event) {
    event.preventDefault();
    const searchString = document.querySelector("#search_text");
    getMovies(searchString.value);
    searchString.value ="";
})