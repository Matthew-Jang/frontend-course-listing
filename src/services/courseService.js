import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3014'
})

// const api = axios.create({
//     baseURL: 'http://localhost:3014/course-t4'
//    })

export const getCourses = () => api.get('/course-t4')
export const getCourseById = (id) => api.get(`/course-t4/${id}`)
export const addCourse = (course) => api.post('/course-t4', course)
export const updateCourse = (id, course) => api.put(`/course-t4/${id}`, course)
export const deleteCourse = (id) => api.delete(`/course-t4/${id}`)
