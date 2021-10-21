const closeBtn=document.getElementById('close-btn');
const mobileNav=document.getElementById('mobile-nav');
const navLinks=document.getElementById('nav-links');

mobileNav.addEventListener('click',()=>{
    navLinks.style.right="0"; 
})
closeBtn.addEventListener('click',()=>{
    navLinks.style.right="-200px";
})


