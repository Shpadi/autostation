<template>
  <div class="home">
    <h1>Hello! Create your trip with us</h1>
    <v-data-table
      :headers="headers"
      :items="routes"
      :items-per-page="5"
      class="elevation-1"
  >
      <template v-slot:item.cost="{}">
            {{ cost }}  
      </template>
      <template v-slot:item.sum="{ item }">
          {{ item.boughtTickets * cost }}
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
// @ is an alias to /src
export default {
  name: "Cash",
  data() {
    return {
      cost: 100,
      headers: [{
            text: 'Name',
            align: 'start',
            value: 'name',
          },
          { text: 'Bought Tickets', value: 'boughtTickets' },
          { text: 'Start City', value: 'startCity' },
          { text: 'End City', value: 'endCity' },
          { text: 'Cost', value: 'cost' },
          { text: 'Sum', value: 'sum' }],
    }
  },
  computed: {
    ...mapState(['routes'])
  },
  mounted() {
    this.getRoutes()
  },
  methods: {
    ...mapActions(['getRoutes']),
  }
};
</script>
