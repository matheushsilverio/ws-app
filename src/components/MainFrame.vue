<template>
  <section id="main-frame">
    <slot />
  </section>
</template>

<script>
export default {
  name: "MainFrame"
};
</script>

<style lang="scss" scoped>
#main-frame {
  width: 1920px;
  height: 1080px;
  overflow: hidden;
  background-color: beige;
  position: relative;
}
</style>
