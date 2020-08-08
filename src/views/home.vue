<template>
  <div>
    <!-- nav top -->
    <div id="nav" v-bind:class="{ fixed: isFixed }">
      <p class="date" @click="showPopup2()">
        <span class="day">15</span> <span class="month">Jun.2020</span>
      </p>
      <p class="city">上海 大雨 25℃</p>
    </div>
    <transition name="slide-fade">
      <div class="showBox" v-show="show2">
        <Month :text="month[0]" class="month"></Month>
        <div class="daybox">
          <Daycard :daycard="dayData[0]" class="daycard"></Daycard>
          <Daycard :daycard="dayData[1]" class="daycard"></Daycard>
          <Daycard :daycard="dayData[2]" class="daycard"></Daycard>
          <Daycard :daycard="dayData[3]" class="daycard"></Daycard>
          <Daycard :daycard="dayData[4]" class="daycard"></Daycard>
        </div>
        <Month :text="month[1]" class="month"></Month>
        <div class="daybox">
          <Daycard :daycard="dayData[5]" class="daycard"></Daycard>
          <Daycard :daycard="dayData[6]" class="daycard"></Daycard>
          <Daycard :daycard="dayData[7]" class="daycard"></Daycard>
          <Daycard :daycard="dayData[8]" class="daycard"></Daycard>
          <Daycard :daycard="dayData[9]" class="daycard"></Daycard>
        </div>
        <Month :text="month[2]" class="month"></Month>
        <div class="daybox">
          <Daycard :daycard="dayData[10]" class="daycard"></Daycard>
          <Daycard :daycard="dayData[11]" class="daycard"></Daycard>
          <Daycard :daycard="dayData[12]" class="daycard"></Daycard>
          <Daycard :daycard="dayData[13]" class="daycard"></Daycard>
          <Daycard :daycard="dayData[14]" class="daycard"></Daycard>
        </div>
        <Month :text="month[3]" class="month"></Month>
        <div class="daybox">
          <Daycard :daycard="dayData[15]" class="daycard"></Daycard>
          <Daycard :daycard="dayData[16]" class="daycard"></Daycard>
          <Daycard :daycard="dayData[17]" class="daycard"></Daycard>
          <Daycard :daycard="dayData[18]" class="daycard"></Daycard>
          <Daycard :daycard="dayData[19]" class="daycard"></Daycard>
        </div>
        <Month :text="month[4]" class="month"></Month>
        <div class="daybox">
          <Daycard :daycard="dayData[20]" class="daycard"></Daycard>
          <Daycard :daycard="dayData[21]" class="daycard"></Daycard>
          <Daycard :daycard="dayData[22]" class="daycard"></Daycard>
          <Daycard :daycard="dayData[23]" class="daycard"></Daycard>
          <Daycard :daycard="dayData[24]" class="daycard"></Daycard>
        </div>
        <Month :text="month[5]" class="month"></Month>
        <div class="daybox">
          <Daycard :daycard="dayData[25]" class="daycard"></Daycard>
          <Daycard :daycard="dayData[26]" class="daycard"></Daycard>
          <Daycard :daycard="dayData[27]" class="daycard"></Daycard>
          <Daycard :daycard="dayData[28]" class="daycard"></Daycard>
          <Daycard :daycard="dayData[29]" class="daycard"></Daycard>
        </div>
      </div>
    </transition>
    <!-- card1 -->
    <div id="card1">
      <div class="box">
        <img class="img" src="../assets/05.jpg" alt="img" />
        <p class="text1 center">摄影|张拉灯</p>
        <p class="text2">过去的其实并没有真正的过去，过去就过在今天。</p>
        <p class="text1 center" style="padding-bottom: 20px;">
          威廉 福克纳《修女安魂曲》
        </p>
      </div>
      <div class="bottomBar text1">
        <van-icon name="edit" size="12px" />
        <span class="text1">小记</span>
        <span class="right">
          <van-icon class="icon" name="edit" />
          <van-icon class="icon" name="label-o" />
          <van-icon class="icon" name="like-o" :color="color" @click="like()" />
          <span>{{ star }}</span>
          <van-icon class="icon" name="more-o" @click="showPopup()" />
          <van-popup
            v-model="show"
            position="bottom"
            :style="{ height: '30%' }"
            style=" text-align: center;font-size:20px"
          >
            <div class="middle">
              <p class="share">
                <van-icon v-bind:name="imgSrc[0]" />
              </p>
              <p class="share">
                <van-icon v-bind:name="imgSrc[1]" />
              </p>
              <p class="share">
                <van-icon v-bind:name="imgSrc[2]" />
              </p>
              <p class="share">
                <van-icon v-bind:name="imgSrc[3]" />
              </p>
            </div>
          </van-popup>
        </span>
      </div>
    </div>

    <Card v-bind:card="card[0]"></Card>
    <Card v-bind:card="card[1]"></Card>
    <Card v-bind:card="card[2]"></Card>
    <Music v-bind:card="card[3]" style="margin-bottom:50px"></Music>
  </div>
