class TodoModel {

  constructor() {
    this.baseUrl = 'http://localhost:4000/api/todos';
  }

  /* REST Methods */

  all() {
    return fetch(this.baseUrl);
  }

  find(id) {
    return fetch(`${this.baseUrl}/${id}`);
  }

  create(data) {
    return fetch(this.baseUrl, {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });
  }

  update(id, data) {
    return fetch(`${this.baseUrl}/${id}`, {
      method: 'put',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });
  }

  destroy(id) {
    return fetch(`${this.baseUrl}/${id}`, {
      method: 'delete'
    });
  }

  /* Business Logic */
  complete(id) {
    return this.update(id, {completed: true});
  }

  uncomplete(id) {
    return this.update(id, {completed: false});
  }
}

export default TodoModel;
