<template>
  <div class="read">
    <img v-bind:src="read.imgSrc" alt="" />
    <div>
      <p class="p1">{{ read.title }}</p>
      <p class="p2">{{ read.author }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    read: Object,
  },
};
</script>
<style scoped>
.read {
  margin: 10px;
  overflow: hidden;
}
.read img {
  width: 20%;
  border-radius: 10px;
  float: left;
}
.read div {
  float: left;
  padding-left: 10px;
}
.read div .p1 {
  font-size: 13px;
  color: black;
  margin: 0;
  padding: 5px;
}
.read div .p2 {
  font-size: 12px;
  color: gray;
  margin: 7px 0 0 0;
  padding: 5px;
}
</style>
