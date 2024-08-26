var form = false;
var uppercase = false; 
var lowercase = false;
var numbers = false;
var symbols = false;

window.onload = (event) => {

    document.getElementById('lenghtVal').defaultValue = 10;
};
  

function generate() {
    // alert('sifre gonderiyorum !');

    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?";

    let avaliableCharacters = "";
    let ActualpasswordXD = "";


    const lid = document.getElementById('lid');
    const cube = document.getElementById('cube');
    const button = document.getElementById('generatePassword');
    const password = document.getElementById('passwordContainer');
    const plate = document.getElementsByClassName('back')[0];
    const length = document.getElementById('lenghtVal').value;
    const lights = document.getElementsByClassName('light');

    // console.log(' sifre uzunlugu: ' + length.value);
    
    cube.classList.toggle('whenStoppedCube');
    button.classList.toggle('buttonForm');


    if(length === null){
        length = 10;
    }

    const innerPassword = document.getElementById('password');

    if(uppercase){
        avaliableCharacters = avaliableCharacters + uppercaseChars;
        console.log('üst karakter secildi');}

    if(lowercase){
        avaliableCharacters = avaliableCharacters + lowercaseChars;
        console.log('alt karakter secildi');}
    if(numbers){
        avaliableCharacters = avaliableCharacters + numberChars;
        console.log('rakamlar secildi');}
    if(symbols){
        avaliableCharacters = avaliableCharacters + symbolChars;
        console.log('semboller secildi');}

    if(avaliableCharacters !== ""){
        console.log(length.value);
        console.log('if calisti');
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random()*avaliableCharacters.length);
            ActualpasswordXD = ActualpasswordXD + avaliableCharacters[randomIndex];
        }
        console.log(ActualpasswordXD);
        innerPassword.innerText = ActualpasswordXD;
    }else{
        innerPassword.innerText = " 💜";
    } 

    if(form){
        // Burası kutuyu kapatırken calısıyor
        password.classList.remove('passwordReveal');
        plate.classList.remove('upFront');
        button.innerHTML='<p>Get Password</p>';
        lid.classList.remove('whenStopped'); // Burada yavaşça açılma animasyonunu kaldırıyorum.
        lid.classList.add('whenStoppedSecond'); // WhenStoppedSecond sınıfı animasyonu kaldırıp kapağı bir anda kapatmak için.
        form = false;
        for (let k = 0; k < lights.length; k++) {
            lights[k].classList.remove('risenShine');
        }
    }else{
        //Burası kutuyu acarken calisiyor

        plate.classList.add('upFront');
        lid.classList.remove('whenStoppedSecond'); // Burada bi anda acılıp kapanma sağlayan sınıfı kaldırıyorum.
        setTimeout(() => {
            lid.classList.toggle('whenStopped'); // WhenStopped sınıfı kutu durduğunda kapağı yavaşça açmak içicn 
            // lid.classList.remove('whenStoppedSecond');
        }, 1000);
        setTimeout(() => {
            for (let k = 0; k < lights.length; k++) {
                lights[k].classList.add('risenShine');
            }
            password.classList.add('passwordReveal');
        }, 1500);
        button.innerHTML = `<i class='bx bx-shuffle' ></i> Shuffle`;
        form = true;
    }
    // console.log(form);

    // lid.classList.add('whenStoppedSecond');
}

function copyPassword(){
    var password = document.getElementById('password');
    const boom = document.getElementById('boom');
    // password.select();
    // password.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(password.innerText);
    boom.classList.add('flashOpen');

    setTimeout(() => {
        boom.classList.add('fadeAwayLikeMyDreams');
    }, 100);
    setTimeout(() => {
        boom.classList.remove('flashOpen');
        boom.classList.remove('fadeAwayLikeMyDreams');
    }, 1000);
}

function doTheCheckThing(incoming){

    switch (incoming) {
        case 1:
            
        if(uppercase){
            uppercase = false;
        }else{
            uppercase = true;
        }
        break;
        case 2:
            
        if(lowercase){
            lowercase = false;
        }else{
            lowercase = true;
        }

        break;
        case 3:

        if(numbers){
            numbers = false;
        }else{
            numbers = true;
        }        
            
        break;
        case 4:
            
        if(symbols){
            symbols = false;
        }else{
            symbols = true;
        }
        break;
        default:
        break;
    }

    console.log('degerler soyle ; uppercase: ' + uppercase + ', lowercase: ' + lowercase + ', numbers: ' + numbers + ', symbols: ' + symbols);
}