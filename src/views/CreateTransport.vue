<template>
  <div class="hello">
    <h2>Create Trip</h2>
    <v-form class="pa-3" @submit.prevent="createWaybill">
      <v-text-field v-model="transport.name" label="Transport Name" /> 
      <v-text-field v-model="transport.driver" label="Driver Name" /> 
      <v-text-field v-model="transport.numberOfPlaces" label="Places" /> 
      <v-autocomplete :items="transportTypes" item-value="id" item-text="name" v-model="transport.type" label="Type" />
      <v-btn type="submit" color="primary">Create</v-btn>
    </v-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import uuid from '../helpers/uuid'
export default {
  name: "CreateWaybill",
  data() {
    return {
      transport: {},
      transportTypes: ['car', 'bus', 'microbus']
    }
  },
  methods: {
    ...mapActions(['setTransport']),
    createWaybill() {
      this.transport.id = uuid()
      this.setTransport(this.transport)
    }
  }
};
</script>
