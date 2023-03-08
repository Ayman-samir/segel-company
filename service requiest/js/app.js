// menue bar
let menu =document.getElementById('menu');
    function closeNavbar(){
        menu.style.left="-100%";
    }
    function openMene(){
        menu.style.left="0";
    }
    menu.addEventListener("click",(e)=>{
        console.log(e);
    })