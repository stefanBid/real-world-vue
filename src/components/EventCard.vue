<script>
import { RouterLink } from 'vue-router';

export default{
    name: "EventCard",
    props: {
        event: {
            type: Object,
            required: true
        }
    },
    components: { RouterLink }
}
</script>

<template>
  <RouterLink :to="{name:'event-details', params:{id: event.id} }" class="link">
    <div class="event-card">
      <h2>{{ event.title }}</h2>
      <span>@{{ event.time }} on {{ event.date }}</span>
    </div>
  </RouterLink>
</template>

<style scoped>
.event-card{
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
  transition: all 0.3s;
}

.link{
  text-decoration: none;
  color: #39495c;
}

.event-card:hover{
  transform: scale(1.06);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
  background-color: #42b983;
  color: white;
}
</style>
