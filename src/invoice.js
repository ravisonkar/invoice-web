import axios from 'axios';

export const addInvoiceDataRequest = (data) => { 
    return axios
    .post(`http://localhost:8000/posts`,data)
      .then((value) => value.data);
};
export const fetchInvoiceRequest = () => {
    return axios
      .get(`http://localhost:8000/posts`)
      .then((value) => value.data);
  };