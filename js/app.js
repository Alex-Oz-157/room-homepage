const app = {
    init:function () {
        /* Class selector */
        let items = document.getElementsByClassName('illustration-slider');
        let contents = document.getElementsByClassName('illustration-content');
        /* Number of illustration + text content */
        let nbSlide = items.length;
        let nbContent = contents.length;
        let count = 0;
        // console.log(nbSlide);
        // console.log(nbContent);
        
        /* Class selector for navigation */
        let next = document.querySelector('.slider-right');
        let previous = document.querySelector('.slider-left');

        /* Set up for next button */
        function nextSlide () {
            items[count].classList.remove('active');
            contents[count].classList.remove('active');
            if (count < nbSlide - 1 && count < nbContent && count < 4){
                count++;
            }else {
                count = 0;
            }       
            items[count].classList.add ('active');
            contents[count].classList.add ('active');
            //console.log(count);
        }
        next.addEventListener('click', nextSlide);


        /* Set up for previous button */
        function previousSlide () {
            items[count].classList.remove('active');
            contents[count].classList.remove('active');
            if (count > 0){
                count--;
            }else {
                count = nbSlide - 1 && nbContent -1;
            }
        
            items[count].classList.add ('active');
            contents[count].classList.add ('active');
            //console.log(count);
        }
        previous.addEventListener('click', previousSlide);


        /* Set up for burger Toggle button */
        let navToggle = document.querySelector('.nav-toggle');
        let nav = document.querySelector('.navigation');

        function doToggle (event) {
            event.preventDefault();
            navToggle.classList.toggle ('expanded');
            nav.classList.toggle ('expanded');
        }

        navToggle.addEventListener('click', doToggle);
        nav.addEventListener('click', doToggle);

        //console.log(hamburger)
        
    }
}
document.addEventListener('DOMContentLoaded', app.init);