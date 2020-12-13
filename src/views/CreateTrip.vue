<template>
  <div class="hello">
    <h2>Create Trip</h2>
    <v-form class="pa-3" @submit.prevent="createRoute">
      <v-text-field v-model="route.name" label="Route Name" /> 
      <v-autocomplete :items="cities" item-value="value" item-text="value" v-model="route.startCity" label="From City" />
      <v-autocomplete :items="cities" item-value="value" item-text="value" v-model="route.endCity" label="To City" />
      <v-autocomplete :items="days" multiple v-model="route.days" label="Days" />
      <v-text-field type="time" v-model="route.roadTime" label="Road Time" /> 
      <v-text-field type="time" v-model="route.roadStartTime" label="Road Start Time" /> 
      <v-text-field type="time" v-model="route.roadEndTime" label="Road End Time" /> 
      <v-btn type="submit" color="primary">Create</v-btn>
    </v-form>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import uuid from '../helpers/uuid'
export default {
  name: "CreateTrip",
  data() {
    return {
      days: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
      route: {}
    }
  },
  async mounted() {
    await this.getCities()
  },
  computed: {
    ...mapState(['cities'])
  },
  methods: {
    ...mapActions(['getCities', 'setRoute']),
    createRoute() {
      this.route.id = uuid()
      this.route.boughtTickets = 0
      this.setRoute(this.route)
    }
  }
};
</script>
