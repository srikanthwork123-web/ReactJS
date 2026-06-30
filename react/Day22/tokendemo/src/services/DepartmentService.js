import Api from './Api';

export const getDepartments = async () => {
  return await Api.get('/Departement/GetAllDepartments');
};

export const getDepartmentById = async (id) => {
  return await Api.get(`/Departement/GetDepartmentByid/${id}`);
};

export const createDepartment = async (department) => {
  return await Api.post('/Departement/AddDepartment', department);
};

export const updateDepartment = async (department) => {
  return await Api.put('/Departement/UpdateDepartment', department);
};

export const deleteDepartment = async (id) => {
  return await Api.delete(`/Departement/Deletedepartment/${id}`);
};