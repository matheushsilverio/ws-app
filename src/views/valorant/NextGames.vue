<template>
  <MainFrame>
    <div v-if="viewMatches">
      <h1>próximos jogos</h1>
      <div class="container-matches">
        <CardGame v-for="match of matches" :key="match.id" :match="match"></CardGame>
      </div>
    </div>
  </MainFrame>
</template>

<script>
import CardGame from "@/components/valorant/CardGame.vue";
import { MacthesServices } from "@/services/api";

export default {
  name: "NextGames",
  components: {
    CardGame
  },
  data() {
    return {
      matches: [],
      viewMatches: true
    };
  },
  created() {
    this.load();
    this.sockets.subscribe("update-matches", data => {
      this.matches = data;
    });
    this.sockets.subscribe("view-macthes", data => {
      this.viewMatches = data;
    });
  },
  methods: {
    load() {
      MacthesServices.route("/search", "?id_reference=3").then(response => {
        const matches = response.data;
        const [firstMatchesNotCompleted] = matches.filter(m => !m.completed_at);
        matches.map(match => {
          if (match.id === firstMatchesNotCompleted.id) {
            match.nextGame = true;
          } else {
            match.nextGame = false;
          }
        });

        this.matches = matches;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.container-matches {
  position: absolute;
  right: 90px;
  top: 250px;
  padding: 0.1em 0;
}
h1 {
  position: absolute;
  width: 277px;
  height: 160px;
  left: 790px;
  top: 191px;

  font-family: "Anton";
  font-style: normal;
  font-weight: normal;
  font-size: 72px;
  line-height: 80px;

  text-align: right;
  text-transform: uppercase;

  color: #ffffff;
}
</style>