</template>

<script>
import Card from "../components/card.vue";
import Month from "../components/month.vue";
import Music from "../components/music.vue";
import Daycard from "../components/daycard.vue";
export default {
  data() {
    return {
      isFixed: false,
      active: 0,
      star: 8962,
      color: "",
      show: false,
      show2: false,
      month: ["06月", "05月", "04月", "03月", "02月", "01月"],
      imgSrc: [
        require("../assets/icon01.png"),
        require("../assets/icon02.png"),
        require("../assets/icon03.png"),
        require("../assets/icon04.png"),
      ],
      dayData: [
        {
          imgSrc: require("../assets/img01.jpg"),
          day: "2020/06/18",
        },
        {
          imgSrc: require("../assets/img02.jpg"),
          day: "2020/06/17",
        },
        {
          imgSrc: require("../assets/img03.jpg"),
          day: "2020/06/16",
        },
        {
          imgSrc: require("../assets/img04.jpg"),
          day: "2020/06/15",
        },
        {
          imgSrc: require("../assets/img05.jpg"),
          day: "2020/06/14",
        },
        {
          imgSrc: require("../assets/img06.jpg"),
          day: "2020/05/18",
        },
        {
          imgSrc: require("../assets/img07.jpg"),
          day: "2020/05/17",
        },
        {
          imgSrc: require("../assets/img08.jpg"),
          day: "2020/05/16",
        },
        {
          imgSrc: require("../assets/img09.jpg"),
          day: "2020/05/15",
        },
        {
          imgSrc: require("../assets/img10.jpg"),
          day: "2020/05/14",
        },
        {
          imgSrc: require("../assets/img11.jpg"),
          day: "2020/04/18",
        },
        {
          imgSrc: require("../assets/img12.jpg"),
          day: "2020/04/17",
        },
        {
          imgSrc: require("../assets/img15.jpg"),
          day: "2020/04/16",
        },
        {
          imgSrc: require("../assets/img13.jpg"),
          day: "2020/04/15",
        },
        {
          imgSrc: require("../assets/img14.jpg"),
          day: "2020/04/14",
        },
        {
          imgSrc: require("../assets/img16.jpg"),
          day: "2020/03/18",
        },
        {
          imgSrc: require("../assets/img17.jpg"),
          day: "2020/03/17",
        },
        {
          imgSrc: require("../assets/img18.jpg"),
          day: "2020/03/16",
        },
        {
          imgSrc: require("../assets/img19.jpg"),
          day: "2020/03/15",
        },
        {
          imgSrc: require("../assets/img20.jpg"),
          day: "2020/03/14",
        },
        {
          imgSrc: require("../assets/img21.jpg"),
          day: "2020/02/18",
        },
        {
          imgSrc: require("../assets/img22.jpg"),
          day: "2020/02/17",
        },
        {
          imgSrc: require("../assets/img23.jpg"),
          day: "2020/02/16",
        },
        {
          imgSrc: require("../assets/img24.jpg"),
          day: "2020/02/15",
        },
        {
          imgSrc: require("../assets/img25.jpg"),
          day: "2020/02/14",
        },
        {
          imgSrc: require("../assets/img26.jpg"),
          day: "2020/01/18",
        },
        {
          imgSrc: require("../assets/img28.jpg"),
          day: "2020/01/17",
        },
        {
          imgSrc: require("../assets/img27.jpg"),
          day: "2020/01/16",
        },
        {
          imgSrc: require("../assets/img29.jpg"),
          day: "2020/01/15",
        },
        {
          imgSrc: require("../assets/img30.jpg"),
          day: "2020/0/14",
        },
      ],
      card: [
        {
          type: "-阅读-",
          title: "你余生的故事",
          author: "文/zh阿巴",
          text: "太爱一个人有什么错",
          imgSrc: require("../assets/01.jpg"),
          date: "6月15日",
          num: 1601,
          color: "",
        },
        {
          type: "-连载-",
          title: "最后的审判(二)第二十六章：黑底白事",
          author: "文/红佛夜奔不复还",
          text: "人只有一种命，现在就是我的命，我必须喜欢它",
          imgSrc: require("../assets/02.jpg"),
          date: "6月15日",
          num: 682,
          color: "",
        },
        {
          type: "-问答-",
          title: "“废人”是怎么样的状态",
          author: "阿吧苦答",
          text: "阿吧阿吧阿吧阿吧阿吧阿吧",
          imgSrc: require("../assets/03.jpg"),
          date: "6月15日",
          num: 2230,
          color: "",
        },
        {
          type: "-音乐-",
          title: "如果没来这个城市，如果没有遇见你",
          author: "文/zh阿吧",
          text: "阿吧阿吧阿吧阿吧阿吧阿吧",
          imgSrc: require("../assets/04.jpg"),
          date: "6月15日",
          num: 1460,
          color: "",
        },
      ],
    };
  },
  components: {
    Card,
    Month,
    Music,
    Daycard,
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop > 70) {
        this.isFixed = true;
      } else {
        this.isFixed = false;
      }
    },
    like() {
      if (this.color == "") {
        this.color = "#DC143C";
        this.star++;
      } else {
        this.color = "";
        this.star--;
      }
    },
    showPopup() {
      this.show = true;
    },
    showPopup2() {
      // documentElement.scrollTop = 70;
      this.show2 = !this.show2;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h4 {
  margin: 15px 0;
}
#nav {
  overflow: hidden;
  height: 70px;
  line-height: 70px;
  font-size: 12px;
  padding: 0 10px;
  background-color: white;
  width: 100%;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  z-index: 999;
  opacity: 0.8;
}

