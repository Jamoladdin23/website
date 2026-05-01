

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
