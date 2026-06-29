import api from './api';

export const getDepartments = async () => {
  return await api.get('/Departement/GetAllDepartments');
};

export const getDepartmentById = async (id) => {
  return await api.get(`/Departement/GetDepartmentByid/${id}`);
};

export const createDepartment = async (department) => {
  return await api.post('/Departement/AddDepartment', department);
};

export const updateDepartment = async (department) => {
  return await api.put('/Departement/UpdateDepartment', department);
};

export const deleteDepartment = async (id) => {
  return await api.delete(`/Departement/Deletedepartment/${id}`);
};