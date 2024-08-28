
let downVal; 
let control = true;
let control2 = true;
let degrees = 0;
let degrees2 = 0;
let degreesUp = 90;

window.onload = (event) => {

    // downVal = true;
    // setInterval(changeClass, 1000);
    // setTimeout(() => {
    //     changeClassSecond();
    //   }, 1000);      

    // setInterval(() => {
    //     const downElement = document.querySelector('.lookDown');
    //     // if (degrees === 360) degrees = 0;
    //     if (control) {
    //         degrees += 180;
    //         console.log('if calisti ' + degrees);
    //         downElement.style.transform = `rotate(${degrees}deg)`;
    //         control = false;
    //     } else {
    //         degrees += 180;
    //         console.log('else calisti ' + degrees);
    //         downElement.style.transform = `rotate(${degrees}deg)`;
    //         // degrees = degrees*(-1);
    //         control = true;
    //     }
    // }, 1000);


    // setInterval(() => {
    //     const upElement = document.querySelector('.lookUp');
    //     // if (degrees === 360) degrees = 0;
    //     if (control2) {
    //         degrees2 += 180;
    //         console.log('if calisti ' + degrees2);
    //         upElement.style.transform = `rotate(${degrees2}deg)`;
    //         control2 = false;
    //     } else {
    //         degrees2 += 180;
    //         console.log('else calisti ' + degrees2);
    //         upElement.style.transform = `rotate(${degrees2}deg)`;
    //         // degrees = degrees*(-1);
    //         control2 = true;
    //     }
    // }, 1000);

    // const downElement = document.querySelector('.lookDown');


    // setInterval(() => {
    //     // İlk üçgenin dönüşü
    //     degrees += 180;


    //     if (control) {
    //         control = false;
    //         downElement.style.transform = `rotate(${degrees}deg)`;
    //         // İlk üçgen 180 derece döndükten sonra ikinci üçgeni başlat
    //         setTimeout(() => {
    //             degreesUp += 180;
    //             upElement.style.transform = `rotate(${degreesUp}deg)`;
    //         }, 500); // 0.5 saniye bekleyerek ikinci üçgenin dönüşünü başlat
    //     } else {

    //         control = true;
    //     }
    // }, 1000);

    const downElement = document.querySelector('.lookDown');
    const upElement = document.querySelector('.lookUp');
    setInterval(() => {

        

        



        if (control) {
            degrees += 180;
            downElement.style.transform = `rotate(${degrees}deg)`;
            setTimeout(() => {
                degreesUp += 180;
                upElement.style.transform = `rotate(${degreesUp}deg)`;
            }, 500); 
            control = false;
        } else {
            degrees += 180;
            downElement.style.transform = `rotate(${degrees}deg)`;
            setTimeout(() => {
                degreesUp += 180;
                upElement.style.transform = `rotate(${degreesUp}deg)`;
            }, 500); 
            control = true;
        }
    }, 1000);

};
  

// function changeClass() {
//     let degrees = 180;
//     const downElement = document.querySelector('.lookDown');

//     if(downVal){
//         downElement.style.transform = `rotate(${degrees}deg)`;
//         downVal = false;
//         console.log('if calisti' + degrees);
//     }else{
//         degrees = degrees + 180;
//         downElement.style.transform = `rotate(${degrees}deg)`;
//         downVal = true;
//         console.log('else calisti' + degrees);
//     }
// }


function changeClass() {
    const downElement = document.querySelector('.lookDown');


    // console.log('if calisti' + degrees);
    // downElement.style.transition = 'all 0.3s ease-in-out';
    if(control){
        console.log('if calisti');
        // downElement.style.transform = `rotate(${degrees}deg)`;
        downElement.style.transform = `rotate(180deg)`;
        control = false;
    }else{
        console.log('else calisti');
        // downElement.style.transform = `rotate(${degrees + 180}deg)`;
        downElement.style.transform = `rotate(360deg)`;

        downElement.style.transition = `none`;
        downElement.style.transform = `rotate(0)`;
        downElement.style.transition = 'all 0.3s ease-in-out';
        control = true;
        downVal = false;
    }

    
    // if(downVal){
        
    //     console.log('if calisti' + degrees);
    //     // downElement.style.transition = 'all 0.3s ease-in-out';
    //     if(control){
    //         // downElement.style.transform = `rotate(${degrees}deg)`;
    //         downElement.style.transform = `rotate(180deg)`;
    //         control = false;
    //     }else{
    //         // downElement.style.transform = `rotate(${degrees + 180}deg)`;
    //         downElement.style.transform = `rotate(360deg)`;
    //         downElement.style.transition = `none`;
    //         downElement.style.transform = `rotate(0)`;
    //         downElement.style.transition = 'all 0.3s ease-in-out';
    //         control = true;
    //         downVal = false;
    //     }

    // }else{
    //     // downElement.style.transition = `none`;
    //     // downElement.style.transform = `rotate(0)`;
    //     degrees = 0;
    //     // degrees = degrees + 180;
    //     downVal = true;
    //     console.log('else calisti' + degrees);
    // }

}