<script setup>
import { addCourse } from '../services/courseService.js'
</script>

<template>
  <v-container class="d-flex justify-center align-center" style="height: 100vh">
    <v-form>
      <v-row>
        <!-- Text Field -->
        <v-col cols="12">
          <v-text-field v-model="deptField" label="Enter Dept" outlined clearable></v-text-field>
        </v-col>

        <!-- Text Field -->
        <v-col cols="12">
          <v-text-field
            v-model="courseNumberField"
            label="Enter course number"
            outlined
            clearable
          ></v-text-field>
        </v-col>

        <!-- Text Field -->
        <v-col cols="12">
          <v-text-field v-model="levelField" label="Enter level" outlined clearable></v-text-field>
        </v-col>

        <!-- Text Field -->
        <v-col cols="12">
          <v-text-field v-model="hoursField" label="Enter hours" outlined clearable></v-text-field>
        </v-col>

        <!-- Text Field -->
        <v-col cols="12">
          <v-text-field v-model="nameField" label="Enter name" outlined clearable></v-text-field>
        </v-col>

        <!-- Text Field -->
        <v-col cols="12">
          <v-text-field
            v-model="descriptionField"
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

<script>
export default {
  data() {
    return {
      deptField: '',
      courseNumberField: '',
      levelField: '',
      hoursField: '',
      nameField: '',
      descriptionField: ''
    }
  },
  methods: {
    async onSave() {
      try {
        const newCourse = {
          dept: this.deptField,
          course_number: this.courseNumberField,
          Level: this.levelField,
          Hours: this.hoursField,
          Name: this.nameField,
          Description: this.descriptionField
        }
        await addCourse(newCourse)
        this.$router.push('/courses')
      } catch (error) {
        console.error('Error saving course:', error)
        alert('Failed to save course. Please try again.')
      }
    },
    onCancel() {
      this.$router.push('/courses')
    }
  }
}
</script>
