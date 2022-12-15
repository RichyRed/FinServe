<template>
    <div class="q-pa-md">
      <q-carousel
        arrows
        animated
        v-model="slide"
        height="560px"
      >
        <q-carousel-slide name="first">
          <img v-bind:src="require('src/assets/milan.png')" 
          alt="" 
          :height="460"
          :weight="400">
          <div class="absolute-bottom custom-caption">
            <!--<div class="text-h2">Milan</div>-->
            <router-link to="/seePage" class="equipo text-h2 ">
              Milan</router-link>
            <div class="text-subtitle1">Se busca 10</div>
          </div>
          
        </q-carousel-slide>

        <q-carousel-slide name="second">
          <img v-bind:src="require('src/assets/aduanaLogo.png')" 
          alt="" 
          :height="520"
          :weight="420">
          <div class="absolute-bottom custom-caption">
            <router-link to="/seePage" class="equipo text-h2 ">
              Aduana</router-link>
            <div class="text-subtitle1">Se requiere personal</div>
          </div>
        </q-carousel-slide>

        <q-carousel-slide name="third">
          <img v-bind:src="require('src/assets/bolivar1.png')" 
          alt=""
          :height="538"
          :weight="500">
          <div class="absolute-bottom custom-caption">
            <router-link to="/seePage" class="equipo text-h2 ">
              Club Bolivar</router-link>
            <div class="text-subtitle1">Se requiere entrenador para la 
              siguiente temporada
            </div>
          </div>
        </q-carousel-slide>
      </q-carousel>

    </div>

  </template>
  
  <script>
  import { ref } from 'vue'
  
  export default {
  name: 'NewsPage', 
    setup () {
      return {
        slide: ref('first')
      }
    }
  }
  </script>
  
  <style lang="sass" scoped>
  .custom-caption
    text-align: center
    padding: 12px
    color: white
    background-color: rgba(0, 0, 0, .3)
  
  .equipo
    color: white
    text-decoration: none
  </style>
  