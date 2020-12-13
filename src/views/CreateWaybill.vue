<template>
  <div class="hello">
    <h2>Create Trip</h2>
    <v-form class="pa-3" @submit.prevent="createWaybill">
      <v-text-field v-model="waybill.name" label="Waybill Name" /> 
      <v-autocomplete :items="routes" item-value="id" item-text="name" v-model="waybill.route" label="Route" />
      <v-autocomplete :items="transport" item-value="id" item-text="name" v-model="waybill.transport" return-object label="Transport" />
      <v-date-picker v-model="waybill.date"/> 
      <p>Tickets (contains from transport):<b>{{ waybill.transport && waybill.transport.numberOfPlaces }}</b></p>
      <v-btn type="submit" color="primary">Create</v-btn>
    </v-form>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import uuid from '../helpers/uuid'
export default {
  name: "CreateWaybill",
  data() {
    return {
      waybill: {}
    }
  },
  async mounted() {
    await this.getRoutes()
    await this.getAllTransport()
  },
  computed: {
    ...mapState(['routes', 'transport'])
  },
  methods: {
    ...mapActions(['getRoutes', 'getAllTransport', 'setWaybill']),
    createWaybill() {
      this.waybill.id = uuid()
      this.waybill.tickets = this.waybill.transport.numberOfPlaces
      this.waybill.transport = this.waybill.transport.id
      this.setWaybill(this.waybill)
    }
  }
};
</script>
