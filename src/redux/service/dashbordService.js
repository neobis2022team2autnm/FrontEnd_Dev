import axios from 'axios'

const API = axios.create({

  baseURL: "http://34.159.147.205",
  headers: {
    ContentType: "application/json",
  },
});

console.log(API);
const getPlace = () => {
  return API.get("/trip/place/");
};

const get = id => {
  return API.get(`/tutorials/${id}`);
};

const create = data => {
  return API.post("/tutorials", data);
};

const update = (id, data) => {
  return API.put(`/tutorials/${id}`, data);
};

const remove = id => {
  return API.delete(`/tutorials/${id}`);
};

const removeAll = () => {
  return API.delete(`/tutorials`);
};

const findByTitle = title => {
  return API.get(`/tutorials?title=${title}`);
};

const dashbordService = {
  getPlace,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};

export default dashbordService;