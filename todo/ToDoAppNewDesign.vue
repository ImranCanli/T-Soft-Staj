<template>
  <div class="overlay"></div>
    <div class="container fullscrn">
      <!-- <h2 class="text-center mt-5 mb-5">Burada biseyler yazıyo </h2> -->
      <div class="d-flex mb-3" style="justify-content: start;">
        <!-- <input v-model="task" type="text" placeholder="görev gir" class="customInput">
        <button @click="addTask()" class="butonCustom" style="border-top-right-radius: 8px;">Ekle</button> -->
        <!-- <button @click="compeletedOnes()" class="btn btn-warning rounded-0">Eski</button> -->
      </div>


        <div class="notesContainer">
            <div class="ekleme" @click="gorunurYap()" id="ekleme">
                <i class='bx bx-book-add'></i>
            </div>
            <div class="inputcontainer disappear" id="inputcontainer">
                <textarea value="" class="addNote" id="textinput" v-model="task"></textarea>
                <button id="addBtn" @click="addTask()" class="addBtn disappearBtn">Ekle</button>
                <button id="cancelBtn" class="CancelBtn disappearBtn" @click="geriDon()">Iptal</button>
            </div>

            <div id="notesCont" class="notesCont">
                <div class="separator"></div>
                <div v-for="(task, index) in tasks" :key="index" @click="notDuzenle(index)" class="notes taskrow">
                    <div class="preview">
                        <div @click="editStatus(index)" class="statusDisplay" :class="statuClass(task.status)"></div>
                        <p style="margin-top: 15px;" :class="taskCompeletedState(task.status)">{{ task.name }}</p>
                    </div>
                    <div id="actions" class="actions disappearActions">
                        <i @click="editTask(index, task.name)" class='bx bxs-edit-alt'></i>
                        <i @click="deleteTask(index, $event)" class='bx bxs-trash' ></i>
                    </div>
                </div>
            </div>
        </div>


        <!-- <table ref="myTable" class="customTable" style="border-radius: 10px;"> -->


          <!-- <thead>
            <tr>
                <th scope="col">Görev</th>
                <th scope="col">Durum</th>
                <th scope="col" class="text-center">Duzenle</th>
                <th scope="col" class="text-center">Kaldir</th>
            </tr>
          </thead> -->


          <!-- <tbody>
            <tr v-for="(task, index) in tasks" :key="index" class="taskrow" style="transition: all 0.3s ease-out;">
              <td class="cells swipe"><p class="sallanan">{{task.name}}</p></td>
              <td class="cells genislikWide swipe"><p @click="editStatus(index)" class="clickable">{{task.status}}</p></td>
              <td class="cells genislik swipe">
                <div class="text-center icontaineredit" @click="editTask(index, $event)">
                  <span class="fa fa-pen"></span>
                </div>
              </td>
              <td class="cells genislik swipe">
                <div class="text-center icontainerdelete" @click="deleteTask(index, $event)">
                  <span class="fa fa-trash"></span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>     -->
    </div>
  </template>
  
  <script>
  export default {
    name: 'HelloWorld',
    props: {
      msg: String
    },
  
    data(){
      return{
        task: '',
        editedTask: null,
        statusValues: ['tamamlanmadı', 'tamamlandı', 'beklemede'],
        tasks:[ {
          name: 'Biseyler yap',
          status: 'tamamlanmadı',
        },
        {
          name: 'Calis',
          status: 'tamamlandı',
        }]
      }
    },
    methods: {
      addTask(){
  
        const buton = document.getElementsByClassName('addBtn'); //degisti
        buton[0].innerText = "Ekle";
  
        if(this.editedTask === null){
          if(this.task.length !== 0){
          this.tasks.push({
            name: this.task,
            status: 'tamamlanmadı',
          });
        }else{
          return;
        }
        }else{
          this.tasks[this.editedTask].name = this.task;
          this.editedTask = null;
        }
        
        this.task = '';
        this.saveToLocal();

        document.getElementsByClassName('overlay')[0].classList.remove('overlayActive');
      },
      deleteTask(index, event) {
        // Burada gerekli yerlere gerekli sınıfları ekleyecem. devam
        const element = event.target;
        const parent = element.closest('.taskrow');
        const hucreler = parent.getElementsByClassName('cells');
  
        const tumHucreler = document.getElementsByClassName('cells');
  
        for (let i = 0; i < hucreler.length; i++) {
          hucreler[i].classList.add('bgRed');
          hucreler[i].classList.add('leftTheChat');
  
          console.log('burasi calisti mi simdi ?');
        }
        // parent.classList.add('leftTheChat');
  
        setTimeout(() => {
          this.tasks.splice(index, 1);
          this.saveToLocal();
  
          for (let k = 0; k < tumHucreler.length; k++) {
          tumHucreler[k].classList.remove('bgRed');
          tumHucreler[k].classList.remove('leftTheChat');
        }
        }, 300);
  
      },
      editTask(index, icerik){

        if(document.getElementById('inputcontainer').classList.contains('disappear')){
            this.gorunurYap();
        }

        const allNotes = document.getElementsByClassName('notes');

        for (let j = 0; j < allNotes.length; j++) {
          allNotes[j].classList.remove('editingBorder');
        }

        allNotes[index].classList.add('editingBorder');
        const buton = document.getElementsByClassName('addBtn'); //degisti
        buton[0].innerText = "Güncelle";

        this.task = icerik;
        this.editedTask = index;

         document.getElementsByClassName('addNote')[0].value = icerik;


        console.log( document.getElementsByClassName('addNote')[0].value);
        
        this.saveToLocal();
      },
      textClasses(){
        const allStatusTexts = document.getElementsByClassName('clickable');
        for (let i = 0; i < allStatusTexts.length; i++) {
          const contnt = allStatusTexts[i].innerText;
          if(contnt === "tamamlandı"){
            allStatusTexts[i].classList.add('txtGreen');
          }else if(contnt === "beklemede"){
            allStatusTexts[i].classList.add('txtOrange');
          }else{
            allStatusTexts[i].classList.add('txtRed');
          }
        }
      },
      editStatus(index) {
        let newindex = this.statusValues.indexOf(this.tasks[index].status);
        if(++newindex > 2){
          newindex = 0;
        }
        this.tasks[index].status = this.statusValues[newindex];
        
        console.log('burası calisti mi simdi ?');
        this.saveToLocal();
      },
      statuClass(status){
        if(status === "beklemede"){
            return "bg-orange"
        }else if(status === "tamamlandı"){
            return "bg-green taskCompeleted"
        }else{
            return "bg-red"
        }
      },
      taskCompeletedState(status){
        if(status === "tamamlandı"){
            return "taskCompeleted"
        }
      },
      gorunurYap(){
        const ekleyici =  document.getElementById('ekleme');
        const iptalBtn =  document.getElementById('cancelBtn');
        const ekleBtn =  document.getElementById('addBtn');
        const notesCont =  document.getElementById('notesCont');
        const textinput = document.getElementById('inputcontainer');
        ekleyici.classList.toggle('disappear');
        textinput.classList.remove('disappear');

        iptalBtn.classList.remove('disappearBtn');
        ekleBtn.classList.remove('disappearBtn');
        notesCont.classList.add('goDown');

        document.getElementsByClassName('overlay')[0].classList.add('overlayActive'); // buraya dokun
      },
      notDuzenle(index){
        const allNotes = document.getElementsByClassName('notes');

        for (let i = 0; i < allNotes.length; i++) {
            // allNotes[i].classList.remove('activeNotes');
            allNotes[i].getElementsByClassName('actions')[0].classList.add('disappearActions');
            allNotes[i].classList.remove('editingBorder');
        }
            // allNotes[index].classList.add('activeNotes');
            // allNotes[index].classList.add('editingBorder');
            const actions =  allNotes[index].getElementsByClassName('actions');
            actions[0].classList.remove('disappearActions');
        },
        geriDon() {
            const ekleyici = document.getElementById('ekleme');
            const textinput = document.getElementById('inputcontainer');
            ekleyici.classList.toggle('disappear');
            textinput.classList.add('disappear');
            const notesCont =  document.getElementById('notesCont');


            const iptalBtn =  document.getElementById('cancelBtn');
            const ekleBtn =  document.getElementById('addBtn');
            iptalBtn.classList.add('disappearBtn');
            ekleBtn.classList.add('disappearBtn');
            notesCont.classList.remove('goDown');

            document.getElementsByClassName('overlay')[0].classList.remove('overlayActive');
        },
      saveToLocal(){
        const parsed = JSON.stringify(this.tasks);
        localStorage.setItem('tasksStored', parsed);
      }
    },
    
    mounted() {
      // console.log('burada sayfa yukleniyor glb');
      if(localStorage.getItem('tasksStored')){
        try {
          this.tasks = JSON.parse(localStorage.getItem('tasksStored'));
        } catch (error) {
          console.log(error);
        }
      }
      
    }
  }
  </script>
  
  <style scoped>
    .bg-orange {
    background-color: orange;
    }

    .bg-green {
    background-color: green;
    }

    .bg-red {
    background-color: red;
    }

  .fullscrn{
    width: 100vw;
    height: 100vh;
    /* z-index: 0;
    filter: blur(2px); */
  }
  
  .notKagıdı{
    position: absolute;
    left: 0;
    top: 0;
    width: 500px;
    border: 1px solid black;
    border-radius: 5px;
    padding: 8px;
    height: 600px;
    overflow-y: scroll;
    background-color: bisque;
  }

  .second{
    left: 600px;
    top: 0;
  }

  body {
      width: 100vw;
      height: 100vh;
      background-color: #EEEDEB;
  }

  .notesContainer{
      width: 60%;
      height: 600px;
      margin: 0 auto;
      margin-top: 50px;
      background-color: white;
      border-radius: 10px;
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 30px;
      position: relative;
      overflow-y: scroll;
      z-index: 1;
  }

  .notesContainer::-webkit-scrollbar{
      display: none;
  }

  .ekleme{
      width: 90%;
      min-height: 200px;
      background-color: #EEEDEB;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      cursor: pointer;
  }

  .ekleme:hover{
      background-color: gainsboro;
  }

  .addNote{
      font-size: small;
      width: 90%;
      height: 160px;
      border-radius: 10px;
      border: 1px solid #C7C8CC;
      background-color: white;
      font-family: 'Tahoma';
      padding: 10px;
      transition: all 0.3s ease-out;
      z-index: 1;
  }

  .inputcontainer{
      display: flex;
      flex-direction: column;
      width: 90%;
      height: 240px;
      margin: 0 auto; 
      align-items: center;
      padding-top: 10px;
      margin-bottom: 20px;
      transition: all 0.3s ease-out;
  }

  .addBtn{
      display: flex;
      border: none;
      outline: none;
      align-items: center;
      justify-content: center;
      text-align: center;
      background-color: #9DDE8B;
      color: white;
      width: 90%;
      margin: 0 auto;
      height: 40px;
      margin-top: 20px;
      border-radius: 10px;
      font-weight: bold;
      top: 195px;
      cursor: pointer;
      transition: all 0.5s ease-in-out;
      z-index: 0;
      font-size: small;
      letter-spacing: 0;
  }

  .addBtn:hover{
      background-color: forestgreen;
  }

  .disappear{
      transform: translateY(-500px);
  }

  .disappearBtn{
      transform: translateY(-300px);
  }

  .note{
      
      color: black;
      border-radius: 15px;
  }

  .notes{
      width: 90%;
      height: min-content;
      border-radius: 10px;
      margin: 0 auto;
      margin-top: 10px;
      border: 1px solid #E2DAD6;
      display: flex;
      align-items: center;
      justify-content: space-between;
      transition: all 0.3s ease-in-out;
      padding-left: 10px;
      font-family: 'Tahoma';
      font-size: small;
      color: grey;
      cursor: pointer;
      overflow: hidden;
      padding: 2px;
      background-color: #F6F5F2;
  }

  .editingBorder{
      border: 2px solid orange;
  }            

  .activeNotes{
      height: 200px;
      padding-top: 10px;
      align-items: start;
  }

  .CancelBtn{
      width: 90%;
      height: 40px;
      border-radius: 10px;
      margin: 0 auto;
      margin-top: 10px;
      border: none;
      outline: none;
      background-color: #EE4E4E;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      font-weight: bold;
      color: white;
      font-family: 'Tahoma';
      cursor: pointer;
      top: 255px;
      transition: all 0.5s ease-in-out;
      z-index: 0;
      font-size: small;
      letter-spacing: 0;
  }

  .CancelBtn:hover{
      background-color: #C80036;
  }

  .notesCont{
      width: 90%;
      overflow-y: scroll;
      display: flex;
      flex-direction: column;
      align-items: center;
      min-height: 80%;
      position: absolute;
      top: 250px;
      transition: all 0.3s ease-in-out;
  }

  .notesCont::-webkit-scrollbar{
      display: none;
  }

  .goDown{
      transform: translateY(50px);
  }

  .separator{
      background-color: #C7C8CC;
      width: 80%;
      height: 1px;
      margin: 0 auto;
  }

  .actions{
      display: flex;
      align-items: center;
      justify-content: space-around;
      transition: all 0.3s ease-in-out;
  }

  .disappearActions{
      transform: translateX(200px);
  }

  .preview{
      display: flex;
      width: 75%;
      transition: all 0.3s ease-in-out;
      overflow: hidden;
  }

  .statusDisplay{
      min-width: 15px;
      height: 15px;
      border-radius: 50%;
      margin: auto 10px;
  }

  .compeleted{
      background-color: green;
  }
  .pending{
      background-color: orange;
  }

  .overlay{
    width: 100vw;
    height: 100vh;
    position: absolute;
    filter: blur(1px);
    background-image: url('../../public/bg-image.jpg');
    transition: all 0.2s ease-out;
    background-repeat: round;
  }

  .overlayActive{
    filter: blur(0px);
  }

  .taskCompeleted{
    text-decoration: line-through;
  }
  </style>
  