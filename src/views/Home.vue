<template>
  <div class="home">
    <h1>Hello! Create your trip with us</h1>
    <div class="d-flex px-5 align-center">
      <v-autocomplete :items="cities" class="mr-5" item-value="value" item-text="value" v-model="filter.startCity" label="From City" />
      <v-autocomplete :items="cities" class="mr-5" item-value="value" item-text="value" v-model="filter.endCity" label="To City" />
      <v-btn color="primary" @click="searchWaybill(filter)"> Search </v-btn>
    </div>
    <v-data-table
      :headers="headers"
      :items="waybills"
      :items-per-page="5"
      class="elevation-1"
  >
      <template v-slot:item.buy="{ item }">
        <v-btn @click="showBuyModal(item)" color="primary"> Buy </v-btn>    
      </template>
    </v-data-table>
    <v-dialog v-model="isBuyTicket" max-width="500">
        <v-card class="pa-3">
          <v-text-field label="Name" />
          <v-text-field label="Surname" />
          <p>Final destination:<b>{{ selectedItem.route && selectedItem.route.endCity }}</b></p>
          <p>Cost: <b>{{ cost }}</b></p>
          <div class="d-flex justify-space-between">
            <v-btn color="success" @click="buyTicket(selectedItem); isBuyTicket=false"> Buy </v-btn>
            <v-btn color="warning" @click="buyTicket(selectedItem); isBuyTicket=false"> Booked </v-btn>
            <v-btn color="error" @click="isBuyTicket = false"> Cancel </v-btn>
          </div>
        </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
// @ is an alias to /src
export default {
  name: "Home",
  data() {
    return {
      isBuyTicket: false,
      cost: 100,
      selectedItem: {},
      filter: {},
      headers: [{
            text: 'Name',
            align: 'start',
            value: 'name',
          },
          { text: 'Tickets', value: 'tickets' },
          { text: 'Start City', value: 'route.startCity' },
          { text: 'End City', value: 'route.endCity' },
          { text: 'Transport', value: 'transport.type' },
          { text: 'Driver', value: 'transport.driver' }, 
          { text: 'Buy', value: 'buy' }],
    }
  },
  computed: {
    ...mapState(['waybills', 'cities'])
  },
  mounted() {
    this.getWaybills()
    this.getCities()
  },
  methods: {
    ...mapActions(['getWaybills', 'getCities', 'searchWaybill', 'buyTicket']),
    showBuyModal(item) {
      this.selectedItem = item
      this.isBuyTicket = true
    },
  }
};
</script>
