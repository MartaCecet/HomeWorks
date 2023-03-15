const gallery = selector => {
    let galleryContainer = document.querySelectorAll(selector);

    const galleryHandler = container => {
        const imgs = container.querySelector('.gallery');
        const main = container.querySelector('.main');
        const close = main.querySelector('.close');
        const img = main.querySelector('img');


        imgs.addEventListener('click', event => {
            let elem = event.target;
            console.log(elem);
            if(elem.tagName !== 'IMG') return;
            let src = elem.dataset.img;
            if(!src) return;

            img.src = src;
            main.classList.add('active');
        });

        close.addEventListener('click',() => {
            main.classList.remove('active');
            setTimeout(() => img.src = '', 300);

        });

    }

    galleryContainer.forEach(container => {
        galleryHandler(container)
    });

}
gallery('.container');