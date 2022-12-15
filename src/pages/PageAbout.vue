<template>
  <div class="q-pa-lg">
    <q-carousel
      v-model="slide"
      swipeable
      animated
      padding
      arrows
      navigation
      navigation-icon="radio_button_unchecked"
      height="550px"
      class="bg-black text-white rounded-borders"
    >
      <q-carousel-slide name="style" class="text-center">
        <q-scroll-area class="fit">
          <q-icon name="contact_support" size="100px" />
          <div class="text-h6 text-weight-bold">
            About us
          </div>
          <div class="q-mt-md">
            Nosotros somos, por ahora, un emprendimiento en crecimiento que busca facilitar 
            la busqueda de trabajo para personas mayores. Enfocada mas a un publico que pase
            los 50 años de edad.
          </div>
          <div class="q-mt-md">
            La idea de este emprendimiento nace en base a las necesidades de empleo que 
            tienen las personas que ya tienen una familia, y que por distintas situaciones
            ya no cuentan con un trabajo estable para poder subsistir.
          </div>
          <div class="q-mt-md">
            Vimos que a las personas que ya tienen cierta edad se les dificulta demasiado
            encontrar un nuevo trabajo, ya que las empresas de hoy en dia buscan mas sangre
            joven o personas con mucha experiencia. 
            Nosotros nos enfocamos en esas personas que se encuentran en el medio de la 
            busqueda de personal que tienen las empresas de hoy en dia.
          </div>
        </q-scroll-area>
      </q-carousel-slide>

      <q-carousel-slide name="tv" class="text-center">
        <q-scroll-area class="fit">
          <q-icon name="pageview" size="100px" />
          <div class="text-h6 text-weight-bold">
            What are we looking for?
          </div>
          <div class="q-mt-md">
            Lo que buscamos con este emprendimiento es facilitar la busqueda de trabajo 
            para esas personas que realmente lo necesitan, ya que tienen sus familias y 
            las empresas ya no se interesan en ellas.
          </div>
          <div class="q-mt-md">
            Buscamos que las personas tengan un acceso mas sencillo a la informacion que 
            buscan, ya que notamos que otros servicios no ofrecen una informacion clara 
            sobre el tema que abarcamos.
          </div>
          <div class="q-mt-md">
            Esperamos que con esta aplicacion las personas que en verdad necesiten 
            rearmar su vida lo puedan hacer de una manera mas efectiva y sencilla.
          </div>
        </q-scroll-area>
      </q-carousel-slide>

      <q-carousel-slide name="layers" class="text-center">
        <q-scroll-area class="fit">
          <q-icon name="update" size="100px" />
          <div class="text-h6 text-weight-bold">
            Next updates
          </div>
          <div class="q-mt-md">
            En un futuro lo que buscamos es mejorar la experiencia con del usuario con 
            nuestra pagina web, que la informacion no sea mas actualizada y presentada 
            de una mejor manera.
          </div>
          <div class="q-mt-md">
            Para un futuro cercano lo que buscamos es que todas las paginas que tenemos 
            sean funcionales y no sea puro diseño FrontEnd.
          </div>
          <div class="q-mt-md">
            Las metas que tenemos para el siguiente año son mejorar la interfaz de la 
            pagina web, y buscar anuncios de trabajos no solo en internet, si no tambien, 
            en periodicos por ejemplo.
          </div>
        </q-scroll-area>
      </q-carousel-slide>

    </q-carousel>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'AboutPage',
  setup () {
    return {
      slide: ref('style'),
      lorem: 'Somos una pagina creada para dar mas oportunidades a personas experimentadas sin trabajo'
    }
  }
}
</script>
