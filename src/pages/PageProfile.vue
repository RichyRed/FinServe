<template>
    <div class="q-pa-xl row items-start q-gutter-md">
  
      <q-card class="my-card" flat bordered>
        <q-item>
          <q-item-section avata class="q-pa-sm">
            <q-avatar>
              <img 
              src="https://s.gravatar.com/avatar/58bf2be8edbc6d0de79e71b7d9278220?s=80"
              :height="300"
              :weight="300">
            </q-avatar>
          </q-item-section>
  
          <q-item-section class="q-pa-md">
            <q-item-label class="text-weight-bold">
                Lionel Andres Messi Cuccittini</q-item-label>
            <q-item-label caption>
              @leo10
            </q-item-label>
          </q-item-section>
        </q-item>
  
        <q-separator />
  
        <q-card-section horizontal>
          <q-card-section>
            Lionel Andrés Messi Cuccittini (Rosario, Argentina 24 de junio de 1987), 
            conocido como Leo Messi, es un futbolista argentino que juega como 
            delantero o centrocampista. Jugador histórico del Fútbol Club Barcelona, 
            al que estuvo ligado veinte años, desde 2021 integra el plantel del 
            Paris Saint-Germain de la Ligue 1 de Francia. Es también internacional 
            con la selección de Argentina, equipo del que es capitán.
          </q-card-section>
  
          <q-separator vertical />
  
          <q-card-section class="col-4">
            Leo Messi estaría por delante de Maradona, Cristiano Ronaldo, 
            Pelé, Zidane y Cruyff. 
            Leo Messi es el mejor jugador de todos los tiempos.
          </q-card-section>
        </q-card-section>
      </q-card>
  

      <q-card class="my-card" flat bordered>
        <q-card-section horizontal>
          <q-card-section class="q-pt-xs">
            <div class="text-h5 q-mt-sm q-mb-xs text-weight-bold">
                About me</div>
            <div class="text-caption">
                Máximo goleador sudamericano de la historia del fútbol en partidos oficiales: 758 goles.
                Máximo goleador de la historia del fútbol en un mismo club: 672 goles con el Barcelona.
            </div>
          </q-card-section>
  
          <q-card-section class="col-5 flex flex-center">
            <q-img
              class="rounded-borders"
              v-bind:src="require('src/assets/messi1.png')"
            />
          </q-card-section>
        </q-card-section>
  
        <q-separator />
      </q-card>


      <q-card class="my-card">
          <div class="text-h5 q-pa-sm q-mb-xs text-weight-bold">
                 Last work</div>
        <q-card-section horizontal>
          <q-img
            class="col-5"
            v-bind:src="require('src/assets/messiPsg.png')"
          />
  
          <q-card-section>
            Recientemente me cambie de equipo, deje de ser jugador del FC. Barcelona
            a ser jugador oficial del PSG. Fue un cambio dificil pero fue lo mejor 
            para mi carrera.
          </q-card-section>
        </q-card-section>
  
        <q-separator />
  
        <q-card-actions>
          <q-btn flat round icon="auto_stories" />
          <q-btn flat>
            35 años
          </q-btn>
          <q-btn flat color="primary">
            Casado, tres hijos
          </q-btn>
        </q-card-actions>
      </q-card>
  
      <q-card class="my-card">
        <q-card-section horizontal>
          <q-img
            class="col"
            v-bind:src="require('src/assets/messiCopa.png')"
          />
  
          <q-card-actions vertical class="justify-around">
            <q-btn flat round color="red" icon="favorite" />
            <q-btn flat round color="accent" icon="bookmark" />
            <q-btn flat round color="primary" icon="share" />
          </q-card-actions>
        </q-card-section>
      </q-card>
    </div>
  </template>
  
  <script>
  export default {
    setup () {
      return {
        lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      }
    }
  }
  </script>
  
  <style lang="sass" scoped>
  .my-card
    width: 100%
    max-width: 350px
  </style>
  