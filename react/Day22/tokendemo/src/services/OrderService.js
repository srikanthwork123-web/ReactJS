import Api from './Api';

export const getOrders = async () => {
  return await Api.get('/Orders/GetOrders');
};

export const getOrderById = async (id) => {
  return await Api.get(`/Orders/GetOrderByOrderid/${id}`);
};

export const createOrder = async (order) => {
  return await Api.post('/Orders/AddOrder', order);
};

export const updateOrder = async (order) => {
  return await Api.put('/Orders/UpdateOrder', order);
};

export const deleteOrder = async (id) => {
  return await Api.delete(`/Orders/DeleteOrderByOrderid/${id}`);
};