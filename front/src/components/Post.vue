<template>
  <div class="row justify-between">
    <div class="row items-center justify-center q-ml-sm q-pa-sm">
      <q-avatar class="q-mr-sm">
        <img :src="post.avatar" alt=""/>
      </q-avatar>
      <div>
        <strong>{{ post.name }}</strong>
        <div class="row items-center justify-center">
          <span>{{ post.time }}</span>
          <q-icon name="fas fa-circle" class="q-mx-sm" size="5px"></q-icon>
          <q-icon name="fas fa-globe-asia"size="18px"></q-icon>

        </div>
      </div>

    </div>
    <div class="row justify-between items-start q-mr-md q-mt-sm  q-pa-sm">
      <q-icon name="fas fa-star" color="blue" size="15px" class="q-ml-sm"/>
      <q-icon name="fas fa-ellipsis-h" size="18px" class="q-ml-sm"></q-icon>
    </div>
    <p class="col-12 q-mt-lg q-mx-sm" v-html="post.text"></p>
    <q-img :src="post.url" :ratio="1"></q-img>
    <div class="row full-width items-center justify-between q-my-sm">
      <div class="row items-center">
        <q-icon
        name="fas fa-thumbs-up"
        size="13px"
        color="white"
        class="q-mx-sm thumbsup-icon"
        />
        <span>
          {{ post.likes }}
        </span>
      </div>
      <div class="row items-center q-mr-md">
        <span>{{ post.comments }} comentários</span>
        <q-icon class="q-mx-sm" name="fas fa-circle" size="5px"/>
        <span>{{ post.shared }} compartilhamentos</span>
      </div>
      <div class="line q-my-sm q-mx-md"></div>
      <div class="row items-center full-width justify-around">
        <div class="row items-center">
          <q-icon class="q-mx-sm" name="far fa-thumbs-up"  size="22px"  />
          <span>Curtir</span>
        </div>
        <div class="row items-center">
          <q-icon class="q-mx-sm" name="mode_comment"  size="22px"  />
          <span>Comentar</span>
        </div>
        <div class="row items-center">
          <q-icon class="q-mx-sm" name="fas fa-share"  size="22px"  />
          <span>Compartilhar</span>
        </div>
      </div>
      <div class="line-strong q-my-md" ></div>
    </div>
  </div>
</template>

<script>
  export default{
    name:'Post',
    data() {
      return {

    }
    },
    props:{
      post: Object
    }
  }
</script>
<style>
  .q-icon{
      color:#656668;
  }
  .thumbsup-icon{
    width: 25px;
    height: 25px;
    background-color:#1678f3;
    border-radius: 50%;
  }
</style>
