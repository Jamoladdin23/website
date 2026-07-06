

const menuToggler = document.querySelector('.menu-toggler');
const sideBar = document.querySelector('.side-bar');

const navItemLinks = document.querySelectorAll('.nav li a');
const pages = document.querySelectorAll('.page');

const filterBtn = document.querySelectorAll('.filter-item');
const itemCategory = document.querySelectorAll('.item-category');

/*Slidebar Toggle*/ 

/*menuToggler.addEventListener('click', function(){*/
/*    sideBar.classList.toggle('active');*/
/*})*/

/* Page Navigation Functionality */

for(let i = 0; i < navItemLinks.length; i++){
    navItemLinks[i].addEventListener('click', function(){

        const itemLinkText = this.textContent.toLowerCase();

        for(let j = 0; j < pages.length; j++){
            if(pages[j].classList.contains(itemLinkText)){
                pages[j].classList.add('active');
                navItemLinks[j].classList.add('active');
            }else{
                pages[j].classList.remove('active');
                navItemLinks[j].classList.remove('active');
            }
        }
    });
}

/* Adding eventlistener in filter buttons */

for(let i = 0; i < filterBtn.length; i++){
    filterBtn[i].addEventListener('click', function(){
        for(let i = 0; i < filterBtn.length; i++){
            filterBtn[i].classList.remove('active');
        }
        this.classList.add('active');

        for(let i = 0; i < itemCategory.length; i++){
            const itemCategoryText = itemCategory[i].textContent;
            switch(this.textContent){
                case itemCategoryText:
                    itemCategory[i].parentElement.classList.add('active');
                    break;
                case 'All':
                    itemCategory[i].parentElement.classList.add('active');
                    break;
                default:
                    itemCategory[i].parentElement.classList.remove('active');
            }
        }
    });
}

/* Phone mockup carousels */

document.querySelectorAll('[data-carousel]').forEach(function(carousel){
    const dotsBox = carousel.closest('.mockup-column').querySelector('[data-dots]');

    function buildDots(){
        const slides = carousel.querySelectorAll('img');
        dotsBox.innerHTML = '';
        slides.forEach(function(_, i){
            const dot = document.createElement('span');
            if(i === 0) dot.classList.add('active');
            dot.addEventListener('click', function(){
                carousel.scrollTo({ left: i * carousel.clientWidth, behavior: 'smooth' });
            });
            dotsBox.appendChild(dot);
        });
    }

    buildDots();

    carousel.addEventListener('scroll', function(){
        const index = Math.round(carousel.scrollLeft / carousel.clientWidth);
        dotsBox.querySelectorAll('span').forEach(function(dot, i){
            dot.classList.toggle('active', i === index);
        });
    });

    carousel.querySelectorAll('img').forEach(function(img){
        img.addEventListener('error', function(){
            img.remove();
            buildDots();
            if(!carousel.querySelector('img')){
                carousel.closest('.mockup-column').remove();
            }
        });
    });
});
