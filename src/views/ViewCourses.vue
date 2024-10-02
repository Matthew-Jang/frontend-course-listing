<script setup>
import { ref, onMounted } from 'vue'
import { getCourses, deleteCourse } from '../services/courseService.js'
import { useRouter } from 'vue-router'

const router = useRouter()
const courses = ref([])

const fetchCourses = async () => {
  try {
    const response = await getCourses()
    courses.value = response.data
  } catch (error) {
    console.error('Error fetching courses:', error)
  }
}

const updateCourse = (id) => {
  router.push({
    name: 'update',
    params: { id }
  })
}

onMounted(fetchCourses)
</script>

<template>
  <v-container>
    <h1>Courses</h1>

    <v-data-table
      :headers="[
        { text: 'Departement', value: 'dept', width: '100px' },
        { text: 'Course Number', value: 'course_number', width: '100px' },
        { text: 'Level', value: 'Level', width: '50px' },
        { text: 'Hours', value: 'Hours', width: '50px' },
        { text: 'Name', value: 'Name', width: '300px' },
        // { text: 'Description', value: 'Description', align: 'start', width: '150px' },
        { text: 'Actions', value: 'actions', sortable: false, width: '150px' }
      ]"
      :items="courses"
      :items-per-page="10"
      class="elevation-1"
      style="width: 1000px"
    >
      <template v-slot:item.actions="{ item: course }">
        <div class="button-group">
          <!-- Update button -->
          <v-btn color="green" @click="updateCourse(course.id)">Update</v-btn>
          <!-- Delete button -->
          <v-btn color="red" @click="deleteCourse(course.id)">Delete</v-btn>
        </div>
      </template>

      <!-- <template v-slot:item.Description="{ item }">
        <div class="description">{{ item.Description }}</div>
      </template> -->
    </v-data-table>
  </v-container>
</template>

<style scoped>
.button-group {
  display: flex; /* Use flexbox for spacing */
  justify-content: flex-end; /* Align buttons to the start */
}

.button-group .v-btn {
  margin-right: 10px; /* Add space between buttons */
}

/* .description {
  max-width: 200px; /* Set a max width for the description 
white-space: nowrap; /* Prevent text from wrapping 
overflow: hidden; /* Hide overflow text 
text-overflow: ellipsis; /* Add ellipsis for overflow text 
} */
</style>
