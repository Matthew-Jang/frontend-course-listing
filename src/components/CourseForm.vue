<template>
  <v-form>
    <v-text-field label="Department" v-model="course.department"></v-text-field>
    <v-text-field label="Course Number" v-model="course.courseNumber"></v-text-field>
    <v-text-field label="Course Name" v-model="course.courseName"></v-text-field>
    <v-text-field label="Level" v-model="course.level"></v-text-field>
    <v-text-field label="Hours" v-model="course.hours"></v-text-field>
    <v-text-field label="Description" v-model="course.description"></v-text-field>

    <v-btn @click="saveCourse" color="green">Save</v-btn>
    <v-btn @click="cancel" color="red">Cancel</v-btn>
  </v-form>
</template>

<script>
export default {
  props: ['course'],
  methods: {
    saveCourse() {
      this.$emit('save', this.course)
    },
    cancel() {
      this.$emit('cancel')
    }
  }
}
</script>
