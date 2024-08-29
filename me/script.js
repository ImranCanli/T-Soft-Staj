window.onload = (event) => {
    document.querySelector('.title').style.transform = 'translateY(100px)';
};

addEventListener("resize", (event) => {
    // document.querySelector('.bgImg').style.width =
    // document.querySelector('.pick').style.width = `${window.innerWidth}px`;
});

function scrollDown(num) {
    window.scroll({
        top: (window.innerHeight)*num,
        left: 0,
        behavior: "smooth",
    });
    console.log('burada soruna rastlanmadı babayiğit');
    console.log(num);
    document.querySelector('.bgImg').style.transform = `scale(1.${num})`;
}

function goUp(){
    document.querySelector('.bgImg').style.transform = `scale(1)`;
    window.scrollTo(0,0);
}