import axios from "axios";

export const getLiveCategories = async (url:string, username:string, password:string):Promise<(string | number)[]> => {
  const builtUrl = `http://${url}/player_api.php?username=${username}&password=${password}&action=get_live_categories`;
  try {
    const response = await axios(builtUrl);
    return response.data;
  } catch (error) {
    return [];
  }
}
export const getVodCategories = async (url:string, username:string, password:string):Promise<(string | number)[]> => {
  const builtUrl = `http://${url}/player_api.php?username=${username}&password=${password}&action=get_vod_categories`;
  try {
    const response = await axios(builtUrl);
    return response.data;
  } catch (error) {
    return [];
  }
}

export const getStreamCategories = async (url:string, username:string, password:string):Promise<(string | number)[]> => {
  const builtUrl = `http://${url}/player_api.php?username=${username}&password=${password}&action=get_series_categories`;
  try {
    const response = await axios(builtUrl);
    return response.data;
  } catch (error) {
    return [];
  }
}
