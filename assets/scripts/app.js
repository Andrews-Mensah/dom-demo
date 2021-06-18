let modal = document.querySelector("#add-modal")
let movieBtn = document.querySelector(".add-movie")
let backdrop = document.querySelector ("#backdrop")
let cancelBtn = modal.querySelector (".btn--passive")
let addBtn = modal.querySelector (".btn--success")
let movieDB = []


const addMovie = () => {
    
    modal.classList.add("visible")
    backdropToggle()
    disPlay()
    movieRendering ()
}

const backdropToggle = () => {
    
    backdrop.classList.toggle("visible")
}

const cancelBTN = () => {
    modal.classList.remove("visible")
    backdrop.classList.remove ("visible")
    clear_input()
}

const backdropHide = () => {
    modal.classList.remove("visible")
    backdrop.classList.remove ("visible")

}

const addBTN = () => {
    let movieTitle = document.querySelector("#title").value.trim()
    let movieImage = document.querySelector("#image-url").value.trim()
    let movieRating = document.querySelector("#rating").value.trim()

    if (movieTitle !== "") {
        if(movieImage !== "") {
            if(movieRating < 1 || movieRating > 5) {
                alert ("Please enter movie rating from 1 to 5")
            } else {
                const details_movie = {
                    movie_Title: movieTitle,
                    movie_Image: movieImage,
                    movie_Rating: movieRating

                    
                }
                movieDB.push(details_movie)
            }
        }else {
            alert ("Kindly add a movie URL")
        }
    } else {
        alert ("Kindly add a movie title")
    }

    clear_input()

    

}

const clear_input = () => {
    movieTitle = document.querySelector("#title").value = ""
    movieImage = document.querySelector("#image-url").value = ""
    movieRating = document.querySelector("#rating").value = ""

}





movieBtn.addEventListener("click", addMovie)
backdrop.addEventListener("click", backdropHide)
cancelBtn.addEventListener("click", cancelBTN)
addBtn.addEventListener("click", addBTN)


const disPlay = () => {
    if (movieDB.length > 0){
        document.getElementById ("entry-text").style.display = "none"
    }
}

const movieRendering = (movieTitle, movieImage, movieRating) => {
    const listMovie = document.createElement("li");
    listMovie.className = "movie-element"

    listMovie.innerHTML = `
        <div class="movie-element__image">
            <img src="${movieImage}" alt="${movieTitle}>
        </div>

        <div class="movie-element__info">
            <h2> ${movieTitle} </h2>
            <p> ${movieRating}/5 stars </p>
        </div>

        document.getElementById("movie-list").appendChild(listMovie)
    `


}









