import http from "../http-common";

class ColumnDataService {
  getAll() {
    return http.get("/columns");
  }

  get(id) {
    return http.get(`/columns/${id}`);
  }

  create(data) {
    return http.post("/columns", data);
  }

  update(id, data) {
    return http.put(`/columns/${id}`, data);
  }

  delete(id) {
    return http.delete(`/columns/${id}`);
  }

  deleteAll() {
    return http.delete(`/columns`);
  }

  findByTitle(title) {
    return http.get(`/columns?title=${title}`);
  }
}

export default new ColumnDataService();