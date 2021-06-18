let modal = document.querySelector("#add-modal")
let movieBtn = document.querySelector(".add-movie")
let backdrop = document.querySelector ("#backdrop")
let cancelBtn = document.querySelector (".btn--passive")
let addBtn = document.querySelector (".btn--success")


const addMovie = () => {
    
    modal.classList.add("visible")
    backdropToggle()
}

const backdropToggle = () => {
    
    backdrop.classList.toggle("visible")
}

const cancelBTN = () => {
    modal.classList.remove("visible")
    backdrop.classList.remove ("visible")
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
                alert ("success")
            }
        }else {
            alert ("Kindly add a movie URL")
        }
    } else {
        alert ("Kindly add a movie title")
    }


}

movieBtn.addEventListener("click", addMovie)
backdrop.addEventListener("click", backdropHide)
cancelBtn.addEventListener("click", cancelBTN)
addBtn.addEventListener("click", addBTN)









