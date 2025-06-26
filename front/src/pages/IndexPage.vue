<template>
  <q-page class="q-mt-sm">
     <div class="row q-pa-sm full-width">
      <q-avatar class="q-mr-sm">
        <img src="https://cdn.quasar.dev/img/avatar.png" alt="">
      </q-avatar>
      <q-input
        rounded
        outlined
        v-model="text"
        @click="openDialog"
        label="No que você esta pensando?"
        label-color="black"

      />


     </div>
     <div class="line q-mt-md" />
     <div class="row justify-around full-width q-pa-sm">
        <div>
          <q-icon color="red" name="fas fa-video" size="18px" class="q-mr-sm q-icon-color">

          </q-icon>
          <label>Ao vivo</label>
        </div>
        <div class="vertical-line"></div>
         <div>
          <q-icon color="light-green-7" name="far fa-images" size="18px" class="q-mr-sm q-icon-color">

          </q-icon>
          <label>Foto</label>
        </div>
        <div class="vertical-line"></div>
         <div>
          <q-icon color="purple" name="meeting_room" size="18px" class="q-mr-sm q-icon-color">

          </q-icon>
          <label>Salas</label>
        </div>
     </div>
     <div class="line-strong q-mt-md"></div>
     <q-scroll-area horizontal class="container-new-room full-width">
      <div class="row items-center justify-start q-px-md q-py-sm no-wrap full-width container-rooms">
        <div class="rounded-button row text-center q-mr-md">
          <div class="row items-center justify-center">
            <q-icon color="purple" name="fas fa-video" size="28px" class="q-mr-sm q-icon-colors">

            </q-icon>

          </div>
                  <div class="text-left">
          <label for="">Criar Sala</label>
        </div>

        </div>
        <q-avatar class="q-mr-sm" v-for="index in 8" :key="index">
           <img src="https://cdn.quasar.dev/img/avatar.png" alt="">
           <q-badge color="green"></q-badge>
        </q-avatar>
      </div>
     </q-scroll-area>
     <div class="line-strong"></div>
     <div class="full-width q-mt-md">
      <q-scroll-area horizontal style="height: 220px;">
        <div
          class="row items-center justify-between q-px-md qpy-sm no-wrap full-width container-story"
        >
          <q-img
            v-for="index in 10"
            :key="index"
            src="https://picsum.photos/seed/picsum/200/300"
            width="100px"
            height="200px"
            class="q-mx-sm status-item">
            <q-img src="https://cdn.quasar.dev/img/avatar.png"></q-img>
          </q-img>
        </div>
      </q-scroll-area>
     </div>
     <div class="line-strong q-mt-md"></div>
     <Post v-for="item in posts" :key="item" :post="item"/>
    <q-dialog
      v-model="dialog"
      full-height
      full-width
      maximized
      position="bottom"
    >
      <q-card>
        <div class="q-ma-md q-pa-sm row items-center justify-between full-width ">
            <div>
              <q-icon name="arrow_back" size="23px" class="q-mr-sm" @click="dialog = false"></q-icon>
               <span> Criar publicação</span>
            </div>
                      <span
                      class="q-mr-sm"
                      @click="sendPost"
                      :class=" image !== '' ? 'text-blue' : 'text-grey' "
                      >
                        PUBLICAR
                      </span>
            <div class="line q-mt-md"></div>
         </div>
        <div class="row q-ma-md" >
            <q-avatar class="q-mr-sm" >
              <img src="https://cdn.quasar.dev/img/avatar.png" alt="">
            </q-avatar>
            <div class="column">
              <strong>Sidemar Schimmelpfennig</strong>
              <div class="row">
                <div class="custom-button row items-center  justify-around q-mr-sm">
                  <q-icon name="fas fa-globe-asia" size="12px"></q-icon>
                  <strong>Público</strong>
                  <q-icon name="arrow_drop_down" size="25px"></q-icon>
                </div>
                <div class="custom-button row items-center  justify-around q-mr-sm">
                  <q-icon name="add" size="12px"></q-icon>
                  <strong>Album</strong>
                  <q-icon name="arrow_drop_down" size="25px"></q-icon>
                </div>
              </div>

            </div>
        </div>
        <q-input v-model="text"
        filled
        class="custom-text-area full-width"
        label-color="grey-5"
        rows="20"
        :placeholder="image === '' ? 'No que você está pensando': 'Diga algo sobre essa foto'"
        :type="image === '' ? 'textarea' : 'text' "
        bg-color="white" >

        </q-input>
        <q-img v-if="image !== ''" :src="image" :ratio="1">

        </q-img>
        <q-card-section class="row items-center no-wrap">
            <span>Adicionar a sua pulicação</span>
            <q-space></q-space>
            <div class="row justify-between items-center" style="width: 30%;">
                <q-icon name="video_call" size="28px" color="purple" @click="openUpload()"></q-icon>
                <q-icon name="far fa-images" size="20px" color="light-green-7" ></q-icon>
                <q-icon name="person" size="20px" color="blue" ></q-icon>
                <q-icon name="insert_emoticon" size="20px" color="orange-6"></q-icon>
            </div>
        </q-card-section>
      </q-card>
    </q-dialog>
    <q-file v-model="file" id="fileUpload" v-show="false">

    </q-file>
  </q-page>
