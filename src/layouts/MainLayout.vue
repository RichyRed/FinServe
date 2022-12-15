<template>
  <q-layout view="lHr lpR fFf">
    <q-header bordered class="bg-white text-black">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left =! left" />

        <q-toolbar-title class="text-weight-bold">
          <span class="gt-sm">
            {{ $route.name }}
          </span>
          <q-icon
            class="header-icon q-pa-md lt-md"
            name="fa-solid fa-dragon"
            size="sm"
            color="primary"
          />
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      show-if-above
      v-model="left"
      :width="283"
      side="left"
      bordered
      >
       <q-icon 
        class="q-pa-md" 
        name="fa-solid fa-dragon" 
        size="lg" 
        color="black" /> 
        
        
      <q-list>
        <q-item to="/" clickable v-ripple exact>
          <q-item-section avatar>
            <q-icon name="home" size="md" />
          </q-item-section>

          <q-item-section class="text-h6 text-weight-bold">
            Home
          </q-item-section>
        </q-item>

        <q-item to="/alert" clickable v-ripple exact>
          <q-item-section avatar>
            <q-icon name="notifications_active" size="md" />
          </q-item-section>

          <q-item-section class="text-h6 text-weight-bold">
            Alerts
          </q-item-section>
        </q-item>

        <q-item to="/evaluations" clickable v-ripple exact>
          <q-item-section avatar>
            <q-icon name="library_add_check" size="md" />
          </q-item-section>

          <q-item-section class="text-h6 text-weight-bold">
            Evaluations
          </q-item-section>
        </q-item>

        <q-item to="/news" clickable v-ripple exact>
          <q-item-section avatar>
            <q-icon name="newspaper" size="md" />
          </q-item-section>

          <q-item-section class="text-h6 text-weight-bold">
            News
          </q-item-section>
        </q-item>

        <q-item to="/about" clickable v-ripple exact>
          <q-item-section avatar>
            <q-icon name="help" size="md" />
          </q-item-section>

          <q-item-section class="text-h6 text-weight-bold">
            About
          </q-item-section>
        </q-item>

      </q-list>
    </q-drawer>

    <q-drawer show-if-above v-model="right" side="right" bordered>
      <q-input
        placeholder="Buscar en FinServe"
        class="q-ma-md"
        outlined
        rounded
        dense
      >
        <template v-slot:prepend>
          <q-icon name="search" />
        </template>
      </q-input>

      <q-list separator padding>
        <q-item clickable v-ripple>
        <q-drawer
        v-model="drawer"
        show-if-above
        :width="298"
        :breakpoint="400"
      >
          <q-img class="absolute-top" 
          src="https://s.gravatar.com/avatar/5fc7047603d033c45a98467686c78304?s=80" 
          style="height: 170px">

          <div class="absolute-bottom bg-transparent">
            <q-avatar size="60px" class="q-pa-xl">
              <img src="https://s.gravatar.com/avatar/58bf2be8edbc6d0de79e71b7d9278220?s=80">
            </q-avatar>
            <!-- <div class="text-weight-bold">Lionel Messi</div> -->
            <ol>
              <router-link to="/profile" class="nombre">Lionel Messi</router-link>
              <div>@leo10</div>

            </ol>
          </div>
        </q-img>
      </q-drawer>
        </q-item>

        <q-separator color="grey"></q-separator>

        <q-item class="q-pa-md">
          <q-item-section>
            <q-item-label overline class="text-grey"> Añadiendo texto para llenar
            </q-item-label>
            <q-item-label class="text-weight-bold">
              Algo genial esta pasando aqui!!</q-item-label
            >
            <q-item-label caption>holaa</q-item-label
            >
          </q-item-section>
          <q-item-section side top>
            <q-item-label caption>5 min ago</q-item-label>
          </q-item-section>
        </q-item>

        <q-item class="q-pa-md">
          <q-item-section>
            <q-item-label overline class="text-grey"> Suggestions </q-item-label>
            <q-item-label class="text-weight-bold">
              BoliviaExample</q-item-label
            >
            <q-item-label caption>Se requiere de un auditor,
              para empresa</q-item-label
            >
          </q-item-section>
          <q-item-section side top>
            <q-item-label caption>30 min ago</q-item-label>
          </q-item-section>
        </q-item>

        <q-item class="q-pa-md">
          <q-item-section>
            <q-item-label overline class="text-grey"> Publicity </q-item-label>
            <q-item-label class="text-weight-bold">
              El mundial abrio el mercado</q-item-label
            >
            <q-item-label caption
              >Debido a que estamos en epoca mundialista, se 
              genero una alta demanda de trabajadores</q-item-label
            >
          </q-item-section>
          <q-item-section side top>
            <q-item-label caption>3 days ago</q-item-label>
          </q-item-section>
        </q-item>

        <q-item class="q-pa-md">
          <q-item-section>
            <q-item-label overline class="text-grey"> Publicity </q-item-label>
            <q-item-label class="text-weight-bold">
              El mundial mas inesperado</q-item-label
            >
            <q-item-label caption
              >Debido a los resultados tan inesperados en los partidos
              del mundial, las personas perdieron grandes cantidades 
              de dinero, gracias a las apuestas que se realizaron </q-item-label
            >
          </q-item-section>
          <q-item-section side top>
            <q-item-label caption>1 week ago</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <keep-alive>
        <router-view />
      </keep-alive>
    </q-page-container>
    
  </q-layout>
</template>

<script>
import { ref } from 'vue'
export default {
  data() {
    return {
      left: false,
      right: false
    }
  },
  setup () {
    return {
      drawer: ref(false)
    }
  }
}
</script>

<style lang="sass">
.header-icon
  position: absolute
  bottom: 0
  left: 50%
  transform: translateX(-50%)

.nombre
  color: white
  text-decoration: none
</style>