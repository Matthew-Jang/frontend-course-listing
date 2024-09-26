<template>
  <v-container>
    <h1>Courses</h1>
    <v-btn color="primary">Add Course</v-btn>
    <table class="table">
      <thead>
        <tr>
          <th>Department</th>
          <th>Course Name</th>
          <th>Level</th>
          <th>Hours</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="course in courses" :key="course.id">
          <td>{{ course.department }}</td>
          <td>{{ course.courseName }}</td>
          <td>{{ course.level }}</td>
          <td>{{ course.hours }}</td>
          <td>
            <div class="button-group">
              <!-- Update button -->
              <v-btn color="green" @click="updateCourse(course.id)">Update</v-btn>
              <!-- Delete button -->
              <v-btn color="red" @click="deleteCourse(course.id)">Delete</v-btn>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'

const courses = ref([
  { id: 1, department: 'CS', courseName: 'Intro to Programming', level: 'Beginner', hours: 3 },
  { id: 2, department: 'CS', courseName: 'Data Structures', level: 'Intermediate', hours: 4 },
  { id: 3, department: 'CS', courseName: 'Algorithms', level: 'Advanced', hours: 4 }
])
</script>

<style scoped>
.table {
  width: 100%;
  border-collapse: collapse;
}

.table th,
.table td {
  border: 3px solid #ddd;
  padding: 20px;
  text-align: center;
}

.table th {
  background-color: #f2f2f2;
}

.button-group {
  display: flex; /* Use flexbox for spacing */
  justify-content: flex-start; /* Align buttons to the start */
}

.button-group .v-btn {
  margin-right: 10px; /* Add space between buttons */
}
</style>