.fixed {
  position: fixed;
  top: 0;
  z-index: 999;
  opacity: 0.8;
}
#nav .date {
  color: black;
  float: left;
  height: 70px;
}

#nav .date .day {
  font-size: 25px;
}

#nav .city {
  color: gray;
  float: right;
}
#card1 {
  background-color: #ffffff;
  padding: 10px;
  padding-top: 70px;
}
#card1 .box {
  border-radius: 10px;
  box-shadow: 1px 1px 5px #dadada;
}
/* base css */
.text1 {
  color: gray;
  font-size: 12px;
}
.text2 {
  color: black;
  font-size: 14px;
  padding: 10px 0 40px 30px;
}
.center {
  text-align: center;
}
.img {
  width: 100%;
  border-radius: 10px;
}
.right {
  float: right;
}
.icon {
  margin-left: 40px;
}
.middle {
  position: relative;
  top: 50%; /*偏移*/
  transform: translateY(-50%);
}
.share {
  margin: 0;
  padding: 10px;
}
.showBox {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  margin-top: 50px;
  background-color: #fff;
  z-index: 2;

  /* padding: 0 10px 0 10px; */
}
.month {
  font-size: 12px;
  margin-top: 30px;
}
.daybox {
  margin: 10px 10px -20px 10px;
  overflow: hidden;
}
.daycard {
  float: left;
  width: 46%;
  margin: 0 2%;
  box-sizing: border-box;
  margin-bottom: 10px;
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
