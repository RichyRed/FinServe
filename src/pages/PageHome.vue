<template>
  <q-page class="relative-position">
    <q-scroll-area class="absolute full-width full-height">
    <div class="q-py-lg q-px-md row items-end q-col-gutter-md">
      <div class="col">
        <q-input
          class="new-post"
          bottom-slots
          v-model="newContent"
          placeholder="¿En que estas pensando??"
          counter
          maxlength="280"
          autogrow
        >
          <template v-slot:before>
            <q-avatar size="xl">
              <img src="https://s.gravatar.com/avatar/58bf2be8edbc6d0de79e71b7d9278220?s=80" />
            </q-avatar>
          </template>
        </q-input>
      </div>
      <div class="col col-shrink">
        <q-btn
          @click="addNewPost"
          :disable="!newContent"
          class="q-mb-lg"
          unelevated
          rounded
          color="primary"
          label="POSTEAR"
          no-caps
        />
      </div>
    </div>

    <q-separator class="divider" size="10px" color="grey-2" />

    <q-list separator>
      <transition-group
      appear
      enter-active-class="animated fadeIn slow"
      leave-active-class="animated fadeOut slow">
        <q-item 
        v-for="post in posts" 
        :key="post.id" 
        class="post q-py-md">
  
          <q-item-section avatar top>
            <q-avatar size="xl">
              <img src="https://s.gravatar.com/avatar/58bf2be8edbc6d0de79e71b7d9278220?s=80" />
            </q-avatar>
          </q-item-section>
  
          <q-item-section>
            <q-item-label class="text-subtitle1">
              <strong>Lionel Messi</strong>
              <span class="text-grey-7">
                 @leo10
                 <br class="lt-md">&bull; {{ moment().format('MMM Do YYYY, h:mm a')}}
              </span>
            </q-item-label>
            <q-item-label class="post-content text-body1">
              {{ post.content }}
            </q-item-label>
            <div class="post-icons row justify-between q-mt-sm">
              <q-btn flat round color="grey" icon="far fa-comment" size="sm" />
              <q-btn flat round color="grey" icon="fas fa-retweet" size="sm" />
              <q-btn 
              @click="Likeado(post)"
              flat
              round 
              :color="post.liked ? 'pink' : 'grey'" 
              :icon="post.liked ? 'fas fa-heart' : 'far fa-heart'" 
              size="sm" />
              <q-btn
                @click="deletePost(post)"
                flat
                round
                color="grey"
                icon="fas fa-trash"
                size="sm"
              />
            </div>
          </q-item-section>
  
        </q-item>
      </transition-group>

    </q-list>
  </q-scroll-area>
  </q-page>
</template>

<script>
var moment = require('moment');
import db from 'src/boot/firebase'
import { formatDistance } from 'date-fns'

export default {
  name: 'PageHome',
  data() {
    return {
      newContent: '',
      moment:moment,
      posts: [
      /*  {
          content: 'texto suculento de los twits',
          date: 1670179274240
        },
        {
          content: 'texto suculento de los twits',
          date: 1670179284511
        },*/
      ]
    }
  },

  methods: {
    addNewPost() {
      let newPost = {
        content: this.newContent,
        date: Date.now(),
        liked: false
      }
      //this.posts.unshift(newPost)
      db.collection('posts').add(newPost).then(function(docRef){
        console.log('Documento con el ID: ', docRef.id)
      }).catch(function(error){
        console.error('Error al añadir el documento: ', error)
      })
      this.newContent = ''
    },

    deletePost(post) {
       db.collection('posts').doc(post.id).delete().then(function() {
        console.log('Documento eliminado correctamente ');
       }).catch(function(error){
        console.error('Error al eliminar el archivo', error);
       })
    },
    Likeado(post) {
       db.collection('posts').doc(post.id).update( {
        liked: !post.liked
       })
       .then(function() {
        console.log('Documento editado de manera exitosa')
       })
       .catch(function(error) {
        console.error('Error al editar el archivo: ', error)
       })
    }
  },


  filters: {
    
  },

  mounted() {
    db.collection('posts').orderBy('date').onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
          let postChange = change.doc.data()
          postChange.id = change.doc.id
          if (change.type === 'added') {
            console.log('New post: ', postChange)
            this.posts.unshift(postChange)
          }
          if (change.type === 'modified') {
            console.log('Modified post: ', postChange)
            let index = this.posts.findIndex(post => post.id === postChange.id)
            Object.assign(this.posts[index], postChange)
          }
          if (change.type === 'removed') {
            console.log('Removed post: ', postChange)
            let index = this.posts.findIndex(post => post.id === postChange.id)
            this.posts.splice(index , 1)
          }
        })
    })     
  }
}
</script>

<style lang="sass">
.new-post
  textarea
  font-size: 19px
  line-height: 1.4 !important

.divider
  border-top: 1px solid
  border-bottom: 1px solid
  border-color: $grey-4

.post:not(:first-child)
  border-top: 1px solid rgba(0, 0, 0, 0.12)

.post-content
  white-space: pre-line

.post-icons
  margin-left: -5px
</style>