let clickCount = 0;
let likeCount = 0;
// const likeImage  = (element) => {
//     // console.log(element);

//     clickCount === 0 ? clickCount += 1 : likedIt(element);
// }

window.onload = (event) => {
    document.querySelector('.bisey').textContent = `${localStorage.likes.length}`;
  };  

//Arrow fonksiyonunu override ettim. Ama calismadi :/
function likeImage(element, event) {

    let x = event.offsetX;
    let y = event.offsetY;

    // console.log('yeni fonksiyon calisti. X degeri: ' + x + ', Y degeri: ' + y);

    clickCount === 0 ? countClicks() : likedIt(element, x, y);
}

const countClicks = () => {
    clickCount += 1;
    setTimeout(() => {
        clickCount = 0;
    }, 1000)
}

const likedIt = (el, xCoordinate, yCoordinate) => {

    //Resmi begenme islemlerini burada yap.
    likeCount += 1;
    const imageW = el.offsetWidth;
    const imageH = el.offsetHeight;

    // const heart = document.createElement("div");
    // heart.style.position = 'absolute';
    // heart.style.left= xCoordinate;
    // heart.style.top= yCoordinate;
    // el.appendChild(heart);

    el.innerHTML += `<div class="animationClass" style="position: absolute; left: ${Math.floor(xCoordinate)}px; top: ${Math.floor(yCoordinate)}px; user-select: none; opacity: 0; transform: scale(5)">💜</div>`;
    setTimeout(() => {
        //el.innerHTML = '';
        el.querySelector('.animationClass').remove();
    }, 500);
    localStorage.likes += 1;
    document.querySelector('.bisey').textContent = `${localStorage.likes.length}`;
    clickCount = 0;
    // console.log('Burada islemler yapilabilir. Container genisligi :' + imageW + ', Container yuksekligi :' + imageH);
}