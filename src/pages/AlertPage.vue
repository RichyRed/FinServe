<template>
  <div class="q-pa-md">
    <div ref="myListRef" class="row justify-center q-gutter-sm">
      <q-intersection
        v-for="index in 30"
        :key="index"
        :root="listEl"
        transition="scale"
        class="example-item"
      >
        <q-card class="q-ma-sm">
          <img v-bind:src="require('src/assets/Logotipo_de_BoA.png')" alt="">
          <q-card-section>
            <!--<div class="text-h6">You have a new alert</div>-->
            <router-link to="/seePage" class="alerta text-h5 text-weight-bold">
              You have a new alert</router-link>
            <div class="text-subtitle2">by BOA</div>
          </q-card-section>
          <!--<q-item to="/seePage" clickable v-ripple exact color="grey"> 
          <q-item-section avatar>
            <q-icon name="remove_red_eye" size="sm" color="grey"/>
          </q-item-section>
          <q-item-section class="text-h5 text-weight-bold">
            See
          </q-item-section>
        </q-item> -->
        </q-card>
      </q-intersection>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  name: 'AlertPage',
  setup () {
    const myListRef = ref(null)

    return {
      myListRef,
      listEl: computed(() => myListRef.value ? myListRef.value.$el : null)
    }
  }
}
</script>

<style lang="sass" scoped>
.example-item
  height: 290px
  width: 260px

.alerta
  color: black
  text-decoration: none 
</style>
