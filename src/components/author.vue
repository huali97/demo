<template>
  <div class="author">
    <img v-bind:src="author.imgSrc" alt="" />
    <div class="box">
      <p class="p1">{{ author.name }}</p>
      <p class="p2">{{ author.text }}</p>
    </div>
    <p v-bind:class="{ active: isActive, p3: has }" @click="on()">
      {{ author.type }}
    </p>
  </div>
</template>
<script>
export default {
  props: {
    author: Object,
  },
  data() {
    return {
      isActive: false,
      has: true,
    };
  },
  methods: {
    on() {
      if (this.author.type == "关注") {
        this.author.type = "已关注";
        this.isActive = true;
        this.has = false;
      } else {
        this.author.type = "关注";
        this.isActive = false;
        this.has = true;
      }
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.author {
  padding: 0 10px;
  overflow: hidden;
  position: relative;
  margin-bottom: 20px;
}
.author img {
  width: 20%;
  border-radius: 50%;
  float: left;
}
.author .box {
  float: left;
  padding-left: 10px;
}
.author .box .p1 {
  font-size: 14px;
  color: black;
  padding: 10px 0;
}
.author .box .p2 {
  font-size: 12px;
  color: gray;
}
.author .p3 {
  font-size: 12px;
  position: absolute;
  float: right;
  color: black;
  top: 50%;
  right: 5%;
  padding: 1px 10px;
  transform: translateY(-50%);
  border: 1px solid black;
  border-radius: 10px;
}
.author .active {
  font-size: 12px;
  position: absolute;
  float: right;
  color: gray;
  top: 50%;
  right: 5%;
  padding: 1px 10px;
  transform: translateY(-50%);
  border: 1px solid gray;
  border-radius: 10px;
}
</style>
