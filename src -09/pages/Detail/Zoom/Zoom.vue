<template>
  <div class="spec-preview">
    <img :src="dafaultImg.imgUrl" />
    <div class="event" @mousemove="move"></div>
    <div class="big">
      <img :src="dafaultImg.imgUrl" ref="bigImg" />
    </div>
    <div class="mask" ref="mask"></div>
  </div>
</template>

<script>
export default {
  name: "Zoom",
  props: ["imgList"],
  data() {
    return {
      dafaultIndex: 0,
    };
  },
  mounted() {
    this.$bus.$on("changeDefaultIndex", this.changeDefaultIndex);
  },
  methods: {
    changeDefaultIndex(index) {
      this.dafaultIndex = index;
    },
    move(event) {
      let bigImg = this.$refs.bigImg;
      let mask = this.$refs.mask;
      
      let mouseX = event.offsetX;
      let mouseY = event.offsetY;
      let maskX = mouseX - mask.offsetWidth / 2;
      let maskY = mouseY - mask.offsetHeight / 2;

      //临界值
      if (maskX < 0) {
        maskX = 0;
      } else if (maskX > mask.offsetWidth) {
        maskX = mask.offsetWidth;
      }

      if (maskY < 0) {
        maskY = 0;
      } else if (maskY > mask.offsetHeight) {
        maskY = mask.offsetHeight;
      }

      mask.style.left = maskX + "px";
      mask.style.top = maskY + "px";
      bigImg.style.left = -2 * maskX + "px";
      bigImg.style.top = -2 * maskY + "px";
    },
  },
  computed: {
    dafaultImg() {
      //拉出来  变成a.b
      return this.imgList[this.dafaultIndex] || {};
      //后面的空对象,是以防与前面的拿到是undefined的,那就用后面的
    },
  },
};
</script>

<style lang="less">
.spec-preview {
  position: relative;
  width: 400px;
  height: 400px;
  border: 1px solid #ccc;

  img {
    width: 100%;
    height: 100%;
  }

  .event {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 998;
  }

  .mask {
    width: 50%;
    height: 50%;
    background-color: rgba(171, 185, 171, 0.178);
    position: absolute;
    left: 0;
    top: 0;
    display: none;
  }

  .big {
    width: 100%;
    height: 100%;
    position: absolute;
    top: -1px;
    left: 100%;
    border: 1px solid #aaa;
    overflow: hidden;
    z-index: 998;
    display: none;
    background: white;

    img {
      width: 200%;
      max-width: 200%;
      height: 200%;
      position: absolute;
      left: 0;
      top: 0;
    }
  }

  .event:hover ~ .mask,
  .event:hover ~ .big {
    display: block;
  }
}
</style>