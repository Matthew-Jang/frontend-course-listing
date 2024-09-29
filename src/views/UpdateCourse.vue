<script setup>
import { ref, onMounted } from 'vue'
import { getCourseById } from '../services/courseService.js'
import { useRouter, useRoute } from 'vue-router'

const route = useRoute()
const router = useRouter()
const course = ref({
  dept: '',
  course_number: '',
  Level: '',
  Hours: '',
  Name: '',
  Description: ''
})

const fetchCourse = async () => {
  try {
    const response = await getCourseById(route.params.id)
    course.value = response.data
  } catch (error) {
    console.error('Error fetching course:', error)
  }
}

onMounted(fetchCourse)
</script>

<template>
  <v-container>
    <h1>Update Course</h1>
    <v-form>
      <v-row>
        <v-col>
          <v-text-field v-model="course.dept" label="Department" width="100px" />
        </v-col>
        <v-col>
          <v-text-field v-model="course.course_number" label="Course Number" width="100px" />
        </v-col>
        <v-col>
          <v-text-field v-model="course.Level" label="Level" width="50px" />
        </v-col>
        <v-col>
          <v-text-field v-model="course.Hours" label="Hours" width="50px" />
        </v-col>
        <v-col>
          <v-text-field v-model="course.Name" label="Name" width="300px" />
        </v-col>
        <v-col>
          <v-text-field v-model="course.Description" label="Description" width="150px" />
        </v-col>
      </v-row>
      <div class="button-group">
        <!-- Update button -->
        <v-btn color="green" @click="updateCourse">Update</v-btn>
        <!-- Delete button -->
        <v-btn color="red" @click="deleteCourse(course.id)">Delete</v-btn>
      </div>
    </v-form>
  </v-container>
</template>

<style scoped>
.button-group {
  display: flex; /* Use flexbox for spacing */
  justify-content: flex-end; /* Align buttons to the start */
}
</style>
