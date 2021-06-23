<template>
  <MainFrame>
    Ola Mundo
  </MainFrame>
</template>

<script>
export default {
  name: "NextGames",
  created() {
    this.$socket.emit("round change");
  }
};
</script>

<style></style>
