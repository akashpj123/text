let image=document.querySelector(".img");
let translate=0;

setInterval(()=>{
if(translate >= 0 && translate< 300){
    translate+=100
}else{
    translate=0
}
image.style.transition="1s";
image.style.transform=`translateX(${-translate}%)`
},3000)

function right(){
    if (translate < 400){
        translate+=100
        image.style.transition="1s";
        image.style.transform=`translateX(${-translate}%)`
    }
}
function left(){
    if (translate > 0){
        translate-=100
        image.style.transition="1s";
        image.style.transform=`translateX(${-translate}%)`
    }
}