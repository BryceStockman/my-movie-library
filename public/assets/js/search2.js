console.log('inside search2')
const searchBtn = document.querySelector("#search_btn");
searchBtn.addEventListener("click", function(event) {
    event.preventDefault();
    const searchString = document.querySelector("#search_text");
    window.open('/search?title='+searchString.value,'_self')
    searchString.value ="";
});

