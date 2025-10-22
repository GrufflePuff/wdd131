const chicken = document.querySelector('#chicken');

// Event listener for opening the modal
chicken.addEventListener('click', openModal);

function openModal(e) {
    console.log(e.target);
// Code to show modal  - Use event parameter 'e'   
    
}

// Close modal if clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === chicken) {
        chicken.close();
    }
});