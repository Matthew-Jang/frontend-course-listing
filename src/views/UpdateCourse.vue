<script setup></script>

<template>
  <v-container>
    <h1>Update Course</h1>
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
        <tr>
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

<style scoped></style>
