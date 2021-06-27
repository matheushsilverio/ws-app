<template>
  <div id="card-game">
    <div
      class="card-container"
      :style="{ borderColor: getColor(), backgroundImage: `url(${match.map_link_gallery})` }"
    >
      <div class="card-background-shadow"></div>
      <div class="card-content">
        <div class="card-item" style="width: 40%">
          <span>{{ match.team_1_name }}</span>
        </div>
        <div class="card-item">
          <div class="card-score">
            <span class="score">{{ match.rounds_team_1 }}</span>
            <div>
              <span class="card-item-vs">VS</span>
              <span class="card-item-map">{{ match.map_name }}</span>
            </div>
            <span class="score">{{ match.rounds_team_2 }}</span>
          </div>
        </div>
        <div class="card-item" style="width: 40%; text-align: right">
          <span>{{ match.team_2_name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardGame",
  props: {
    match: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {};
  },
  methods: {
    getColor() {
      if (this.match.nextGame) return "#00EFD2";
      else if (this.match.completed_at) return "#FF4454";
      return "#000000";
    }
  }
};
</script>

<style lang="scss" scoped>
#card-game {
  position: relative;
  width: 715px;
  height: 116px;
  margin-bottom: 17px;

  .card-container {
    width: 695px;
    height: 100%;
    border-left: 20px solid #3485;
    background: #000;
    background-position: center;
    background-size: cover;
    position: relative;

    .card-background-shadow {
      z-index: 1;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: rgb(5, 5, 5);
      background: linear-gradient(
        0deg,
        rgba(5, 5, 5, 0.6306897759103641) 29%,
        rgba(255, 255, 255, 0) 100%
      );
    }

    .card-content {
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 2;
      position: absolute;
      height: 100%;
      display: flex;
      padding: 0 1em;
      justify-content: space-between;
      align-items: center;
      color: white;

      .card-item {
        font-size: 24px;
        font-weight: 700;
        line-height: 28.13px;
        font-family: "Roboto", sans-serif;

        .card-score {
          display: flex;

          div {
            display: flex;
            flex-direction: column;
            text-align: center;
          }

          .score {
            font-size: 40px;
            margin-top: 0.7em;
          }

          .card-item-vs {
            font-size: 18px;
            margin-top: 1.7em;
          }

          .card-item-map {
            text-align: center;
            font-size: 17px;
          }
        }

        span {
          margin: 0 0.5em;
        }
      }
    }
  }
}
</style>
