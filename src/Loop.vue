<template>
  <div id="attract-loop">
    <carousel :per-page="1" :autoplay="true" :autoplayTimeout="3000" :autoplayHoverPause="true" :loop="true">
      <slide>
        <img src="http://via.placeholder.com/850x350">
      </slide>
      <slide>
        <img src="http://via.placeholder.com/850x350/6f3e3e">
      </slide>
      <slide>
        <img src="http://via.placeholder.com/850x350/000000">
      </slide>
    </carousel>
  </div>
</template>

<style>
.VueCarousel-wrapper {
  width: 100%;
  position: relative;
  overflow: hidden;
  text-align: center;
}
</style>
