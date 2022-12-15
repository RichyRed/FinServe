<template>
    <div class="q-px-lg q-pb-md">
      <q-timeline :layout="layout" color="secondary">
        <q-timeline-entry heading>
          Timeline of Evauations
          <br>
        </q-timeline-entry>
  
        <q-timeline-entry
          title="First Evaluation"
          subtitle="November 20, 2022"
          side="left"
        >
          <div>
            Esta primera evaluacion se realizo en las ultimas semanas de noviembre,
            justo antes del inicio del mundial. Se registro un muy buen trabajo, y 
            buenos comentarios en los trabajos sugeridos por la pagina web. No hay 
            quejas en el trabajo realizado hasta ahora.
          </div>
        </q-timeline-entry>
  
        <q-timeline-entry
          title="Second Evaluation"
          subtitle="November 25, 2022"
          side="right"
          icon="delete"
        >
          <div>
            Segunda evaluacion, sobre la empresa BOA. Los comentarios recibidos
            de la empresa, son bastante satisfactorios hasta el momento.
            Se esta acabando de manera satisfactoria el mes, las sugerencias son las
            acertadas.
          </div>
        </q-timeline-entry>
  
        <q-timeline-entry heading>December, 2022</q-timeline-entry>
  
        <q-timeline-entry
          title="Australia vs. Argentina"
          subtitle="December 3, 2022"
          side="left"
        >
          <div>
            La selección australiana comenzó con la posición del balón, 
            pero Argentina recuperó el esférico en media cancha y 
            empezó el contragolpe de la Albiceleste, con una línea en el 
            mediocampo que le funcionó a Scaloni. El “Papu” Gómez a los 
            cinco minutos llegó al arco rival y envío un pase filtrado a 
            Messi pero el balón se fue por un costado del vertical.
          </div>
        </q-timeline-entry>
  
        <q-timeline-entry
          title="Paises Bajos vs. Argentina"
          subtitle="December 9, 2022"
          side="right"
        >
          <div>
            En un duelo de ajedrez, el equipo albiceleste necesitó de los
             penales para avanzar en un partido que, con un 2 a 0 parcial, 
             parecía resuelto cuando faltaban menos de 10 minutos para que 
             se cumplan los 90. Sin embargo, con un arbitraje polémico del 
             español Mateu Lahoz -que adicionó diez minutos de descuento-, 
             no pudo aguantar el resultado y finalmente igualó 2 a 2 ante una 
             selección neerlandesa que acudió a los pelotazos para lastimar al 
             combinado nacional.
          </div>
        </q-timeline-entry>
  
        <q-timeline-entry
          title="Argentina vs. Croacia"
          subtitle="december 13, 2022"
          side="left"
        >
          <div>
            El pase a semfinales del Mundial de Qatar de la selección 
            de Argentina frente a Croacia tuvo algo de justicia poética 
            para aquellos que ven en los centroeuropeos un conjunto rocoso y de
            poco fútbol. La albiceleste sorprendió en la primera parte a los 
            croatas con sus propias armas.
          </div>
        </q-timeline-entry>
  
        <q-timeline-entry
          title="Argentina vs. Francia"
          subtitle="December 18, 2022"
          side="right"
          color="orange"
          icon="emoji_events"
        >
          <div>
            Argentina y Francia se medirán en la gran final de Qatar 2022.
            Ambas elecciones buscarán bordar la tercera estrella en su escudo.
          </div>
        </q-timeline-entry>
      </q-timeline>
    </div>
  </template>
  
  <script>
  import { useQuasar } from 'quasar'
  import { computed } from 'vue'
  
  export default {
    name: 'EvaluationsPage',
    setup () {
      const $q = useQuasar()
  
      return {
        layout: computed(() => {
          return $q.screen.lt.sm ? 'dense' : ($q.screen.lt.md ? 'comfortable' : 'loose')
        })
      }
    }
  }
  </script>
  
