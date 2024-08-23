
var topIndex;
window.onload = (event) => {
    const caption1 = document.getElementById("eagle");
    caption1.scrollIntoView(true);
    const iteration = 0;
    localStorage.setItem('iteration', iteration);
    topIndex = 0;
  }; 

function slideDown() {

    if(Number(localStorage.iteration) === 4){
        localStorage.iteration = 0;
    }

    localStorage.iteration = Number(localStorage.iteration) + 1;
    // console.log(localStorage.iteration);
    Slider(Number(localStorage.iteration));
    // imageContainer.scrollTo(0, window.innerHeight);
    // captionContainer.scrollTo(window.innerHeight, 0);
}

function slideUp() {

    if(Number(localStorage.iteration) === 4){
        localStorage.iteration = 0;
    }

    localStorage.iteration = Number(localStorage.iteration) + 1;

    reverseSlide(Number(localStorage.iteration));
}

function Slider(iter){
    const imageContainer = document.getElementById("imgCont");
    const captionContainer = document.getElementById("captionsCont");

    console.log(iter);
    topIndex = topIndex + 1;

    if(iter === 4){
        imageContainer.scrollTo(0, 0);
        topIndex = 0;
        console.log("sayfa basa dondu");
    }else{
        imageContainer.scrollTo(0, (window.innerHeight)*iter);
    }


    const firstCaption = document.getElementById("eagle");
    const secondCaption = document.getElementById("castle");
    const thirdCaption = document.getElementById("sky");
    const fourthCaption = document.getElementById("flower");

    if(iter === 0){
        firstCaption.scrollIntoView(true);
    }else if(iter === 1){
        secondCaption.scrollIntoView(true);
    }else if(iter === 2){
        thirdCaption.scrollIntoView(true);
    }else if(iter === 3){
        fourthCaption.scrollIntoView(true);
    }else{
        firstCaption.scrollIntoView(true); 
    }

    // if(iter === 0){
    //     // captionContainer.scrollTo(0, (((window.innerHeight)*4) - (window.innerHeight)*-1));
    //     captionContainer.scrollTo(0, 0);
    // }else{
    //     captionContainer.scrollTo(0, ( ((window.innerHeight)*4) - (window.innerHeight)*iter ));
    // }
    
    console.log(((window.innerHeight)*iter - ((window.innerHeight)*4)));
}

function reverseSlide(iter){

    const captionContainer = document.getElementById("captionsCont");

    const firstImage = document.getElementById("ilk");
    const secondImage = document.getElementById("ikinci");
    const thirdImage = document.getElementById("ucuncu");
    const fourthImage = document.getElementById("dorduncu");

    const imageContainer = document.getElementById("imgCont");

    // if((iter !== 4)){
    //     imageContainer.scrollBy(0, (window.innerHeight)*-1);
    //     captionContainer.scrollBy(0, window.innerHeight);
    // }else{
    //     imageContainer.scrollBy(0,(window.innerHeight)*4);
    // }

    console.log('reverse slide calisti');

    console.log(topIndex);

    

    if(topIndex === 0){
        console.log("reverse icinde if calisti");

        // captionContainer.scrollBy(0, (window.innerHeight)*(-4));
        captionContainer.scrollBy(0, (window.innerHeight)*-4);
        imageContainer.scrollBy(0, (window.innerHeight)*4);
        topIndex = 4;
    }else{
        console.log("reverse icinde else calisti");
        imageContainer.scrollBy(0, (window.innerHeight)*-1);
        captionContainer.scrollBy(0, window.innerHeight);       // Burada sayfanın başında olup olmadığının kontrolünü yapıyorum. Else bloğu içerisndeki ifadeyi yalnız başına kullanırsam sayfa neredeyse tamamen düzgün çalışıyor.
    }
    topIndex = topIndex -1;

    // if(iter === 0){
    //     fourthImage.scrollIntoView(true);
    //     console.log("ilk iterasyon");
    // }else if(iter === 1){
    //     thirdImage.scrollIntoView(true);
    //     console.log("ikinci iterasyon");
    // }else if(iter === 2){
    //     secondImage.scrollIntoView(true);
    //     console.log("ucuncu iterasyon");
    // }else if(iter === 3){
    //     firstImage.scrollIntoView(true);
    //     console.log("dorduncu iterasyon");
    // }else{
    //     fourthImage.scrollIntoView(true); 
    //     console.log("la bu if'ler calismiyo mu ??");
    // }


    // if(iter === 0){
    //     captionContainer.scrollTo(0, 0);
    // }else{
    //     captionContainer.scrollTo(0, (window.innerHeight)*iter);
    // }
}