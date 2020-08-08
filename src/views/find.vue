<template>
  <div id="find">
    <van-tabs v-model="active" style="padding-bottom: 60px;">
      <van-tab title="阅读">
        <Month
          class="month"
          v-bind:text="month[0]"
          style="margin-top:10px"
        ></Month>
        <Read v-bind:read="read[0]"></Read>
        <Read v-bind:read="read[1]"></Read>
        <Read v-bind:read="read[2]"></Read>
        <Read v-bind:read="read[3]"></Read>
        <Read v-bind:read="read[4]"></Read>
        <Read v-bind:read="read[5]"></Read>
        <Read v-bind:read="read[6]"></Read>
        <Read v-bind:read="read[7]"></Read>
        <Read v-bind:read="read[8]"></Read>
        <Read v-bind:read="read[9]"></Read>
        <Read v-bind:read="read[10]"></Read>
        <Read v-bind:read="read[11]"></Read>
        <Month class="month" v-bind:text="month[1]"></Month>
        <Read v-bind:read="read[12]"></Read>
        <Read v-bind:read="read[13]"></Read>
        <Read v-bind:read="read[14]"></Read>
        <Read v-bind:read="read[15]"></Read>
        <Read v-bind:read="read[16]"></Read>
        <Read v-bind:read="read[17]"></Read>
        <Read v-bind:read="read[18]"></Read>
        <Read v-bind:read="read[19]"></Read>
        <Read v-bind:read="read[20]"></Read>
      </van-tab>
      <van-tab title="图文">
        <div class="showBox">
          <Month :text="month[0]" class="month" style="margin-top:10px"></Month>
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
      </van-tab>
      <van-tab title="专题">
        <Project v-bind:project="project[0]"></Project>
        <Project v-bind:project="project[1]"></Project>
        <Project v-bind:project="project[2]"></Project>
        <Project v-bind:project="project[3]"></Project>
        <Project v-bind:project="project[4]"></Project>
      </van-tab>
      <van-tab title="热榜">
        <Hot v-bind:hot="hot[0]"></Hot>
        <Hot v-bind:hot="hot[1]"></Hot>
        <Hot v-bind:hot="hot[2]"></Hot>
        <Hot v-bind:hot="hot[3]"></Hot>
        <Hot v-bind:hot="hot[4]"></Hot>
        <Hot v-bind:hot="hot[5]"></Hot>
        <Hot v-bind:hot="hot[0]"></Hot>
        <Hot v-bind:hot="hot[1]"></Hot>
        <Hot v-bind:hot="hot[2]"></Hot>
        <Hot v-bind:hot="hot[3]"></Hot>
        <Hot v-bind:hot="hot[4]"></Hot>
        <Hot v-bind:hot="hot[5]"></Hot>
      </van-tab>
      <van-tab title="问答">
        <Month
          class="month"
          v-bind:text="month[0]"
          style="margin-top:10px"
        ></Month>
        <Read v-bind:read="answer[0]"></Read>
        <Read v-bind:read="answer[1]"></Read>
        <Read v-bind:read="answer[2]"></Read>
        <Read v-bind:read="answer[3]"></Read>
        <Read v-bind:read="answer[4]"></Read>
        <Read v-bind:read="answer[5]"></Read>
        <Read v-bind:read="answer[6]"></Read>
        <Read v-bind:read="answer[7]"></Read>
        <Read v-bind:read="answer[8]"></Read>
        <Read v-bind:read="answer[9]"></Read>
        <Read v-bind:read="answer[10]"></Read>
        <Read v-bind:read="answer[11]"></Read>
        <Month class="month" v-bind:text="month[1]"></Month>
        <Read v-bind:read="answer[12]"></Read>
        <Read v-bind:read="answer[13]"></Read>
        <Read v-bind:read="answer[14]"></Read>
        <Read v-bind:read="answer[15]"></Read>
        <Read v-bind:read="answer[16]"></Read>
        <Read v-bind:read="answer[17]"></Read>
        <Read v-bind:read="answer[18]"></Read>
        <Read v-bind:read="answer[19]"></Read>
        <Read v-bind:read="answer[20]"></Read>
      </van-tab>
      <van-tab title="作者">
        <h4 style="padding:10px;margin:0">热门作者</h4>
        <Author v-bind:author="author[0]"></Author>
        <Author v-bind:author="author[1]"></Author>
        <Author v-bind:author="author[2]"></Author>
        <Author v-bind:author="author[3]"></Author>
        <Author v-bind:author="author[4]"></Author>
        <Author v-bind:author="author[5]"></Author>
        <Author v-bind:author="author[6]"></Author>
        <Author v-bind:author="author[7]"></Author>
        <Author v-bind:author="author[8]"></Author>
        <Author v-bind:author="author[9]"></Author>
        <Author v-bind:author="author[10]"></Author>
        <Author v-bind:author="author[11]"></Author>
        <Author v-bind:author="author[12]"></Author>
        <Author v-bind:author="author[13]"></Author>
        <Author v-bind:author="author[14]"></Author>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import Month from "../components/month";
