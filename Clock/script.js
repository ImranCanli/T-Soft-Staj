window.addEventListener("load", (event) => {
        
        //getHours() fonksiyonu şu şekilde bir değer dönderiyor; 16, ('24/16' Şeklinde bir oran kullanmam gerekiyor)
        //getMinutes() fonksiyonu şu şekilde bir değer dönderiyor; 34; ('60/34' Şeklinde bir oran kullanmam gerekiyor)
        //getSeconds() fonksiyonu şu şekilde bir değer dönderiyor; 51 ('60/51' Şeklinde bir oran kullanmam gerekiyor)

        synchronizeWithSecondHand();
        synchronizeWithHourChange();

        const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        const months = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
        // console.log(`Bu isime yarar mı ? ${currentdate.getSeconds()}`);

        var currentdate = new Date();
        const seconds = currentdate.getSeconds();
        const minutes = currentdate.getMinutes();
        const hours = currentdate.getHours();

        const hourAngle = 90 + (hours % 12 * 30) + (minutes / 2); 
        const secondsAngle = 90 + (seconds * 6);
        const minuteAngle = 90 + (minutes * 6) + (seconds / 10);

        // var minuteAngleTry;
        // var hourAngleTry;

        // if(hours > 12) {
        //      minuteAngleTry = 360/(60/minutes);
        //      hourAngleTry = 360/(24/hours);
        // }else{
        //      minuteAngleTry = 360/(60/minutes) + 90;
        //      hourAngleTry = 360/(24/hours) - 90;
        //      console.log('saat ham derecesi:', hourAngle);
        //      console.log('dk ham derecesi:', minuteAngle);
        //      console.log('sn ham derecesi:', secondsAngle);
        // }

        // const secondAngleTry = 360/(60/seconds);

        // console.log(hourAngleTry);

        // const secondsEndTry = secondAngleTry + 360;
        // const minutesEndTry = minuteAngleTry + 360;
        // const hoursEndTry = hourAngleTry + 360;

        document.documentElement.style.setProperty('--changeSeconds', `${secondsAngle}deg`);
        document.documentElement.style.setProperty('--changeMinute', `${minuteAngle}deg`);
        document.documentElement.style.setProperty('--changeHours', `${hourAngle}deg`);
        document.documentElement.style.setProperty('--changeSecondsEnd', `${secondsAngle + 360}deg`);
        document.documentElement.style.setProperty('--changeMinuteEnd', `${minuteAngle + 360}deg`);
        document.documentElement.style.setProperty('--changeHoursEnd', `${hourAngle + 360}deg`);

        document.getElementsByClassName('text')[0].innerText = days[currentdate.getDay() - 1] + ", " + months[currentdate.getMonth()];
        document.getElementsByClassName('dayinMonth')[0].innerText = currentdate.getDate();
        document.getElementsByClassName('hourText')[0].innerText = currentdate.getHours();
        document.getElementsByClassName('minuteText')[0].innerText = currentdate.getMinutes();

        changeMinuteText();
        changeHourText();
});

  
function changeMinuteText() {
    var currentdate = new Date();
    document.getElementsByClassName('minuteText')[0].innerHTML = currentdate.getMinutes().toString();
    console.log("degisti!!!");
}

function changeHourText() {
    var currentdate = new Date();
    document.getElementsByClassName('hourText')[0].innerHTML = currentdate.getHours().toString();
    console.log("degisti!!! (saat)");
}

function synchronizeWithSecondHand() {
    var currentdate = new Date();
    const seconds = currentdate.getSeconds();

    const timeUntilNextMinute = (60 - seconds) * 1000;

    setTimeout(() => {
        changeMinuteText();

        setInterval(changeMinuteText, 60000);
    }, timeUntilNextMinute);
}

function synchronizeWithHourChange() {
    var currentdate = new Date();
    const minutes = currentdate.getMinutes();
    const seconds = currentdate.getSeconds();

    const timeUntilNextHour = ((60 - minutes - 1) * 60 + (60 - seconds)) * 1000;

    setTimeout(() => {
        changeHourText();

        setInterval(changeHourText, 3600000); //BUrası 1 saat
    }, timeUntilNextHour);
}


setInterval(changeMinuteText, 60000);
setInterval(changeHourText, (60000 * 60));

function toggleTheme() {

    document.getElementById('body').classList.toggle('light')
    document.getElementById('uiswitch').classList.toggle('uiswitchLight')
    document.getElementById('minute').classList.toggle('lightMinute');
    document.getElementById('hour').classList.toggle('lightHour');
    document.getElementById('dotWhite').classList.toggle('dotWhiteLight');
    document.getElementById('dayofMonth').classList.toggle('dayofMonthLight');
    document.getElementById('dayinMonth').classList.toggle('dayinMonthLight');
}