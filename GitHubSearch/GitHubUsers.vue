<template>
    <div class="fullscrn">

        <div class="title">
            <h1>GITHUB</h1> 
            <h1 style="margin-top: -180px; margin-left: 100px;">SEARCH</h1>
        </div>

        <div class="actualPart">
        <div class="glass">
            <div class="newCont">

                <div v-if="loading" class="loadingContainer">
                    <div class="top"></div>
                    <div class="right"></div>
                    <div class="bottom"></div>
                    <div class="left"></div>
                </div>

                <div v-if="error && !loading" class="errorCont">
                    <div style="display: flex; align-items: center; flex-direction: column;">
                        <i class='bx bx-error customIconError' ></i>
                        <p class="errorCaption">Birşeyler yanlış gitti. (İsmi kontrol etmeyi deneyin)</p>
                    </div>
                </div>


                <div v-if="user.name && !error && !loading" class="incomingData">
                    <div class="imgCont"> 
                        <div class="profileImgCont">
                            <img class="profileImg" :src="user.img ? user.img : '../../public/User-default.jpg'"/>
                        </div>
                    </div>

                    <div class="detailsCont">
                        <p class="isim">{{ user.name }}</p>
                        <p class="bio">{{ user.bio ? user.bio : 'Biyografi eklenmemis' }}</p>
                        <div class="followerCont">
                            <p style="margin-right: 15px;">{{ user.followers }}&nbsp;Followers</p>
                            <p style="margin-right: 15px;">{{ user.following }}&nbsp;Followers</p>
                            <p>{{ user.publicRepos }}&nbsp;Repos</p>
                        </div>
                        <div class="BottomCont">
                            <div v-for="(repo, index) in repos" :key="index" class="badge">
                                <a style="text-decoration: none; color: white; font-size: small; font-weight: normal;" target="_blank" :href="repo.url">{{ repo.rname }}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="customContainer">
                <input type="text" placeholder="Kullanıcı arayın..." v-model="nameInput" class="customInput">
                <i @click="userFetch()" class='bx bx-search customIcon'></i>
            </div>
        </div>
        </div>

    <!--Buradan yukarısı benim tasarım için eklediğim yer-->

        <!-- <div class="customContainer">
            <input type="text" placeholder="Kullanıcı arayın..." v-model="nameInput" class="customInput">
            <i @click="userFetch()" class='bx bx-search customIcon'></i>
        </div> -->

        <!-- <div v-if="user.name && !error && !loading" class="incomingData">
            <div class="imgCont"> 
                <div class="profileImgCont">
                    <img class="profileImg" :src="user.img ? user.img : '../../public/User-default.jpg'"/>
                </div>
            </div>
            <div class="detailsCont">
                <p class="isim">{{ user.name }}</p>
                <p class="bio">{{ user.bio ? user.bio : 'Biyografi eklenmemis' }}</p>
                <div class="followerCont">
                    <p style="margin-right: 15px;">{{ user.followers }}&nbsp;Followers</p>
                    <p style="margin-right: 15px;">{{ user.following }}&nbsp;Following</p>
                    <p>{{ user.publicRepos }}&nbsp;Repos</p>
                </div>
                <div class="BottomCont">
                    <div v-for="(repo, index) in repos" :key="index" class="badge">
                        <a style="text-decoration: none; color: white;" target="_blank" :href="repo.url">{{ repo.rname }}</a>
                    </div>
                </div>
            </div>
           
            
        </div> -->
    </div>
    <!-- <UserDisplay :users="user" :repos="repos"></UserDisplay> -->
