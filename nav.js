const navSlide = () =>{
    const burger = document.querySelector('.burger');
    const list = document.querySelector('.list-container');

    burger.addEventListener('click',()=>{
        list.classList.toggle('nav-active');

        burger.classList.toggle('toggle');
    });


    
}

navSlide();