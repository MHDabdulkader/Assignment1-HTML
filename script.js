
// const showNav = (toggleId, navId) =>{
//     const toggle = document.getElementById('nav-toggle');
//     const nav = document.getElementById('nav-bar');

//     console.log

//     if(toggle && nav){
//         toggle.addEventListener('click', ()=>{
//             nav.classList.toggle("showNav");
//         })
//     }
// }



// showNav("nav-toggle", "nav-bar");

const toggle = document.getElementById('nav-toggle');

toggle.addEventListener('click', ()=>{
    if(toggle.innerText === '<<'){
        // extend nav bar
        const navItems = document.getElementById('nav-items');
        navItems?.classList.add('showNav');
        toggle.innerHTML = '>>';
    }
    else {
        // close
        const navItems = document.getElementById('nav-items');
        navItems?.classList.remove('showNav');
        toggle.innerHTML ='<<';
    }
    console.log(toggle.innerText);
})
