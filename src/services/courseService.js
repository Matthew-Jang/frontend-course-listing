import axios from 'axios'

const api = axios.create({
  baseURL: 'http://project2.eaglesoftwareteam.com:3014/api/course-t4'
})

// const api = axios.create({
//   baseURL: 'http://localhost:3014/api/course-t4'
// })

export const getCourses = () => api.get('/')
export const getCourseById = (id) => api.get(`/${id}`)
export const addCourse = (course) => api.post('/', course)
export const updateCourse = (id, course) => api.put(`/${id}`, course)
export const deleteCourse = (id) => api.delete(`/${id}`)
