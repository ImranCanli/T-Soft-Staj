window.onload = (event) => {

    let score = 76;

    for (let k = 0; k <= score; k++) {
        
        miliSecondsDelay = 1000*k*0.01;

        setTimeout(function() {
            document.querySelector('#scoreBig').innerText = k;      
        }, miliSecondsDelay);
    }

    document.querySelector('.leftSide').classList.add('leftOpen');

    confetti({
        particleCount: 150,
        spread: 200,
        origin: { y: 0.6 }
    });
};
  