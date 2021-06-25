<template>
  <div id="card-game">
    <div class="card-container">
      <div class="card-content">
        <div class="card-item">
          <span>Time 1</span>
        </div>
        <div class="card-item">
          <div class="card-score">
            <span class="score">13</span>
            <div>
              <span class="card-item-vs">VS</span>
              <span class="card-item-map">Ascent</span>
            </div>
            <span class="score">15</span>
          </div>
        </div>
        <div class="card-item">
          <span>Time 2</span>
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
  }
};
</script>

<style lang="scss" scoped>
#card-game {
  position: relative;
  width: 715px;
  height: 116px;

  .card-container {
    width: 695px;
    height: 100%;
    border-left: 20px solid #3485;
    background: #000;

    .card-content {
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
