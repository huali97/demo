<template>
  <div class="hot">
    <div class="title">
      <span class="head">{{ hot.title }}</span>
      <span class="all">完整榜单 > </span>
    </div>
    <div class="card">
      <img class="img" v-bind:src="hot.imgSrc" alt="" />
      <div class="list">
        <p><span style="color:red">1.</span>{{ hot.text1 }}</p>
        <p><span style="color:orange">2.</span>{{ hot.text2 }}</p>
        <p><span style="color:yellowgreen">3.</span>{{ hot.text3 }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    hot: Object,
  },
};
</script>

<style scoped>
*{
        margin: 0;
        padding: 0;
}
.hot{
        padding: 0 10px;
        overflow: hidden;
}
.hot .title{
        font-size: 16px;
        color: black;
        margin-top: 10px;
}
.hot .title .head{
        font-weight: 550;
}
.hot .title .all{
       float: right;
       font-size: 12px;
       color: gray;

}
.hot .card{
        width: 100%;
        overflow: hidden;
        margin-top: 10px;
        font-size: 12px;
        color: black;
}
.hot .card img{
        width: 20%;
        float: left;
        border-radius: 5px;
}
.hot .card .list{
        float: left;
        padding-left: 15px;
}
.hot .card .list p{
      padding-bottom: 10px;
}
</style>
