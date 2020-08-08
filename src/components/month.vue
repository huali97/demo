<template>
  <div class="personal-mybuluo-head">
    <div class="personal-mybuluo-wording">{{ text }}</div>
    <div class="personal-border jmu-border-1px border-bottom"></div>
  </div>
</template>
<script>
export default {
  props: {
    text: String,
  },
};
</script>

<style scoped>
.personal-mybuluo-head {
  height: 14px;
  position: relative;
  margin: 0 20px;
}
.personal-mybuluo-wording {
  position: absolute;
  top: 0;
  z-index: 2;
  left: 50%;
  background-color: #fff;
  color: #777;
  text-align: center;
  -webkit-transform: translate(-50%, 0);
  transform: translate(-50%, 0);
  padding: 0 10px;
}
.personal-border {
  position: absolute;
  top: -7px;
  left: 0;
  width: 100%;
  height: 14px;
  z-index: 1;
}
.jmu-border-1px {
  position: relative;
}
.jmu-border-1px.border-bottom:after {
  border-bottom: 1px solid #dedfe0;
}
@media only screen and (-webkit-min-device-pixel-ratio: 2) .jmu-border-1px:after {
  right: -100%;
  bottom: -100%;
  -webkit-transform: scale(0.5);
}
.jmu-border-1px:after {
  display: block;
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  -webkit-transform-origin: 0 0;
  -webkit-transform: scale(1);
  pointer-events: none;
}
</style>
