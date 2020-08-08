<template>
  <div class="card">
      <img v-bind:src="daycard.imgSrc" alt="">
      <p>{{ daycard.day }}</p>
  </div>
</template>
<script>
export default {
    props:{
        daycard:Object
    }
}
</script>
<style scoped>
.card{
    border-radius: 5px;
    box-shadow: 1px 1px 2px #dadada;
    height: auto;
}
.card img{
    width: 100%;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
}
.card p{
    margin: 0;
    padding: 5px 0;
    text-align: center;
    font-size: 14px;
    color: gray;
}
</style>
