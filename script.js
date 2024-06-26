document.addEventListener('DOMContentLoaded', () => {
    const modal = document.querySelector('.modal');
    const closeModalButton = document.querySelector('.close-modal');

    modal.classList.remove('hidden');

    closeModalButton.addEventListener('click', (event) => {
        event.preventDefault();
        modal.classList.add('hidden');
    });

    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.classList.add('hidden');
        }
    });
});