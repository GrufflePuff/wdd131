const chicken = document.querySelector('.chicken')

function onClick(e) {
    console.log(e.target);
    const img = e.target;
}

// Close modal if clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});