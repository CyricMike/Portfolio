<template>
  <div>
    <div class="stage-cube-cont">
      <div class="cubespinner">
        <div :class="'face'+ (i+1)" v-for="(item , i) in imagesDetails" :key="i">
          <v-avatar class="image" :image="getImages(item.name)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

const imagesDetails = [
    {'name' : 'HTML5', 'color' : '#DD0031' },
    {'name' : 'CSS', 'color' : '#F06529' },
    {'name' : 'JAVASCRIPT', 'color' : '#28A4D9' },
    {'name' : 'TYPESCRIPT', 'color' : '#5ED4F4' },
    {'name' : 'LARAVEL', 'color' : '#EFD81D' },
    {'name' : 'GIT', 'color' : '#EC4D28' },
]

//++++++++++++++++++++++++++++ Methods ++++++++++++++++++++++++++++//

function getImages(name) {
    return (`src/assets/Logos/${name}.png`)
}
</script>

<style lang="scss" scoped>
.stage-cube-cont {
  background-color: #5f5e5e;
  width: 70%;
  // height: 100%;
  // top: 0;
  // padding-top: 5%;
  // margin-left: 0;
  position: absolute;
  right: 0;
  // overflow: hidden;
}

.cubespinner {
  animation-name: spincube;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-duration: 12s;
  transform-style: preserve-3d;
  transform-origin: 100px 100px 0;
  margin-left: calc(60% - 60px);

  div {
    position: absolute;
    width: 80px;
    height: 80px;
    border: 1px solid #ccc;
    background: #1b1a1a;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 20px 0px rgba(16, 157, 228, 0.868);
  }

  .image {
    width: 50px;
    height: 50px;
  }

  .face1 {
    transform: translateZ(40px);
  }
  .face2 {
    transform: rotateY(90deg) translateZ(40px);
  }
  .face3 {
    transform: rotateY(90deg) rotateX(90deg) translateZ(40px);
  }
  .face4 {
    transform: rotateY(180deg) rotateZ(90deg) translateZ(40px);
  }
  .face5 {
    transform: rotateY(-90deg) rotateZ(90deg) translateZ(40px);
  }
  .face6 {
    transform: rotateX(-90deg) translateZ(40px);
  }
}

@keyframes spincube {
  from, 
  to {
    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg) ;
  }
  16% {
    transform: rotateY(-90deg);
  }
  33% {
    transform: rotateY(-90deg) rotateZ(90deg);
  }
  50% {
    transform: rotateY(-180deg) rotateZ(90deg);
  }
  66% {
    transform: rotateY(-270deg) rotateZ(90deg);
  }
  83% {
    transform: rotateX(90deg);
  }
}

@media only screen and (max-width: 960px){
  .cubespinner {
    animation-name: spincube;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-duration: 12s;
    transform-style: preserve-3d;
    transform-origin: 21px 21px 0;
    margin-left: calc(60% - 20px);
    div {
      width: 50px;
      height: 50px;
    }
    .image {
      width: 30px;
      height: 30px;
    }

  .face1 {
    transform: translateZ(25px);
  }
  .face2 {
    transform: rotateY(90deg) translateZ(25px);
  }
  .face3 {
    transform: rotateY(90deg) rotateX(90deg) translateZ(25px);
  }
  .face4 {
    transform: rotateY(180deg) rotateZ(90deg) translateZ(25px);
  }
  .face5 {
    transform: rotateY(-90deg) rotateZ(90deg) translateZ(25px);
  }
  .face6 {
    transform: rotateX(-90deg) translateZ(25px);
  }
    
  }
}
</style>
