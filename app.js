document.addEventListener('DOMContentLoaded', function () {
    const nextButton = document.getElementById('next');
    const prevButton = document.getElementById('prev');
    const backButton = document.getElementById('back');
    const vejaButtons = document.querySelectorAll('.veja');
    const carrossel = document.querySelector('.carrossel');
    const listHTML = document.querySelector('.carrossel .list');

    let unAcceptClick;

    const showSlider = (type) => {
        nextButton.style.pointerEvents = 'none';
        prevButton.style.pointerEvents = 'none';

        carrossel.classList.remove('prev', 'next');
        let items = document.querySelectorAll('.carrossel .list .item');
        if (type === 'next') {
            listHTML.appendChild(items[0]);
            carrossel.classList.add('next');
        } else {
            let positionLast = items.length - 1;
            listHTML.prepend(items[positionLast]);
            carrossel.classList.add('prev');
        }
        clearTimeout(unAcceptClick);
        unAcceptClick = setTimeout(() => {
            nextButton.style.pointerEvents = 'auto';
            prevButton.style.pointerEvents = 'auto';
        }, 2000);
    }

    nextButton.onclick = () => showSlider('next');
    prevButton.onclick = () => showSlider('prev');

    vejaButtons.forEach(button => {
        button.addEventListener('click', () => {
            carrossel.classList.add('showDetail');
            backButton.style.display = 'inline-block';
        });
    });

    backButton.addEventListener('click', () => {
        carrossel.classList.remove('showDetail');
        backButton.style.display = 'none';
    });
});
