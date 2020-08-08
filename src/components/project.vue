<template>
  <div class="card">
    <div>
      <img v-bind:src="project.imgSrc" alt="" />
      <p class="p1">{{ project.text }}</p>
    </div>
    <p class="p2">{{ project.title }}</p>
  </div>
</template>
<script>
export default {
  props: {
    project: Object,
  },
};
</script>
<style scoped>
.card {
  margin: 30px 10px 0 10px;
  border-radius: 10px;
  background-color: #fff;
  overflow: hidden;
  box-shadow: 1px 1px 2px #dadada;
}
.card img {
  width: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.card .p1 {
  font-size: 12px;
  color: #fff;
  margin: -30px 0 0 5px;
  padding: 0;
}
.card .p2 {
  margin: 5px;
  font-size: 14px;
  font-weight: bold;
  padding-left: 10px;
  padding-top: 10px;
}
</style>
