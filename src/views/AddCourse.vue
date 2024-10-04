<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { addCourse } from '../services/courseService.js'

// Define reactive variables using ref
const dept = ref('')
const course_number = ref('')
const Level = ref('')
const Hours = ref('')
const Name = ref('')
const Description = ref('')
const router = useRouter()

const onSave = async () => {
  try {
    const newCourse = {
      dept: dept.value,
      course_number: course_number.value,
      Level: parseInt(Level.value, 10),
      Hours: parseInt(Hours.value, 10),
      Name: Name.value,
      Description: Description.value
    }

    console.log('New Course Data:', newCourse)

    await addCourse(newCourse)
    router.push('/courses')
  } catch (error) {
    console.error('Error saving course:', error)
    alert('Failed to save course. Please try again.')
  }
}

const onCancel = () => {
  router.push('/courses')
}
</script>

<template>
  <v-container class="d-flex justify-center align-center" style="height: 100vh">
    <v-form>
      <v-row>
        <!-- Text Field -->
        <v-col cols="12">
          <v-text-field v-model="dept" label="Enter Dept" outlined clearable></v-text-field>
        </v-col>

        <!-- Text Field -->
        <v-col cols="12">
          <v-text-field
            v-model="course_number"
            label="Enter course number"
            outlined
            clearable
          ></v-text-field>
        </v-col>

        <!-- Text Field -->
        <v-col cols="12">
          <v-text-field v-model="Level" label="Enter level" outlined clearable></v-text-field>
        </v-col>

        <!-- Text Field -->
        <v-col cols="12">
          <v-text-field v-model="Hours" label="Enter hours" outlined clearable></v-text-field>
        </v-col>

        <!-- Text Field -->
        <v-col cols="12">
          <v-text-field v-model="Name" label="Enter name" outlined clearable></v-text-field>
        </v-col>

        <!-- Text Field -->
        <v-col cols="12">
          <v-text-field
            v-model="Description"
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