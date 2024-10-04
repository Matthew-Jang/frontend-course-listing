<script setup>
import { ref, onMounted } from 'vue'
import { getCourses, deleteCourse } from '../services/courseService.js'
import { useRouter } from 'vue-router'

const router = useRouter()
const courses = ref([])
const showModal = ref(false)
const courseToDeleteID = ref(null)

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

const toggleModal = (inputCourseToDeleteID) => {
  console.log('toggle modal: ', inputCourseToDeleteID)

  courseToDeleteID.value = inputCourseToDeleteID
  showModal.value = !showModal.value
}

const confirmDelete = async () => {
  try {
    console.log('confirm delete: ', courseToDeleteID)

    console.log('course: ', courseToDeleteID.value)
    await deleteCourse(courseToDeleteID.value)
  } catch (error) {
    console.error('Error deleting course:', error)
  }
  fetchCourses()
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
          <v-btn color="green" @click="updateCourse(course.course_number)">Update</v-btn>
          <!-- Delete button -->
          <v-btn color="red" @click="toggleModal(course.course_number)">Delete</v-btn>
        </div>
      </template>
    </v-data-table>

    <!-- Modal for Delete Button -->
    <template>
      <div>
        <!-- Modal -->
        <v-dialog v-model="showModal" max-width="400">
          <v-card>
            <v-card-title class="headline">Confirm Deletion</v-card-title>
            <v-card-text> Are you sure you want to delete this course? </v-card-text>
            <v-card-actions>
              <v-btn color="green" @click="showModal = false">Cancel</v-btn>
              <v-btn color="red" @click="confirmDelete() && (showModal = false)">Delete</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    </template>
  </v-container>
</template>

<style scoped>


</style>
