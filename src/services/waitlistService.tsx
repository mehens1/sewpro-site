import api from '../axios/api.ts';

export const submitNewUser = async (data: any) => {
  try {
    const response = await api.post("/waitlist", data);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
