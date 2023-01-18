fetch('http://localhost:3000/ramens')
    .then((response) => response.json())
    .then((data) => data.forEach(renderRamen));

function renderRamen(ramen) {
    let menu = document.querySelector('#ramen-menu')
    let newImage = document.createElement('img')
    newImage.src = ramen.image
    newImage.addEventListener('click', () => ramenDetails(ramen))
    menu.append(newImage)
}

function ramenDetails(ramen) {
    let ramenImage = document.querySelector(".detail-image");
    let ramenName = document.querySelector(".name");
    let ramenRestaurant = document.querySelector(".restaurant")
    ramenImage.src = ramen.image
    ramenName.textContent = ramen.name
    ramenRestaurant.textContent = ramen.restaurant
    let ramenRating = document.querySelector("#rating-display")
    let ramenComment = document.querySelector("#comment-display")
    ramenRating.textContent = ramen.rating
    ramenComment.textContent = ramen.comment
}
let form = document.querySelector("#new-ramen")
form.addEventListener("submit", (e) => {
    e.preventDefault()
    let newRamen = {
        name: e.target.name.value,
        restaurant: e.target.restaurant.value,
        image: e.target.image.value,
        rating: e.target.rating.value,
        comment: e.target["new-comment"].value,
    }
    renderRamen(newRamen)
    form.reset()
})
