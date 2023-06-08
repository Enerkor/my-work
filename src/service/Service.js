import axios from "axios";
import { useQuery } from "react-query";

const app_id = '13ba4ef9';
const app_key = 'ab18b096b39454e96497795cf3678f4e';


export const useGetPosts = (defoultSearch) => { 
  return useQuery('posts', async () => {
    return await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${defoultSearch}&app_id=${app_id}&app_key=${app_key}`)
     .then(res => res.data)
     .catch(err => err)
  }, {
    refetchOnWindowFocus: false,
  });
}

export const fetchData =  async (defoultQuery) => {
  return await axios.get(`https://api.edamam.com/api/recipes/v2/${defoultQuery}?type=public&app_id=${app_id}&app_key=${app_key}`)
    .then(response => response.data)
    .catch(err => err)
}

