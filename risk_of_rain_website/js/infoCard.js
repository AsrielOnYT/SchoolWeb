document.querySelectorAll('.image-list li').forEach(item => {
    item.addEventListener('click', () => 
    {
        const title = item.getAttribute('data-title');
        const desc = item.getAttribute('data-description');
        document.getElementById('modal-title').textContent = title;
        document.getElementById('modal-desc').textContent = desc;
        document.getElementById('popup-modal').style.display = 'block';

        console.log(title, desc);
    });
});

document.getElementById('close').onclick = () => {
    document.getElementById('popup-modal').style.display = 'none';
};

window.onclick = (event) => {
    const modal = document.getElementById('popup-modal');
    if (event.target === modal) {
    modal.style.display = 'none';
    }
};