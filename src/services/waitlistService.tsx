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

export const adsEventTrackerMetaApi = async (data: any) => {
  try {
    const accessToken = import.meta.env.VITE_FACEBOOK_ACCESS_TOKEN;
    const response = await fetch(
      `https://graph.facebook.com/v19.0/1867731730674819/events?access_token=${accessToken}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    return await response.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
};
