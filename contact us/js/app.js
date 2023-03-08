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

    // draggable slider

    let slider =document.querySelector(".partner-logo");
    let innerslider =document.querySelector(".logo-row");

    let pressed =false;
    let startx;
    let x;
    slider.addEventListener("mousedown",(e)=>{
        pressed=true;
        startx=e.offsetX -innerslider.offsetLeft;
        slider.style.cursor ="grabbing"

    })

    slider.addEventListener("mouseenter",(e)=>{
        slider.style.cursor ="grab"
    })
    slider.addEventListener("mouseup",(e)=>{
        slider.style.cursor ="grab"
    })

    slider.addEventListener("mouseup",(e)=>{
        pressed=false;
    });

    slider.addEventListener("mousemove",(e)=>{
        if(!pressed) return;
        e.preventDefault();
        x=e.offsetX
        innerslider.style.transform= `translateX(${x-startx})`;
        console.log(x-startx)
    })