</template>

<script>
  import Post from "../components/Post.vue";
  export default{
    name:"PageIndex",
    data(){
      return {
        text:"",
        posts:[],
        dialog:  false,
        image:"",
        file:[]
      }
    },
    components:{
      Post
    },
    methods: {
      triggerNegative(){
        this.$q.notify({
          type:"negative",
          position:"top",
          message:`Você precisa enviar uma imagem`
        })
      },
      async sendPost () {
          if(this.image === ""){
             this.triggerNegative()
             return
          }
          const body = {
            text: this.text,
            picture: this.image
          }

          await this.$api.post('post', body, {}).then((result) => {
            this.dialog = false
            this.text = ""
            this.image = ""
            this.posts=[result.data, ...this.posts ]
          }).catch((err) => {
            console.log(err)
          });
      },
      openUpload(){
        document.querySelector(".q-field__input").click()
      },
      openDialog(){
        this.dialog = true
      }
    },
    watch:{
      async file(){
        var formData = new FormData()
        formData.append("image", this.file)
        await this.$api.post("upload", formData,{
          headers:{
            "Content-Type": "multipart/form-data"
          }
        }).then((result) => {
          console.log(result)
          const response  = result.data
          this.image = `http://localhost:3000/${response.image}`
        }).catch((err) => {
          console.log(err)
        });
      }
    },
     async beforeMount() {
        await this.$api.get('post',{}).then((result) => {
            console.log(result)
            this.posts = result.data
        }).catch((err) => {
            console.error("Erro ao buscar posts:", err);
        });
    },
  }
//
</script>
<style lang="scss" scoped>
    .q-field{
      width: 82%;
    }
    .q-field__control {
      height: 45px;
    }
    .container-new-room{
      height: 70px;
    }
    .container-rooms{
      background-color: #fff;
    }
    .rounded-button{
      border: 1px solid #cbced3;
      width: 110px;
      border-radius: 27px;
      padding: 4px 10px;

      div:first-child{
        width: 50%;
      }

      div{
        width: 50%;
        label{
          color: #1678f3;
        }
      }

    }
    .q-badge{
      padding: 6px;
      border-radius: 50%;
      position: absolute;
      bottom: 0px;
      right: 0px;
    }
    .container-story{
      .q-img{
        border-radius: 10px;
      }
    }
    .status-item{
      .q-img{
        border: 3px solid #1678f3;
        border-radius: 50%;
        width: 50%;
      }
    }
    .custom-button{
      width: 90px;
      height: 30px;
      padding: 2px;
      font-size: 12px;
      border: 1px solid #e5e5e5 ;
      border-radius: 7px;

      cursor: pointer;
         .q-icon, strong{
      color: #969393;
    }
    }



</style>
