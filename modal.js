// Get the modal
let modal = document.querySelector(".modal");

let modalContainer = document.querySelector(".modal-container");

// adding buttons to all cards to open the modal




document.body.addEventListener('mouseover', event => {
  
    cardClickHandler();
    modalClickHandler();
});

let cardClickHandler = () => {
    let counter;
    let cards = Array.from(document.getElementsByClassName("card"));


    for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener("mouseover", function (event) {
            counter++;
            target = cards[i];
            target.addEventListener('click', e => {
                modalContainer.innerHTML = `${cards[i].innerHTML}`;
                modal.classList.remove('hide');
                //  let details = document.modalContainer.lastChild;
                modalContainer.lastElementChild.classList.remove('hide');
                //test

            });
        });
    
    }
  
    
};

let modalClickHandler = () => {
   


};

// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', function (event) {
    if (event.target == modal) {
        modalContainer.lastElementChild.classList.remove('hide');
        modal.classList.add("hide");
    }
});