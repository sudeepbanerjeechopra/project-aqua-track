import axios from '../../helpers/axiosConfig';

export const requestAddWater = async (water) => {
  const { data } = await axios.post('/water', water);
  return data;
};

export const requestUpdateWater = async (water) => {
  const { data } = await axios.patch(`/water/${water.id}/amount`, {
    amount: water.amount,
  });
  return data;
};

export const requestDeleteWater = async (waterid) => {
  const { data } = await axios.delete(`/water/${waterid}`);
  return data;
};

export const requestGetWaterDay = async (date) => {
  const { data } = await axios.get(`/water/daily/${date}`);
  return data;
};

export const requestGetWaterMonth = async (date) => {
  const { data } = await axios.get(`/water/monthly/${date.year}/${date.month}`);
  return data;
};

export const requestGetWaterStats = async () => {
  const { data } = await axios.get(`/water/stats`);
  return data;
};
