<script setup>
import { ref, onMounted } from 'vue'
import { getCourses, deleteCourse } from '../services/courseService.js'

const courses = ref([])

const fetchCourses = async () => {
  try {
    const response = await getCourses()
    courses.value = response.data
  } catch (error) {
    console.error('Error fetching courses:', error)
  }
}
</script>

<template>
  <v-container>
    <h1>Courses</h1>
    <v-btn color="primary">Add Course</v-btn>
    <table class="table">
      <thead>
        <tr>
          <th>Department</th>
          <th>Course Number</th>
          <th>Level</th>
          <th>Hours</th>
          <th>Name</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <!--:key="course.id"-->
        <tr v-for="course in courses">
          <td>{{ course.dept }}</td>
          <td>{{ course.course_number }}</td>
          <td>{{ course.Level }}</td>
          <td>{{ course.Hours }}</td>
          <td>{{ course.Name }}</td>
          <td>{{ course.Description }}</td>
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

methods: { updateCourse() { }, deleteCourse() { } }

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
