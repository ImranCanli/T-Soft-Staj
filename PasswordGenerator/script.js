var form = false;
let mobileForm = false;
var uppercase = false; 
var lowercase = false;
var numbers = false;
var symbols = false;

window.onload = (event) => {

    document.getElementById('lenghtVal').defaultValue = 5;
    document.getElementById('lenghtValMobile').defaultValue = 5;
};
  

function generate(dorm) {
    // alert('sifre gonderiyorum !');

    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?";

    let avaliableCharacters = "";
    let ActualpasswordXD = "";
    let length;

    if(dorm === 1){
        length = document.getElementById('lenghtVal').value;
    }else{
        length = document.querySelector('#lenghtValMobile').value;
    }


    const lid = document.getElementById('lid');
    const cube = document.getElementById('cube');
    const button = document.getElementById('generatePassword');
    const Mobilebutton = document.getElementById('generatePasswordMobile');
    const password = document.getElementById('passwordContainer');
    const plate = document.getElementsByClassName('back')[0];
    // const length = document.getElementById('lenghtVal').value;
    const lights = document.getElementsByClassName('light');

    // console.log(' sifre uzunlugu: ' + length.value);
    
    cube.classList.toggle('whenStoppedCube');
    button.classList.toggle('buttonForm');
    Mobilebutton.toggle('buttonForm');

    if(length === null){
        length = 5;
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
        innerPassword.innerText = "";
    } 

    if(form){
        // Burası kutuyu kapatırken calısıyor
        password.classList.remove('passwordReveal');
        plate.classList.remove('upFront');
        button.innerHTML='<p>Get Password</p>';
        Mobilebutton.innerHTML='<p>Get Password</p>';
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
        Mobilebutton.innerHTML = `<i class='bx bx-shuffle' ></i> Shuffle`;
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

function doTheCheckThing(incoming, mord){

    console.log(mord);

    // Masaüstü checkBox'lari
    const uppercaseStatusD = document.querySelector('#uppercase');
    const lowercaseStatusD = document.querySelector('#lowercase');
    const numberStatusD = document.querySelector('#numbers');
    const symbolStatusD = document.querySelector('#symbols');

    //Mobile chechkBox'lari
    const uppercaseStatusM = document.querySelector('#uppercaseM');
    const lowercaseStatusM = document.querySelector('#lowercaseM');
    const numberStatusM = document.querySelector('#numbersM');
    const symbolStatusM = document.querySelector('#symbolsM');


    const uppercaseStatus = document.querySelector('.uppercaseStatus');
    const lowercaseStatus = document.querySelector('.lowercaseStatus');
    const numberStatus = document.querySelector('.numberStatus');
    const symbolStatus = document.querySelector('.symbolStatus');

    if(mord === 1){
        // const uppercaseStatus = document.querySelector('.uppercaseStatus');
        // const lowercaseStatus = document.querySelector('.lowercaseStatus');
        // const numberStatus = document.querySelector('.numberStatus');
        // const symbolStatus = document.querySelector('.symbolStatus');


        switch (incoming) {
            case 1:

            if(uppercase){
                uppercase = false;
                uppercaseStatusM.checked = false;
                uppercaseStatus.classList.remove('itsAlive');

            }else{
                uppercase = true;
                uppercaseStatusM.checked = true; //Burası sıkıntılı degil artik :)))
                // uppercaseStatusM.classList.add('activeCheck'); //Burası sıkıntılı
                uppercaseStatus.classList.add('itsAlive');
            }
            break;
            case 2:
                
            if(lowercase){
                lowercase = false;
                lowercaseStatusM.checked = false;
                lowercaseStatus.classList.remove('itsAlive');
            }else{
                lowercase = true;
                lowercaseStatusM.checked = true;
                lowercaseStatus.classList.add('itsAlive');
            }
    
            break;
            case 3:
    
            if(numbers){
                numbers = false;
                numberStatusM.checked = false;
                numberStatus.classList.remove('itsAlive');
            }else{
                numbers = true;
                numberStatusM.checked = true;
                numberStatus.classList.add('itsAlive');
            }        
                
            break;
            case 4:
                
            if(symbols){
                symbols = false;                
                symbolStatusM.checked = false;
                symbolStatus.classList.remove('itsAlive');
            }else{
                symbols = true;
                symbolStatusM.checked = true;
                symbolStatus.classList.add('itsAlive');
            }
            break;
            default:
            break;
        }
    }else{

        // Mobile icin kapalı acik gostergeleri
        // const uppercaseStatus = document.querySelector('.uppercaseStatus');
        // const lowercaseStatus = document.querySelector('.lowercaseStatus');
        // const numberStatus = document.querySelector('.numberStatus');
        // const symbolStatus = document.querySelector('.symbolStatus');

        switch (incoming) {
            case 1:
                
            if(uppercase){
                uppercase = false;
                uppercaseStatusD.checked = false;
                uppercaseStatus.classList.remove('itsAlive');
            }else{
                uppercase = true;
                uppercaseStatusD.checked = true;
                uppercaseStatus.classList.add('itsAlive');
            }
            break;
            case 2:
                
            if(lowercase){
                lowercase = false;
                lowercaseStatusD.checked = false;
                lowercaseStatus.classList.remove('itsAlive');
            }else{
                lowercase = true;
                lowercaseStatusD.checked = true;
                lowercaseStatus.classList.add('itsAlive');
            }
            break;
            case 3:
    
            if(numbers){
                numbers = false;
                numberStatusD.checked = false;
                numberStatus.classList.remove('itsAlive');
            }else{
                numbers = true;
                numberStatusD.checked = true;
                numberStatus.classList.add('itsAlive');
            }        
            break;
            case 4:
                
            if(symbols){
                symbols = false;
                symbolStatusD.checked = false;                
                symbolStatus.classList.remove('itsAlive');
            }else{
                symbols = true;
                symbolStatusD.checked = true;
                symbolStatus.classList.add('itsAlive');
            }
            break;
            default:
            break;
        }
    }

    console.log('degerler soyle ; uppercase: ' + uppercase + ', lowercase: ' + lowercase + ', numbers: ' + numbers + ', symbols: ' + symbols);
}

function toggleMobile(){

    document.querySelector('.mobileMenu').classList.toggle('mobileOpen');
    const topItems = document.querySelectorAll('.topItem');


    if(mobileForm){
        // Burasi da kapanirken calisicak
        setTimeout(() => {
            // document.querySelectorAll('.topItem').classList.remove('slideIn');
            document.querySelector('.plenght').classList.remove('slideIn');
            for (let k = 0; k < topItems.length; k++) {
                topItems[k].classList.remove('slideIn');
            }
            mobileForm= false;
        }, 100);    
    }else{
        // Burasi acilirken calisicak
        setTimeout(() => {
            // document.querySelectorAll('.topItem').classList.add('slideIn');
            document.querySelector('.plenght').classList.add('slideIn');
            for (let k = 0; k < topItems.length; k++) {
                topItems[k].classList.add('slideIn');
            }
            mobileForm= true;
        }, 100);    
    }
}

function sychronize(mobieOrDesktop, element){

    if(mobieOrDesktop === 1){
        document.querySelector('#lenghtValMobile').value = element.value; 
    }else{
        document.querySelector('#lenghtVal').value = element.value;
    }
}