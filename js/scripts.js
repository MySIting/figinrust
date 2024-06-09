document.addEventListener('DOMContentLoaded', (event) => {
    const linkElement = document.getElementById('copyLink');
    linkElement.addEventListener('click', async (event) => {
        event.preventDefault(); // Отменяем стандартное поведение ссылки
        const openModal = document.querySelector('.open');
        await navigator.clipboard.writeText(linkElement.textContent);
        openModal.style.display = 'block';
        setTimeout(function () {
            openModal.style.display = 'none';
        }, 1500);
    });
});


