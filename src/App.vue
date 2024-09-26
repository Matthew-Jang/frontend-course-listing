<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title>College Courses Management</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text>
        <RouterLink to="/">Home</RouterLink>
      </v-btn>
      <v-btn text>
        <RouterLink to="/add-course">Add Course</RouterLink>
      </v-btn>
      <v-btn text>
        <RouterLink to="/courses">View Courses</RouterLink>
      </v-btn>
    </v-app-bar>

    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

nav a {
  color: white;
  margin: 0 15px;
  text-decoration: none;
}

nav a.router-link-exact-active {
  font-weight: bold;
}

v-btn {
  padding: 0;
}

v-app-bar {
  background-color: #1976d2;
}
</style>
