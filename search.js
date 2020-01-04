// elements
const searchBar = document.querySelector('.search');




// checks value in search bar
searchBar.addEventListener("keyup", () => {
    displayHandler(searchBar.value);
   
});


// alts show/hide class of img with dataset including search term vs those that don't
function displayHandler(value) {
    let cards = document.querySelectorAll('div.card');
   
    for (let card of cards) {

        if (card.innerHTML.includes(searchBar.value)) {

            card.classList.remove("hide");
        } else {
            card.classList.add("hide");
           
        }
       
    }


}