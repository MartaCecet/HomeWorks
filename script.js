//let item = document.querySelectorAll('.gallery-item');
//let itemB = document.getAttribute('data-src');
//const gallery = document.querySelector('.gallery');

//item.addEventListener('click', () => {/
   // let itemShow = document.createElement('img');   
   // itemShow.classList.add('gallery-item-show');
    //itemShow.innerHTML = itemB;


    //const createImage = (event) => {
       // if(event.target.tagName !== 'IMG') return;
        //const elem = event.target;     

        

//})
const gallery = (selector) => {
    const galleryItem = document.querySelectorAll(selector);

     let galleryItemBig = null;
    const createItem = (event) => {
       
        let elem = event.target;
        let img = elem.dataset.src;

        galleryItemBig = document.createElement('div');
        galleryItemBig.classList.add('gallery-item');
        galleryItemBig.innerHTML = img;

        elem.append(galleryItemBig);

    }
}
gallery('.gallery');

//tool-tips
const tooltips = (selector) => {
    const tooltips = document.querySelectorAll(selector);

    let tooltipDescribtion = null;

    const createTooltip = (event) => {
        if(event.target.tagName !== 'SPAN') return;
        const elem = event.target;
        const text = elem.dataset.text;

        let y = elem.offsetHeight + 20;
        let x = elem.offsetWidth + 400;

        tooltipDescribtion = document.createElement('div');
        tooltipDescribtion.classList.add('tool-tip-element');
        tooltipDescribtion.innerText = text;

        tooltipDescribtion.style.top = y + 'px';
        tooltipDescribtion.style.left = x + 'px';

        elem.append(tooltipDescribtion);
    }

    const removeTooltip = (event) => {
        const elem = event.target;
        const text = elem.dataset.text;

        [...elem.children].forEach(child => {
            if(child.classList.contains('tool-tip-element')){
                child.remove();
                tooltipDescribtion = null;
            }
        });
    }

    tooltips.forEach(tooltip => {
        tooltip.addEventListener('mouseover', function(event){
            createTooltip(event);
        });
    });

    tooltips.forEach(tooltip => {
        tooltip.addEventListener('mouseout', function(event){
            removeTooltip(event);
        });
    });
}

tooltips('.tooltips');


//tabs
const tabs = (selector) => {
    const tabContainer = document.querySelectorAll(selector);


    const contentHandler = (contents, index) => {
        contents.forEach((content, i) => {
            if(i === index){
                content.classList.add('active');
            }else{
                content.classList.remove('active');
            }
        });
    }

    const tabsHandler = (buttons, contents) => {
        buttons.addEventListener('click', event => {
            let button = event.target;
            if(button.tagName !== 'LI') return;
            [...buttons.children].forEach((btn, i) => {
                if (btn === button){
                    btn.classList.add('active');
                    contentHandler([...contents.children], i)
                }else{
                    btn.classList.remove('active');
                }
                  
                if (btn.classList.contains('add')){
                    newTab = document.createElement('li');
                    newTab.classList.add('tab');
                    newTab.innerHTML = 'prompt';
                }

            });
            
        });

    }

    [...tabContainer].forEach(tab => {
        const buttons = tab.querySelector('.tabs');
        const content = tab.querySelector('.tabs__content');

        tabsHandler(buttons, content);
    });
}

tabs('.tabs-block');