import Read from "../components/read";
import Project from "../components/project";
import Daycard from "../components/daycard";
import Hot from "../components/hot";
import Author from "../components/author";
export default {
  data() {
    return {
      active: 2,
      month: ["06月", "05月", "04月", "03 月", "02月", "01月"],
      read: [
        {
          imgSrc: require("../assets/read01.jpg"),
          title: "你余生的故事",
          author: "文/苏更生",
        },
        {
          imgSrc: require("../assets/read02.jpg"),
          title: "人生别放弃",
          author: "文/张拉灯",
        },
        {
          imgSrc: require("../assets/read03.jpg"),
          title: "拿相机的人",
          author: "文/王李西子",
        },
        {
          imgSrc: require("../assets/read04.jpg"),
          title: "传单",
          author: "文/月月",
        },
        {
          imgSrc: require("../assets/read05.jpg"),
          title: "夏天的风",
          author: "文/苏更生",
        },
        {
          imgSrc: require("../assets/read06.jpg"),
          title: "初恋",
          author: "文/文长长",
        },
        {
          imgSrc: require("../assets/read07.jpg"),
          title: "新村往事",
          author: "文/刘文",
        },
        {
          imgSrc: require("../assets/read08.jpg"),
          title: "黄金岁月",
          author: "文/春帆",
        },
        {
          imgSrc: require("../assets/read09.jpg"),
          title: "不要害怕快乐",
          author: "文/苏更生",
        },
        {
          imgSrc: require("../assets/read10.jpg"),
          title: "假如生命只剩三天",
          author: "文/陈雪",
        },
        {
          imgSrc: require("../assets/read11.jpg"),
          title: "移动的山",
          author: "文/春帆",
        },
        {
          imgSrc: require("../assets/read12.jpg"),
          title: "后浪的一天",
          author: "文/夏天",
        },
        {
          imgSrc: require("../assets/read13.jpg"),
          title: "今天夏天没有来",
          author: "文/王蒙",
        },
        {
          imgSrc: require("../assets/read14.jpg"),
          title: "遇见",
          author: "文/夏阳",
        },
        {
          imgSrc: require("../assets/read15.jpg"),
          title: "一定会有好事情发生",
          author: "文/苏更生",
        },
        {
          imgSrc: require("../assets/read16.jpg"),
          title: "美丽的豹子",
          author: "文/陈帆",
        },
        {
          imgSrc: require("../assets/read17.jpg"),
          title: "越长大越寂寞",
          author: "文/c晨曦",
        },
        {
          imgSrc: require("../assets/read18.jpg"),
          title: "你不懂",
          author: "文/赫尔啊",
        },
        {
          imgSrc: require("../assets/read19.jpg"),
          title: "没有神的庙宇",
          author: "文/阿斯",
        },
        {
          imgSrc: require("../assets/read20.jpg"),
          title: "张胖胖的猫",
          author: "文/芥末",
        },
        {
          imgSrc: require("../assets/read21.jpg"),
          title: "为你点一盏灯",
          author: "文/陈雪",
        },
      ],
      answer: [
        {
          imgSrc: require("../assets/a01.jpg"),
          title: "人生需要知道哪些智慧？",
          author: "要懂得控制自己的梦想。",
        },
        {
          imgSrc: require("../assets/a02.jpg"),
          title: "你和同桌有哪些回忆？",
          author: "上课互拔腿毛。",
        },
        {
          imgSrc: require("../assets/a03.jpg"),
          title: "有哪些好 的解压方式？",
          author: "感到压力才是生活常态。",
        },
        {
          imgSrc: require("../assets/a04.jpg"),
          title: "你写过最非主流的话是什么？",
          author: "别爱我，没结果。",
        },
        {
          imgSrc: require("../assets/a05.jpg"),
          title: "废人是一种什么状态？",
          author: "无所事事。",
        },
        {
          imgSrc: require("../assets/a06.jpg"),
          title: "如何投资自己？",
          author: "五年 足以改变一个人。",
        },
        {
          imgSrc: require("../assets/a07.jpg"),
          title: "你童年有什么回忆？",
          author: "没有。",
        },
        {
          imgSrc: require("../assets/a08.jpg"),
          title: "如何成为朋友圈文案大师？",
          author: "不发朋友圈。",
        },
        {
          imgSrc: require("../assets/a20.jpg"),
          title: "你快乐吗？",
          author: "我不快乐。",
        },
        {
          imgSrc: require("../assets/a10.jpg"),
          title: "假如生命只剩三天？",
          author: "还有几个三天。",
        },
        {
          imgSrc: require("../assets/a11.jpg"),
          title: "你见过会移动的山吗？",
          author: "没有。",
        },
        {
          imgSrc: require("../assets/a12.jpg"),
          title: "你喜欢谁?",
          author: "不告诉你。",
        },
        {
          imgSrc: require("../assets/a13.jpg"),
          title: "今天夏天没有来？",
          author: "等等我们",
        },
        {
          imgSrc: require("../assets/a14.jpg"),
          title: "遇见？",
          author: "会遇见",
        },
        {
          imgSrc: require("../assets/a15.jpg"),
          title: "一定会有好事情发生？",
          author: "生活有惊喜也有意外。",
        },
        {
          imgSrc: require("../assets/a16.jpg"),
          title: "美丽的豹子？",
          author: "没有见过。",
        },
        {
          imgSrc: require("../assets/a17.jpg"),
          title: "越长大越寂寞？",
          author: "是啊不",
        },
        {
          imgSrc: require("../assets/a18.jpg"),
          title: "你不懂？",
          author: "你懂。",
        },
        {
          imgSrc: require("../assets/a19.jpg"),
          title: "没有神的庙宇？",
          author: "不信神。",
        },
        {
          imgSrc: require("../assets/a20.jpg"),
          title: "张胖胖的猫？",
          author: "叫张芥末。",
        },
        {
          imgSrc: require("../assets/a21.jpg"),
          title: "为你点一盏灯？",
          author: "好哦。",
        },
      ],
      project: [
        {
          imgSrc: require("../assets/project01.jpg"),
          text: "#专题",
          title: "[故事大爆炸] 获奖作品集合",
        },
        {
          imgSrc: require("../assets/project02.jpg"),
          text: "#专题",
          title: "很高兴见到你",
        },
        {
          imgSrc: require("../assets/project03.jpg"),
          text: "#专题",
          title: "关于爱情，我知道的不多",
        },
        {
          imgSrc: require("../assets/project04.jpg"),
          text: "#专题",
          title: "[故事大爆炸] 短篇入围作品集合",
        },
        {
          imgSrc: require("../assets/project05.jpg"),
          text: "#专题",
          title: "与写作相关的日子",
        },
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
      hot: [
        {
          title: "五月阅读月度热榜",
          imgSrc: require("../assets/a04.jpg"),
          text1: "一定会有好事情发生",
          text2: "今年夏天没来",
          text3: "大橘为重",
        },
        {
          title: "五月问答月度热榜",
          imgSrc: require("../assets/a08.jpg"),
          text1: "你听过最浪漫的情话是什么？",
          text2: "如何控制自己的情绪？",
          text3: "如何提高阅读速度？",
        },
        {
          title: "1-3月音乐季度热榜",
          imgSrc: require("../assets/a15.jpg"),
          text1: "夏天的风",
          text2: "晴天",
          text3: "在你身边就失去超能力",
        },
        {
          title: "四月阅读月度热榜",
          imgSrc: require("../assets/a14.jpg"),
          text1: "一定会有好事情发生",
          text2: "今年夏天没来",
          text3: "大橘为重",
        },
        {
          title: "四月问答月度热榜",
          imgSrc: require("../assets/a18.jpg"),
          text1: "你听过最浪漫的情话是什么？",
          text2: "如何控制自己的情绪？",
          text3: "如何提高阅读速度？",
        },
        {
          title: "1-3月音乐季度热榜",
          imgSrc: require("../assets/a15.jpg"),
          text1: "夏天的风",
          text2: "晴天",
          text3: "在你身边就失去超能力",
        },
      ],
      author: [
        {
          imgSrc: require("../assets/a21.jpg"),
          name: "芥末",
          text: "喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵",
          type: "关注",
        },
        {
          imgSrc: require("../assets/a14.jpg"),
          name: "李诞",
          text: "一米八三的大诗人",
          type: "关注",
        },
        {
          imgSrc: require("../assets/a19.jpg"),
          name: "花大钱",
          text: "花大钱 一个青年作家",
          type: "关注",
        },
        {
          imgSrc: require("../assets/a01.jpg"),
          name: "咸贵人",
          text: "一个app常驻者",
          type: "关注",
        },
        {
          imgSrc: require("../assets/a02.jpg"),
          name: "芥末",
          text: "喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵",
          type: "关注",
        },
        {
          imgSrc: require("../assets/a03.jpg"),
          name: "芥末",
          text: "喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵",
          type: "关注",
        },
        {
          imgSrc: require("../assets/a04.jpg"),
          name: "芥末",
          text: "喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵",
          type: "关注",
        },
        {
          imgSrc: require("../assets/a05.jpg"),
          name: "芥末",
          text: "喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵",
          type: "关注",
        },
        {
          imgSrc: require("../assets/a06.jpg"),
          name: "芥末",
          text: "喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵",
          type: "关注",
        },
        {
          imgSrc: require("../assets/a14.jpg"),
          name: "李诞",
          text: "一米八三的大诗人",
          type: "关注",
        },
        {
          imgSrc: require("../assets/a19.jpg"),
          name: "花大钱",
          text: "花大钱 一个青年作家",
          type: "关注",
        },
        {
          imgSrc: require("../assets/a01.jpg"),
          name: "咸贵人",
          text: "一个app常驻者",
          type: "关注",
        },
        {
          imgSrc: require("../assets/a02.jpg"),
          name: "芥末",
          text: "喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵",
          type: "关注",
        },
        {
          imgSrc: require("../assets/a03.jpg"),
          name: "芥末",
          text: "喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵",
          type: "关注",
        },
                {
          imgSrc: require("../assets/a03.jpg"),
          name: "芥末",
          text: "喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵",
          type: "关注",
        },
      ],
    };
  },
  components: {
    Month,
    Read,
    Project,
    Daycard,
    Hot,
    Author,
  },
};
</script>
<style scoped>
* {
  background-color: #fff;
}
#find .month {
  font-size: 12px;
  color: gray;
  margin: 10px;
}
.showBox {
  width: 100%;
  background-color: #fff;
  /* padding: 0 10px 0 10px; */
}
#find .showBox .month {
  font-size: 12px;
  margin-top: 20px;
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

</style>
