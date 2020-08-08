<template>
  <div id="serial">
    <van-tabs v-model="active">
      <van-tab title="2020">
        <Serialcard v-bind:serialcard="serialcard[0]"></Serialcard>
        <Serialcard v-bind:serialcard="serialcard[1]"></Serialcard>
        <Serialcard v-bind:serialcard="serialcard[2]"></Serialcard>
        <Serialcard v-bind:serialcard="serialcard[3]"></Serialcard>
        <br />
        <br />
        <br />
      </van-tab>
      <van-tab title="2019">
        <Serialcard v-bind:serialcard="serialcard[3]"></Serialcard>
        <Serialcard v-bind:serialcard="serialcard[2]"></Serialcard>
        <Serialcard v-bind:serialcard="serialcard[1]"></Serialcard>
        <Serialcard v-bind:serialcard="serialcard[0]"></Serialcard>
        <br />
        <br />
        <br />
      </van-tab>
      <van-tab title="2018">
        <Serialcard v-bind:serialcard="serialcard[2]"></Serialcard>
        <Serialcard v-bind:serialcard="serialcard[1]"></Serialcard>
        <Serialcard v-bind:serialcard="serialcard[0]"></Serialcard>
        <Serialcard v-bind:serialcard="serialcard[3]"></Serialcard>
        <br />
        <br />
        <br />
      </van-tab>
      <van-tab title="2017">
        <Serialcard v-bind:serialcard="serialcard[1]"></Serialcard>
        <Serialcard v-bind:serialcard="serialcard[2]"></Serialcard>
        <Serialcard v-bind:serialcard="serialcard[3]"></Serialcard>
        <Serialcard v-bind:serialcard="serialcard[0]"></Serialcard>
        <br />
        <br />
        <br />
      </van-tab>
      <van-tab title="2016">
        <Serialcard v-bind:serialcard="serialcard[3]"></Serialcard>
        <Serialcard v-bind:serialcard="serialcard[0]"></Serialcard>
        <Serialcard v-bind:serialcard="serialcard[1]"></Serialcard>
        <Serialcard v-bind:serialcard="serialcard[2]"></Serialcard>
        <br />
        <br />
        <br />
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import Serialcard from "../components/serialcard";
export default {
  data() {
    return {
      active: 0,
      serialcard: [
        // 2020
        {
          imgSrc: require("../assets/01.jpg"),
          state: "# 连载中",
          title: "维多利亚的派对 第二章： 脑中的水",
          tetx:
            "时代变了，人们置身其中并不觉得，可对她来说，记忆中的世界一下子变得陌生了。",
          author: "文/吴沚默",
        },
        {
          imgSrc: require("../assets/02.jpg"),
          state: "# 连载中",
          title: "打雪仗 第三章： 消失的爱人",
          tetx:
            "她不敢告诉家里人这件事情，每天一大早出门，假装去给儿子看新房，她一遍遍的给我讲这些事情。",
          author: "文/晓睿",
        },
        {
          imgSrc: require("../assets/img06.jpg"),
          state: "# 已完结",
          title: "最后的审判 第二十七章 一败涂地",
          tetx: "世界在下落，落日高不可问。",
          author: "文/啊吧",
        },
        {
          imgSrc: require("../assets/img07.jpg"),
          state: "# 已完结",
          title: "两次破碎 第二十三章： 终场烟花",
          tetx: "火球不停的往天上窜，又散成无数个光点。",
          author: "文/吴沚默",
        },
      ],
    };
  },
  components: {
    Serialcard,
  },
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  background-color: #fff;
}
</style>
