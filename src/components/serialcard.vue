<template>
  <div id="serialcard">
    <div class="imgbox">
      <img v-bind:src="serialcard.imgSrc" alt="" srcset="" />
      <p class="p1">{{ serialcard.state }}</p>
      <p class="p2">{{ serialcard.title }}</p>
    </div>
    <p class="p3">{{ serialcard.tetx }}</p>
    <p class="p4">{{ serialcard.author }}</p>
  </div>
</template>

<script>
export default {
  props: {
    serialcard: Object,
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
#serialcard {
  border-radius: 10px;
  margin: 10px 10px 20px 10px;
  box-shadow: 1px 1px 2px #dadada;
}
#serialcard .imgbox {
  position: relative;
}
#serialcard .imgbox img {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  width: 100%;
}
#serialcard .imgbox .p1 {
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 12px;
  color: white;
}
#serialcard .imgbox .p2 {
  position: absolute;
  left: 10px;
  bottom: 20px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
}
#serialcard .p3{
  color:black;
  font-size: 13px;
  padding: 3px 5px;
}
#serialcard .p4{
  color:gray;
  font-size: 12px;
  padding:5px 5px 5px 5px;
}
</style>
