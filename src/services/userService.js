import axios from '../axios';
const handleLoginApi = (userEmail, userPassword) => {
    return axios.post('/api/login', { email: userEmail, password: userPassword })
}
const getAllUsers = (inputId) => {
    return axios.get(`/api/get-all-users?id=${inputId}`, { id: inputId })
}
const createNewUserService = (data) => {
    return axios.post('/api/create-new-user', data)
}
const deleteUserService = (userId) => {
    return axios.post('/api/delete-user', { id: userId })
}
const editUserService = (data) => {
    return axios.put('/api/edit-users', data)
}
export { handleLoginApi, getAllUsers, createNewUserService, deleteUserService, editUserService };
