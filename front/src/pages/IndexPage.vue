<template>
  <q-page class="q-mt-sm">
     <div class="row q-pa-sm full-width">
      <q-avatar class="q-mr-sm">
        <img src="https://cdn.quasar.dev/img/avatar.png" alt="">
      </q-avatar>
      <q-input rounded outlined v-model="text" label="No que você esta pensando?"
      label-color="black"

      >

      </q-input>
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
  </q-page>
</template>

<script>
  import Post from "../components/Post.vue";
  export default{
    name:"PageIndex",
    data() {
      return {
        text:"",
        posts:[]
      }
    },
    components:{
      Post
    },
    beforeMount() {
      this.posts= [
      {
        id: 1,
        avatar: "https://cdn.quasar.dev/img/avatar.png",
        name: "João Pedro",
        time: "Ontem às 21:59",
        title: "Irmãos <b>#familia</b>",
        text: "Hoje o dia amanheceu assim churrasco, família e emoção.",
        url: "https://picsum.photos/300/",
        likes: 100,
        comments: 6,
        shared: 4,
      },
      {
        id: 2,
        avatar: "https://cdn.quasar.dev/img/avatar.png",
        name: "Maria Clara",
        time: "Hoje às 08:15",
        title: "Amigos <b>#diversão</b>",
        text: "Café da manhã com os melhores amigos. Gratidão define!",
        url: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=600",
        likes: 87,
        comments: 10,
        shared: 3,
      },
      {
        id: 3,
        avatar: "https://cdn.quasar.dev/img/avatar.png",
        name: "Lucas Silva",
        time: "Ontem às 19:00",
        title: "Natureza <b>#aventura</b>",
        text: "Trilha incrível hoje. Paz, natureza e superação.",
        url: "https://placebear.com/300/300",
        likes: 132,
        comments: 15,
        shared: 7,
      },
      {
        id: 4,
        avatar: "https://cdn.quasar.dev/img/avatar.png",
        name: "Ana Beatriz",
        time: "2 horas atrás",
        title: "Foco <b>#trabalho</b>",
        text: "Segunda-feira produtiva, foco nos projetos e nas metas.",
        url: "https://placebear.com/300/300",
        likes: 76,
        comments: 5,
        shared: 2,
      },
      {
        id: 5,
        avatar: "https://cdn.quasar.dev/img/avatar.png",
        name: "Felipe Augusto",
        time: "Hoje às 14:32",
        title: "Sabores <b>#culinaria</b>",
        text: "Almoço especial preparado com muito amor.",
        url: "https://picsum.photos/99/300",
        likes: 98,
        comments: 8,
        shared: 4,
      },
      {
        id: 6,
        avatar: "https://cdn.quasar.dev/img/avatar.png",
        name: "Larissa Souza",
        time: "Há 30 minutos",
        title: "Paz <b>#relax</b>",
        text: "Final de tarde perfeito pra recarregar as energias.",
        url: "https://placebear.com/300/300",
        likes: 156,
        comments: 12,
        shared: 5,
      },
      {
        id: 7,
        avatar: "https://cdn.quasar.dev/img/avatar.png",
        name: "Gabriel Rocha",
        time: "3 dias atrás",
        title: "Velocidade <b>#carros</b>",
        text: "Encontro de carros antigos, uma paixão que nunca envelhece.",
        url: "https://picsum.photos/720/300",
        likes: 205,
        comments: 25,
        shared: 9,
      },
      {
        id: 8,
        avatar: "https://cdn.quasar.dev/img/avatar.png",
        name: "Isabela Lima",
        time: "Ontem às 17:45",
        title: "Pet <b>#amordepet</b>",
        text: "Dia de banho, carinho e muitos petiscos para o meu doguinho.",
        url: "https://picsum.photos/660/300",
        likes: 182,
        comments: 22,
        shared: 6,
      },
      {
        id: 9,
        avatar: "https://cdn.quasar.dev/img/avatar.png",
        name: "Ricardo Mendes",
        time: "Hoje às 10:00",
        title: "Fitness <b>#saúde</b>",
        text: "Treino concluído, disciplina e foco total.",
        url: "https://picsum.photos/500/300",
        likes: 120,
        comments: 9,
        shared: 3,
      },
      {
        id: 10,
        avatar: "https://cdn.quasar.dev/img/avatar.png",
        name: "Camila Ferreira",
        time: "Há 5 minutos",
        title: "Arte <b>#criatividade</b>",
        text: "Finalizando um novo quadro cheio de cores e vida.",
        url: "https://picsum.photos/600/300",
        likes: 97,
        comments: 7,
        shared: 2,
      },
    ];

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
</style>
