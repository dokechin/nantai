<template>
  <b-card class="card alert-warning border-secondary">
    <p class="card-text mb-1" align="right"><span class="star">{{ "★".repeat(rare) }}</span>No.{{ id }}</p>
    <div class="row"> 
      <div class="col-9">
        <p class="name-text mb-0 pb-0">{{ "&emsp;".repeat((pref+city).length) }}<span class="yomi mb-0">{{ town_yomi }}</span></p>
        <p class="name-text mt-0 pt-0">{{ pref + city + town }}</p>
      </div>
      <div class="col-3">
        <b-card-img :src="map_img" alt="Image" class="map_img" fluid />
      </div>
    </div>
    <b-card-img :src="spot_img" alt="Image" bottom/>
    <div class="spot">
      <p class="card-text mb-1">{{ spot }}</p>
      <div class="guide">{{ spot_guide }}</div>
    </div>
  </b-card>
</template>
<script>
export default {
  props: {
    id: {
      type: Number,
      default: 0
    },
    pref: {
      type: String,
      default: ''
    },
    city: {
      type: String,
      default: ''
    },
    town: {
      type: String,
      default: ''
    },
    town_yomi: {
      type: String,
      default: ''
    },
    spot_img: {
      type: String,
      default: ''
    },
    map_img: {
      type: String,
      default: ''
    },
    rare: {
      type: Number,
      default: 1
    },
    spot: {
      type: String,
      default: ''
    },
    spot_guide: {
      type: String,
      default: ''
    }
  }
}
</script>
<style>
.card-body {
  background-color: #fef1c2;
  filter: drop-shadow(10px 10px 1.5px gray);
  border-style: none;
  border-radius: 10px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
}
div.guide {
  background-color: white;
}
.star {
  font-size: 20px;
  color: blue;
}
.spot {
  backgroud-color: yellow;
}
.name-text {
  font-size: 20px;
  color: #534741;
  line-height: 1.2;
}
.map_img {
  width: 70px;
}
.yomi {
  font-size: 14px;
  color: #534741;
}
.card-img-bottom {
  border-style: solid;
  border-color: white;
  border-width: 4px;
  border-radius: 10px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
}
.guide {
  white-space: pre-wrap;
  height: 100px;
  overflow-x: visible;
  overflow-y: scroll;
  border-radius: 10px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border: 1px solid #aaa;
  padding: 10px;
}
</style>
