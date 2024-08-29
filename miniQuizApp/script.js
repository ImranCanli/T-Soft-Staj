let question = 0;
let option = null;
// let questions = ["Which language runs in a web browser?", "What does CSS stand for?", "What does HTML stand for?", "What year was JavaScript launched?"];
// let options1 = ["Java", "C", "Python","Javascript"]; 
// let options2 = ["Central Style Sheets", "Cascading Style Sheets", "Cascading Simple Sheets","Cars SUVs Sailboats"]; 
// let options3 = ["Hypertext Markup Language", "Hypertext Markdown Language", "Hyperloop Machine Language","Helicopters Terminals Motorboats Lamborginis"]; 
// let options4 = ["1996", "1995", "1994","none of the "]; 
let correct = 0;

let questionStructure = [
    {
        questionIndex: 1,
        question: "Which language runs in a web browser?",
        opttions: ["Java", "C", "Python","Javascript"],
        answer: 3,
    },
    {
        questionIndex: 1,
        question: "What does CSS stand for?",
        opttions: ["Central Style Sheets", "Cascading Style Sheets", "Cascading Simple Sheets","Cars SUVs Sailboats"],
        answer: 1,
    },
    {
        questionIndex: 1,
        question: "What does HTML stand for?",
        opttions: ["Hypertext Markup Language", "Hypertext Markdown Language", "Hyperloop Machine Language","Helicopters Terminals Motorboats Lamborginis"],
        answer: 0,
    },
    {
        questionIndex: 1,
        question: "What year was JavaScript launched?",
        opttions: ["1996", "1995", "1994","none of the above"],
        answer: 2,
    },
]

window.onload = (event) => {
    document.querySelector('.questionBody').innerHTML = `
    <p class="question">${questionStructure[0].question}</p>
    <div class="multipleChoice">
        <div class="choiceContainer" data-choice="1" onclick="pickAnswer(0, this)">
            <p>${questionStructure[0].opttions[0]}</p>
        </div>
        <div class="choiceContainer" data-choice="2" onclick="pickAnswer(1, this)">
            <p>${questionStructure[0].opttions[1]}</p>
        </div>
        <div class="choiceContainer" data-choice="3" onclick="pickAnswer(2, this)">
            <p>${questionStructure[0].opttions[2]}</p>
        </div>
        <div class="choiceContainer" data-choice="4" onclick="pickAnswer(3, this)">
            <p>${questionStructure[0].opttions[3]}</p>
        </div>
    </div>
`;
};  

function pickAnswer(choice, element){
    option = choice;
    const allChoices = document.querySelectorAll('.choiceContainer');
    const bg = document.querySelector('.chameleon')

    for (let k = 0; k < allChoices.length; k++) {
        allChoices[k].classList.remove('selected');
    }
    
    element.classList.toggle('selected');
    // console.log(option);

    switch (choice) {
        case 0:
            bg.style.opacity = '0';
            setTimeout(() => {
                bg.style.background = 'linear-gradient(13deg, rgba(255,255,255,1) 26%, rgba(165,62,249,1) 79%)';
                bg.style.opacity = '1';
              }, 200);   
            break;
    
        case 1:
            bg.style.opacity = '0';
            setTimeout(() => {
                bg.style.background = 'linear-gradient(343deg, rgba(255,255,255,1) 26%, rgba(62,160,249,1) 79%)';
                bg.style.opacity = '1';
            }, 200);   
            break;
    
        case 2:
            bg.style.opacity = '0';
            setTimeout(() => {
                bg.style.background = 'linear-gradient(203deg, rgba(255,255,255,1) 26%, rgba(249,62,62,1) 79%)';
                bg.style.opacity = '1';
            }, 200);  
            break;
    
        case 3:
            bg.style.opacity = '0';
            setTimeout(() => {
                bg.style.background = 'linear-gradient(180deg, rgba(255,255,255,1) 26%, rgba(62,249,225,1) 79%)';
                bg.style.opacity = '1';
            }, 200);  
            break;
    
        default:
            break;
    }
}

function changeQuestion(){
    if(option !== null){



        if(option === questionStructure[question].answer){
            correct = correct + 1;
            console.log('dogru cevap');
        }
        console.log(option);
        console.log(questionStructure[question].answer);

        question = question + 1;

        if(question <= 3){

            // if(option === questionStructure[question].answer){
            //     correct = correct + 1;
            //     console.log('dogru cevap');
            // }
            // console.log(option);
            // console.log(questionStructure[question].answer);

            // question = question + 1;

            document.querySelector('.questionContainer').style.transform = 'translateY(700px) scale(0.5)';
            setTimeout(() => {
                document.querySelector('.questionContainer').style.transform = 'translateY(0) scale(1)';
            }, 500);  


            document.querySelector('.questionBody').innerHTML = `
                <p class="question">${questionStructure[question].question}</p>
                <div class="multipleChoice">
                    <div class="choiceContainer" data-choice="1" onclick="pickAnswer(0, this)">
                        <p>${questionStructure[question].opttions[0]}</p>
                    </div>
                    <div class="choiceContainer" data-choice="2" onclick="pickAnswer(1, this)">
                        <p>${questionStructure[question].opttions[1]}</p>
                    </div>
                    <div class="choiceContainer" data-choice="3" onclick="pickAnswer(2, this)">
                        <p>${questionStructure[question].opttions[2]}</p>
                    </div>
                    <div class="choiceContainer" data-choice="4" onclick="pickAnswer(3, this)">
                        <p>${questionStructure[question].opttions[3]}</p>
                    </div>
                </div>
            `;
            option = null;
        }else{
            if(correct >= 3){

                document.querySelector('.questionContainer').innerHTML = `
                    <div class="result">
                        <p style="font-size: 20px">You answered ${correct}/4 questions right!</p>
                        <i class='bx bx-party happy'></i>
                        <div class="button" onclick="replay()">Restart</div>
                    </div>
                `;
                console.log('parti ikonum nerde lan !!');
                confetti({
                    particleCount: 150,
                    spread: 200,
                    origin: { y: 0.6 }
                });

            }else{
                document.querySelector('.questionContainer').innerHTML = `
                <div class="result">
                    <p style="font-size: 20px">You answered ${correct}/4 questions right!</p>
                    <i class='bx bx-sad sorry'></i>
                    <div class="button" onclick="replay()">Restart</div>
                </div>
            `;
            console.log('uzgun ikonum nerde lan !!');
            }
            question = 0;
        }
    }else{
        document.querySelector('.warning').style.transform = 'translateY(-101%)';
        setTimeout(() => {
            document.querySelector('.warning').style.transform = 'translateY(-300%)';
          }, 500);          
    }
    console.log('Burada kacıncı soru islendigi yaziyor :' + question)
}


function replay(){
    window.location.reload();
}