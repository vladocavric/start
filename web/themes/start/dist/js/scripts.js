const navSlide = () => {
    const burger = document.querySelector('.c-nav-burger');
    const nav = document.querySelector('.c-nav-ul');
    const navLinks = document.querySelectorAll('.c-nav-ul li');
    const burgerL1 = document.querySelector('.c-nav-burger-l1');
    const burgerL2 = document.querySelector('.c-nav-burger-l2');
    const burgerL3 = document.querySelector('.c-nav-burger-l3');
    
    burger.addEventListener('click',()=>{
        nav.classList.toggle('c-nav-active');
        burgerL1.classList.toggle('c-nav-burger-l1-x');
        burgerL2.classList.toggle('c-nav-burger-l2-x');
        burgerL3.classList.toggle('c-nav-burger-l3-x');

        navLinks.forEach((link, index) => {
            link.style.animation = '2s ease forwards navLinksFade ';
            
        });
        
    });

}

navSlide();

//0.5s ease forwards ${index / 7 + 3}s