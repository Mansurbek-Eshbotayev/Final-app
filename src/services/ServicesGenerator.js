import { axiosServices } from "./axiosServices";

// get contacts
export async function getElementServices(item, setInfo) {
  const usersdata = await axiosServices.get(item);
  const tempData =
    usersdata.data.data || usersdata.data.products
      ? usersdata.data.data || usersdata.data.products
      : usersdata.data;
  setInfo(tempData);
}

// edit item

export const editElementServices = async (info, id, data) => {
  const response = await axiosServices.put(`/${info}/${id}`, data);
  return response.data;
};

// post item

export const postElementServices = async (info, data) => {
  const response = await axiosServices.post(`/${info}`, data);
  return response.data;
};

// Search item

export async function searchElementServices(item, setInfo) {
  const usersdata = await axiosServices.get(`/search/orders?search=${item}`);
  setInfo(usersdata.data);
}

// delete item
export const deleteItem = async (option, userId) => {
  try {
    const response = await axiosServices.delete(`/${option}/${userId}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
