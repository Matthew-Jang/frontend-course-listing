<template>
  <v-container>
    <v-btn @click="goToAddCourse" color="green">Add Course</v-btn>
    <v-data-table :headers="headers" :items="courses" class="elevation-1">
      <template v-slot:item.actions="{ item }">
        <v-btn @click="goToUpdateCourse(item.id)" color="blue">Update</v-btn>
        <v-btn @click="confirmDelete(item.id)" color="red">Delete</v-btn>
      </template>
    </v-data-table>
    <v-dialog v-model="confirmDeleteDialog" max-width="290">
      <v-card>
        <v-card-title>Confirm Deletion</v-card-title>
        <v-card-actions>
          <v-btn @click="deleteCourse" color="red">Delete</v-btn>
          <v-btn @click="closeDialog">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import { getCourses, deleteCourse } from '@/services/courseService'

export default {
  data() {
    return {
      courses: [],
      confirmDeleteDialog: false,
      courseToDelete: null,
      headers: [
        { text: 'Department', value: 'department' },
        { text: 'Course Number', value: 'courseNumber' },
        { text: 'Course Name', value: 'courseName' },
        { text: 'Level', value: 'level' },
        { text: 'Hours', value: 'hours' },
        { text: 'Description', value: 'description' },
        { text: 'Actions', value: 'actions', sortable: false }
      ]
    }
  },
  created() {
    getCourses().then((response) => {
      this.courses = response.data
    })
  },
  methods: {
    goToAddCourse() {
      this.$router.push('/add-course')
    },
    goToUpdateCourse(id) {
      this.$router.push(`/update-course/${id}`)
    },
    confirmDelete(id) {
      this.courseToDelete = id
      this.confirmDeleteDialog = true
    },
    deleteCourse() {
      deleteCourse(this.courseToDelete).then(() => {
        this.courses = this.courses.filter((course) => course.id !== this.courseToDelete)
        this.closeDialog()
      })
    },
    closeDialog() {
      this.confirmDeleteDialog = false
    }
  }
}
</script>
