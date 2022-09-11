import './style.scss';
import Typed from 'typed.js';
import ScrollReveal from 'scrollreveal';
import "waypoints/lib/noframework.waypoints";

let options = {
  strings: ['Food...', 'Drink...'],
  typeSpeed: 30,
  backSpeed: 30,
  backDelay:3000,
  loop:true,
};

let typed = new Typed('.element', options);

let toDown = {
    distance: '50px',
    origin: 'top',
    interval: 300,
    duration: 800
};

ScrollReveal().reveal('.to-down', toDown);

let toRight = {
    distance: '50px',
    origin: 'left',
    interval: 300,
    duration: 800
};

ScrollReveal().reveal('.to-right', toRight);

let toLeft = {
    distance: '50px',
    origin: 'right',
    interval: 300,
    duration: 800
};

ScrollReveal().reveal('.to-left', toLeft);

new Waypoint({
    element: document.getElementById('home-content'),
    handler: function(direction) {
        let oldNavLink  = document.querySelector('.nav-link.active');
        if(oldNavLink != null){
            oldNavLink.classList.remove('active')
        };
        let currentNavLink = document.querySelector(`[href='#home']`);
        currentNavLink.classList.add('active')
    },
    offset: '10%' 
  });

let sections = ['about','services','menus'];  

sections.forEach(function(section){
    new Waypoint({
        element: document.getElementById(section),
        handler: function(direction) {
            let oldNavLink  = document.querySelector('.nav-link.active');
            oldNavLink.classList.remove('active');
            let currentNavLink = document.querySelector(`[href="#${section}"]`);
            currentNavLink.classList.add('active')
        },
        offset: '50%' 
      })
});

new Waypoint({
    element: document.getElementById('contact'),
    handler: function(direction) {
        let oldNavLink  = document.querySelector('.nav-link.active');
        oldNavLink.classList.remove('active');
        let currentNavLink = document.querySelector(`[href='#contact']`);
        currentNavLink.classList.add('active')
    },
    offset: '80%' 
  });

let menuLists = [
    {
        id:1,
        title: "Berbecue Salad",
        img:"/img/plate1.png",
        description:"Sepical Delicious Dish",
        price: 22.2,
        currency: "$"
    },
    {
        id:2,
        title: "Salad With Fish",
        img:"/img/plate2.png",
        description:"Sepical Delicious Dish",
        price: 30.5,
        currency: "$"
    },
    {
        id:3,
        title: "Spinach Salad",
        img:"/img/plate3.png",
        description:"Sepical Delicious Dish",
        price: 50,
        currency: "$"
    },
    {
        id:4,
        title: "Single Par",
        img:"/img/plate3.png",
        description:"Sepical Delicious Dish",
        price: 50,
        currency: "$"
    }
];

    let menuRow = document.getElementById('menuRow');
    
    menuLists.forEach(function (menuList){
        let div = document.createElement('div');
        div.classList.add("col-8","col-md-4","col-lg-2");
        div.innerHTML = `
        <div class="card card-plate mb-5">
            <img src="${menuList.img}" alt="" class="card-img w-75 mx-auto d-block my-4">
            <div class="card-body">
                <p class="fw-bold">${menuList.title}</p>
                <p class=" text-black-50 small">${menuList.description}</p>
                <div class="d-flex justify-content-between align-items-center">
                    <p class="mb-0">${menuList.currency} ${menuList.price}</p>
                    <button class=" btn btn-primary">
                        <i class=" bi bi-cart"></i>
                    </button>
                </div>
            </div>
        </div>
            `;
       
        menuRow.append(div);                   
    });
    
    






  

