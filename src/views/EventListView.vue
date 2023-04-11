<script>
import EventCard from '../components/EventCard.vue';
import EventService from '../services/EventServices.js'
export default{
  name:'HomeView',
  components:{EventCard},
  data(){
    return{
      events:null
      
    }
  },
  mounted(){
    EventService.getEvents()
    .then(response => this.events = response.data)
    .catch(er=>console.error(er ))
  }
}
</script>

<template>
  <h1>Events For Good</h1>
 <div class="events">
  <EventCard v-for="event in events" :key="event" :event="event"/>
 </div>
</template>

<style scoped>
.events{
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
