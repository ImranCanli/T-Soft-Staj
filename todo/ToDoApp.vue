<template>
  <div class="container fullscrn">
    <h2 class="text-center mt-5">Zor olan başlamak değil, vazgeçmemektir. </h2>
    <div class="d-flex mb-3">
      <input v-model="task" type="text" placeholder="görev gir" class="from-control w-[500px] mr-1">
      <button @click="addTask()" class="btn btn-warning rounded-0">Ekle</button>
    </div>
      <table ref="myTable" class="table table-bordered">
        <thead>
          <tr>
              <th scope="col">Görev</th>
              <th scope="col">Durum</th>
              <th scope="col" class="text-center">Duzenle</th>
              <th scope="col" class="text-center">Kaldir</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(task, index) in tasks" :key="index" class="taskrow">
            <td class="cells"><p class="sallanan">{{task.name}}</p></td>
            <td class="cells genislikWide"><p @click="editStatus(index)" class="sallanan clickable">{{task.status}}</p></td>
            <td class="cells genislik">
              <div class="text-center icontaineredit" @click="editTask(index, $event)">
                <span class="fa fa-pen"></span>
              </div>
            </td>
            <td class="cells genislik">
              <div class="text-center icontainerdelete" @click="deleteTask(index)">
                <span class="fa fa-trash"></span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>    
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
        status: 'tamamlanmadı',
      }]
    }
  },
  methods: {
    addTask(){

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

      const containerTable = this.$refs.myTable;
      const hucreler = containerTable.getElementsByClassName('cells');
      const metinler = containerTable.getElementsByClassName('sallanan');
      // console.log(hucreler.length);

      for (let i = 0; i < hucreler.length; i++) {
        hucreler[i].classList.remove('bgYellow');
        // console.log('for calisiyor');
      }

      for (let k = 0; k < metinler.length; k++) {
        metinler[k].classList.remove('sallanma');
      }

      this.task = '';
    },
    deleteTask(index) {
      this.tasks.splice(index, 1);
    },
    editTask(index, event){
      const element = event.target;
      const parent = element.closest('.taskrow');

      const childs = parent.getElementsByClassName('cells');

      for (let i = 0; i < childs.length; i++) {
          childs[i].classList.add('bgYellow');
          const innerchilds = childs[i].getElementsByClassName('sallanan');

          for (let k = 0; k < innerchilds.length; k++) {
            innerchilds[k].classList.add('sallanma');
          }
      }

      this.task = this.tasks[index].name; 
      this.editedTask = index;

      console.log(this.editedTask)
    },
    editStatus(index) {
      let newindex = this.statusValues.indexOf(this.tasks[index].status);
      if(++newindex > 2){
        newindex = 0;
      }
      this.tasks[index].status = this.statusValues[newindex];
    }
  }
}
</script>

<style scoped>
.icontaineredit, .icontainerdelete{
  cursor: pointer;
}
.icontaineredit:hover{
  color: orange;
}
.icontainerdelete:hover{
  color: orangered;
}

.bgYellow{
  background-color: #FEFBD8;
}

.genislik{
  width: 140px;
}

.genislikWide{
  width: 200px;
}

.clickable{
  cursor: pointer;
  font-weight: 500;
}

.sallanma{
  transform-origin: center;
  animation-name: sallanma;
  animation-duration: .5s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}

@keyframes sallanma {
  0%{
    transform: translateX(0px);
  }
  50%{
    transform: translateX(4px);
  }
  100%{
    transform: translateX(0px);
  }
}
</style>
