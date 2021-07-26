let pagebuttons = document.querySelectorAll('.navbar-titles ul li a');
let pages = document.querySelectorAll('.pages .page');
let inputs = document.querySelectorAll('input');
let message = document.querySelector('textarea');
let menuButton = document.querySelector('.navbar-titles__tag');
let menuBar = document.querySelector('.navbar-titles ul');
let navbar = document.querySelector('.navbar');
let homeHeader = document.querySelector('.home-header');

pagebuttons.forEach((i, index) => {
    i.addEventListener('click', () => {
        if (document.body.offsetWidth <= 1280) { //document.body.offsetWidth
            pages.forEach(j => {
                j.classList.remove('page-current');
            })
            pagebuttons.forEach((i, index) => {
                i.classList.remove('active-page');
            })
            pagebuttons[index].classList.add('active-page');
            pages[index].classList.add('page-current');
            menuBar.style.display = 'none';
            menuBar.style.transition = 'display ease 1s';//it looks like it doesn't work
        } else {
            pages.forEach(j => {
                j.classList.remove('page-current');
            })
            pagebuttons.forEach((i, index) => {
                i.classList.remove('active-page');
            })
            pagebuttons[index].classList.add('active-page');
            pages[index].classList.add('page-current');
        }
    })
})

menuButton.addEventListener('click', () => {
    if (menuBar.style.display === 'none') {
        menuBar.style.display = 'block';
        menuBar.style.transition = 'all ease 0.5s';//it looks like it doesn't work
    } else {
        menuBar.style.display = 'none';
        menuBar.style.transition = 'all ease 0.5s';//it looks like it doesn't work
    }
})

window.addEventListener('resize', () => {
    if (window.innerWidth <= 1280) {  /////////////document.body.offsetWidth
        navbar.style.backgroundColor = homeHeader.style.backgroundColor;
        navbar.style.boxShadow = '0px 5px 10px 0px rgba(0,0,0,0.1)';//new
        navbar.style.transition = 'all ease 0.3s';//
        menuBar.style.display = 'none';
        menuBar.style.transition = 'all ease 0.3s';//
    } else if (window.innerWidth > 1280 && window.scrollY > 25) {/////////////document.body.offsetWidth
        menuBar.style.display = 'block';
        menuBar.style.transition = 'all ease 0.3s';//
        navbar.style.backgroundColor = '#fff';
        navbar.style.boxShadow = '0px 5px 10px 0px rgba(0,0,0,0.1)';
        navbar.style.transition = 'all ease 0.3s';//
    } else if (window.innerWidth > 1280 && window.scrollY < 25) {/////////////document.body.offsetWidth
        menuBar.style.display = 'block';
        menuBar.style.transition = 'all ease 0.3s';//
        navbar.style.backgroundColor = 'initial';
        navbar.style.boxShadow = 'none';
        navbar.style.transition = 'all ease 0.3s';//
    }
})

window.addEventListener('scroll', () => {
    if (window.scrollY > 25 && window.innerWidth > 1280) {/////////////////////document.body.offsetWidth
        navbar.style.backgroundColor = '#fff';
        navbar.style.boxShadow = '0px 5px 10px 0px rgba(0,0,0,0.1)';
    } else if (window.scrollY <= 25 && document.body.clientWidth > 1280) {
        navbar.style.backgroundColor = 'initial';
        navbar.style.boxShadow = 'initial';
    }
})

inputs.forEach(i => {
    i.addEventListener('focus', () => {
        i.parentNode.children[1].style.top = '-100%';
        i.parentNode.children[1].style.color = '#4dc8f1';
        i.parentNode.children[2].style.width = '100%';
        i.parentNode.children[2].style.borderWidth = '1px';
        i.parentNode.children[2].style.transition = 'all ease 0.3s';
    });
    i.addEventListener('blur', () => {
        i.value !== '' ? i.parentNode.children[1].style.display = 'none' : i.parentNode.children[1].style.display = 'block';
        i.parentNode.children[1].style.top = '0';
        i.parentNode.children[1].style.color = '#ccc';
        i.parentNode.children[2].style.width = '0';
        i.parentNode.children[2].style.borderWidth = '0px';
        i.parentNode.children[2].style.transition = 'all ease 0.3s';
    });
});
message.addEventListener('focus', () => {
    message.parentNode.children[1].style.top = '-30px';
    message.parentNode.children[1].style.color = '#4dc8f1';
    message.parentNode.children[2].style.width = '100%';
    message.parentNode.children[2].style.borderWidth = '1px';
    message.parentNode.children[2].style.transition = 'all ease 0.3s';
});
message.addEventListener('blur', () => {
    message.value !== '' ? message.parentNode.children[1].style.display = 'none' : message.parentNode.children[1].style.display = 'block';
    message.parentNode.children[1].style.top = '0';
    message.parentNode.children[1].style.color = '#ccc';
    message.parentNode.children[2].style.width = '0';
    message.parentNode.children[2].style.borderWidth = '0px';
    message.parentNode.children[2].style.transition = 'all ease 0.3s';
});


