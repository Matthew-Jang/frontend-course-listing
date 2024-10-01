import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3100/api'
})

export const getCourses = () => api.get('/courses')
export const getCourseById = (id) => api.get(`/courses/${id}`)
export const addCourse = (course) => api.post('/courses', course)
export const updateCourse = (id, course) => api.put(`/courses/${id}`, course)
export const deleteCourse = (id) => api.delete(`/courses/${id}`)
