<template>
  <div>
    <router-view />
    <van-tabbar route active-color="#000" inactive-color="gray">
      <van-tabbar-item replace to="/home" icon="home-o">
        首页
      </van-tabbar-item>
      <van-tabbar-item replace to="/find" icon="apps-o">
        发现
      </van-tabbar-item>
      <van-tabbar-item replace to="/serial" icon="orders-o">
        连载
      </van-tabbar-item>
      <van-tabbar-item replace to="/my" icon="friends-o">
        我的
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {};
</script>
<style>
*,
p {
  font-family: "Arial", "Microsoft YaHei", "黑体", "宋体", sans-serif;
}
body {
  margin: 0;
  padding: 0;
  background-color: #dadada;
}
#find .van-tab--active {
  font-size: 20px;
}
#find .van-tabs__line {
  background-color: #fff;
}
#serial .van-tab {
  border-radius: 10px;
  background-color: #dadada;
  color: black;
  margin: 10px 10px;
}
#serial .van-tab--active {
  background-color: #000;
  color: #fff;
}
#serial .van-tabs__line {
  background-color: transparent;
}
</style>
