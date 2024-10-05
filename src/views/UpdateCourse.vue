<script setup>
import { ref, onMounted, toRaw } from 'vue'
import { getCourseById, updateCourse } from '../services/courseService.js'
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

const onSave = async () => {
  try {
    await updateCourse(route.params.id, toRaw(course.value))
    router.push({ name: 'courses' })
  } catch (error) {
    console.error('Error updating course:', error)
  }
}

const onCancel = () => {
  router.push({ name: 'courses' })
}
onMounted(fetchCourse)
</script>

<template>
  <v-container class="d-flex justify-center align-center" style="height: 100vh">
    <v-form>
      <v-row>
        <!-- Text Field -->
        <v-col cols="12">
          <v-text-field v-model="course.dept" label="Enter Dept" outlined clearable></v-text-field>
        </v-col>

        <!-- Text Field -->
        <v-col cols="12">
          <v-text-field
            v-model="course.course_number"
            label="Enter course number"
            outlined
            clearable
          ></v-text-field>
        </v-col>

        <!-- Text Field -->
        <v-col cols="12">
          <v-text-field
            v-model="course.Level"
            label="Enter level"
            outlined
            clearable
          ></v-text-field>
        </v-col>

        <!-- Text Field -->
        <v-col cols="12">
          <v-text-field
            v-model="course.Hours"
            label="Enter hours"
            outlined
            clearable
          ></v-text-field>
        </v-col>

        <!-- Text Field -->
        <v-col cols="12">
          <v-text-field v-model="course.Name" label="Enter name" outlined clearable></v-text-field>
        </v-col>

        <!-- Text Field -->
        <v-col cols="12">
          <v-text-field
            v-model="course.Description"
            label="Enter description"
            outlined
            clearable
          ></v-text-field>
        </v-col>
      </v-row>

      <!-- Button Section -->
      <v-row class="mt-4" justify="space-between">
        <!-- Cancel Button -->
        <v-btn color="error" @click="onCancel"> Cancel </v-btn>
        <!-- Save Button -->
        <v-btn color="primary" @click="onSave"> Save </v-btn>
      </v-row>
    </v-form>
  </v-container>
</template>
