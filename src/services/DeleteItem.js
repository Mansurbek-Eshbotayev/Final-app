import { axiosServices } from "./axiosServices";


// delete item
export const deleteItem = async (option, userId) => {
  try {
    const response = await axiosServices.delete(`/${option}/${userId}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};