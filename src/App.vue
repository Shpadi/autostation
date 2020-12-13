<template>
  <v-app>
      <v-app-bar absolute color="primary">
        <template v-for="page in pages">
          <router-link :to="page.link" :key="page.name" class="link px-3"> {{ page.name }} </router-link>
        </template>
      </v-app-bar>
      <div class="mt-16">
         <router-view />
      </div>
  </v-app>
</template>

<script>

export default {
  name: "App",

  data: () => ({
    pages: [{
      name: 'Home',
      link: '/'
    },
    {
      name: 'Create Trip',
      link: '/create-trip'
    },
    {
      name: 'Create Waybill',
      link: '/create-waybill'
    },
    {
      name: "Create Transport",
      link: "/create-transport",
    },
    {
      name: "Cash",
      link: "/cash",
    },
    ]
  })
};
</script>

<style scoped>
.link {
  color: #fff;
  text-decoration: none;
}
</style>
