<template>
  <div>
    <img src="../assets/img22.jpg" alt="" srcset="" />
    <p class="p1">欢迎来到one</p>
    <p class="p2">在线阅读 永久免费</p>
    <button class="qq">QQ登录</button>
    <button class="wechat">微信登录</button>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
  </div>
</template>
<script>
export default {
  data(){
    return {
      imgSrc:[
        require('../assets/icon03.png'),
        require('../assets/icon01.png')
      ]
    }
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  background-color: #fff;
}
button {
  margin: 0px;
  padding: 0px;
  border: 0px;
  outline: none;
}
img {
  width: 100%;
  box-sizing: border-box;
  border-radius: 15px;
  padding: 10px;
}
.p1 {
  text-align: center;
  font-size: 36px;
  font-weight: 550;
  margin: 30px;
}
.p2 {
  font-size: 16px;
  text-align: center;
  margin-bottom: 30px;
}
.qq , .wechat{
  display: block;
  margin: 0 auto;
  padding: 10px;
  border-radius: 10px;
}
.qq{
  background-color:forestgreen;
  width: 150px;
  color: #fff;
  font-weight: bold;
  margin-bottom: 20px;
  margin-top: 20px;
}
.wechat{
  width: 150px;
  background-color: salmon;
  color: #fff;
  font-weight: bold;
}
</style>
