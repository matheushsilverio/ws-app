import http from "./http";

export default class BaseServices {
  constructor(domain) {
    this.domain = domain;
  }

  get(query = "") {
    return http.get(`${this.domain}${query}`);
  }

  route(route, query = "") {
    return http.get(`${this.domain}/${route}${query}`);
  }

  post(data) {
    return http.post(this.domain, data);
  }

  put(id, data) {
    return http.put(`${this.domain}/${id}`, data);
  }
}
