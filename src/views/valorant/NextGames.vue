<template>
  <MainFrame>
    <div>
      <CardGame :match="{}"> </CardGame>
    </div>
  </MainFrame>
</template>

<script>
import CardGame from "@/components/valorant/CardGame.vue";

export default {
  name: "NextGames",
  components: {
    CardGame
  },
  created() {
    // this.$socket.emit("round change");
  }
};
</script>

<style></style>
