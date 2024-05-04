const imgs = document.getElementById("site__banner");
const img = document.querySelectorAll("#site__banner img")

let= idx = 0

function carrossel(){
    idx++

    if(idx > img.length - 1){
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx *1480}px)`
}

setInterval(carrossel, 5000);