</template>
    
    <script>
    import axios from 'axios';
    // import UserDisplay from './UserDisplay.vue';

    export default {
      name: 'HelloWorld',
      props: {
        msg: String
      },
    //   components: {
    //     UserDisplay,
    //   },
      data(){
        return{
            APIURL: 'https://api.github.com/users/',
            fetchedData: null,
            loading: false,
            error: null,
            nameInput: '',
            repos: [{
                rname: '',
                url: '',
            }],
            user: {
                name: '',
                img: '',
                bio: '',
                followers: 0,
                following: 0,
                publicRepos: '',
            },
        };
      },
      watch: {
        'user.name': function (newVal){
            if(newVal){
                this.$nextTick(() => {
                this.slideDown();
                });
            }
        }
      },
      methods: {
        async fetchData(){
            this.loading = true;
            this.error= null;
            try {
                const response = await axios(this.APIURL + this.nameInput);
                const incomningUser = response.data;
                this.user = {
                    name: incomningUser.name,
                    img: incomningUser.avatar_url,
                    bio: incomningUser.bio,
                    followers: incomningUser.followers,
                    following: incomningUser.following,
                    publicRepos: incomningUser.public_repos,
                }
                this.fetchRepos(this.nameInput);
            } catch (error) {
                this.error = 'Hata! :(';
                console.log(error);
            }finally{
                this.loading = false;
            }
        },
        async fetchRepos(name) {
            try {
                const response = await axios(this.APIURL + name + '/repos?sort=created');
                const incomingRepos = response.data;
                
                this.repos = incomingRepos.slice(0, 5).map(repo => {
                    return {
                        rname: repo.name,
                        url: repo.html_url
                    };
                });

            } catch (error) {
                this.error = 'Hataaaa';
                console.log('Hata olustu tüh');
            }
        },
        slideDown(){

            if(this.error){
                document.getElementsByClassName('errorCont')[0].classList.add('mgTop');
            }else{
                document.getElementsByClassName('incomingData')[0].classList.add('mgTop');
            }
        },
        userFetch(){
            // console.log('Click calisti');
            this.fetchData();
        },
      },
      mounted() {
        // this.fetchData();
        // this.user = {
        //     name: '',
        //     bio: '',
        //     followers: 0,
        //     following: 0,
        //     img: '',
        //     publicRepos: '',
        // }
        console.log('Fonksiyonlar çalışıyor');
      }
    }
    </script>
    
    <style scoped>
  .customInput{
      border: none;
      outline: none;
      width: 50%;
      height: 50px;
      border-radius: 15px;
      opacity: 0.9;
      padding: 5px;
      padding-left: 10px;
      color: #ac1df8;
      /* color: black; */
      transition: all 0.1s ease-in-out;
      cursor: pointer;
      font-weight: normal;
      margin: 25px 0;
      background-color: #B4B4B8;
  }

  .customInput:hover{
      background-color: #ccc;
      transform: scale(1.1px);
  }

  .customInput:focus{
      border: 1px solid #ac1df8;
      background: transparent;
      color: white;
  }

    /* .fullscrn{
        width: 100vw;
        height: 100vh;
        background-color: black;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    } */

    .fullscrn{
      width: 100vw;
      height: 100vh;
      background-color: black;
      display: grid;
      grid-template-columns: 50% 50%;
      background-image: url('../../public/bg-abstract.jpg');
      background-size: cover;
      background-position: 0px;
      overflow: hidden;
    }

    .title{
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    color: white;
    font-weight: bold;
  }

  .title h1{
    font-size: xx-large;
    font-weight: 800;
    width: 100%;
    font-size: 500px;
    letter-spacing: -35px;
    margin: 0;
    opacity: 0.5;
  }

  .glass{
    position: absolute;
    top: 200px;
    width: 60vw;
    height: 70vh;
    right: 300px;
    display: flex;
    align-items: end;
    justify-content: center;
    border-radius: 15px;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(10px);
  }

  .newCont{
    width: 95%;
    height: 95%;
    border-radius: 10px;
    border: 1px solid #ac1df8;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .greatest{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 70vw;
    height: 60vh;
    border-radius: 10px;
    padding: 20px 10px;
    background-color: black;
  }

    /* .incomingData{
        width: 60%;
        height: min-content;
        padding: 10px;
        border: 1px solid white;
        border-radius: 10px;
        display: grid;
        grid-template-columns: 30% 70%;
        transform: translateY(0);
        transition: all 0.3s ease-out;
        background: rgb(172,29,248);
        background: linear-gradient(106deg, rgba(172,29,248,1) 0%, rgba(0,0,0,0.9887604700083158) 49%);
    } */

    .incomingData{
      margin: 0 auto;
      margin-top: -150px;
      width: 60%;
      height: min-content;
      padding: 10px;
      border: 1px solid white;
      border-radius: 5px;
      display: grid;
      grid-template-columns: 30% 70%;
      transform: translateY(0);
      transition: all 0.3s ease-out;
      background-color: black;
      box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
      color: #C7C8CC;
    }    

    .errorCont{
        margin-top: 50px;
        width: 60%;
        height: 300px;
        padding: 10px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid red;
        transition: all 0.3s ease-out;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
        z-index: 2;
    }

    .customIcon{
        color: #ac1df8;
        font-weight: bold;
        font-size: xx-large;
        cursor: pointer;
        width: 20px;
        height: 20px;
        margin: 10px;
    }

    .customContainer{
        width: 100%;
        height: min-content;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1;
    }

    .isim{
        color: white;
        font-weight: bold;
        font-size: xx-large;
        letter-spacing: 0;
        margin-bottom: 5px;
    }

    .bio{
        color: white;
        letter-spacing: 0;
    }

    .followerCont{
        margin-top: 50px;
        width: 100%;
        height: min-content;
        padding: 5px 15px;
        display: flex;
        justify-content: start;
        align-items: center;
        flex-wrap: wrap;
        color: white;
        font-weight: bold;
    }

    .BottomCont{
        width: 100%;
        height: min-content;
        padding: 5px;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        justify-content: start;
    }

    .detailsCont{
        padding: 25px;

    }

    .imgCont{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .profileImgCont{
        width: 120px;
        height: 120px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        border: 7px solid white;
    }

    .mgTop{
        transform: translateY(50px);
    }



    .badge{
        background-color: #AD49E1;
        color: #aaa;
        font-weight: bold;
        width: min-content;
        height: 25px;
        border-radius: 10px;
        border: 1px solid #aaa; 
        margin: 3px 5px;
    }

    .profileImg{
        object-fit: cover;
        width: 100%;
    }

    .customIconError{
        font-weight: bold;
        font-size: x-large;
        color: red;
    }

    .errorCaption{
        color: white;
        font-weight: bold;
    }

    .loadingContainer{
        margin-top: 20px;
        width: 30px;
        height: 30px;
        color: white;
        background-color: transparent;
        position: relative;
        animation-name: loadingIndicator;
        animation-duration: 1s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
        z-index: 2;
    }

    .top, .right, .bottom, .left{
        background-color: white;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        position: absolute;
    }

    .top{
        top: 20px;
        left: 20px;
    }

    .right{
        right: 0;
    }

    .bottom{
        bottom: 0;
    }

    .left{
        left: 0;
    }

    @keyframes loadingIndicator{
        0%{
            transform: rotate(0deg);
        }
        100%{
            transform: rotate(360deg);
        }
    }

    @keyframes asagi {
        0%{
            transform: translateY(0px);
        }
        100%{
            transform: translateY(50px);
        }
    }

    @media only screen and (max-width: 990px) {
        .incomingData{
            grid-template-columns: 100%;
        }
    }
    </style>
    