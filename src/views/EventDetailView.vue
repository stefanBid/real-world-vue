<template>
    <div v-if="event">
        <h1>{{ event.title }}</h1>
        <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
        <p>{{ event.description }}</p>
    </div>
</template>

<script>
import EventServices from '@/services/EventServices';
export default{
    name: "EventDetailView",
    data(){
        return{
            event:null,
        }
    },
    props:{
        id:{
            required:true
        }
    },

    mounted(){
        EventServices.getEventById(this.id)
        .then(response => this.event = response.data)
        .catch(er => console.error(er))

    }
}

</script>

<style scoped>
</style>