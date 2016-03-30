import 'es6-promise';
import 'whatwg-fetch';

import TodoModel from './modules/TodoModel';
import TodoView from './modules/TodoView';

let model = new TodoModel();

// model.create({ item: "Why why why", student: "Whoever"});
// model.create({ item: "Figbar", student: "Whoever"});

model
  .all()
  .then((response) => {
    return response.json();
  })
  .then((response) => {
    response.forEach((todo) => {
      let view = new TodoView(todo.id, todo.item, todo.completed);
      view.el.querySelector("span").addEventListener("click", toggleComplete.bind(null, view));
      view.el.querySelector("i").addEventListener("click", deleteTodo.bind(null, view));
    });
  });

function toggleComplete(view) {
  if (view.completed) {
    model
      .uncomplete(view.id)
      .then((response) => {
        view.uncomplete();
      })
      .catch((error) => {
        alert("Couldn't uncomplete todo because: " + error);
      });
  }
  else {
    model
      .complete(view.id)
      .then((response) => {
        view.complete();
      })
      .catch((error) => {
        alert("Couldn't complete todo because: " + error);
      });
  }
}

function deleteTodo(view) {

  if (confirm("Are you sure? You cannot undo this")) {
    model
      .destroy(view.id)
      .then((response) => {
        view.destroy();
      })
      .catch((error) => {
        alert("Couldn't delete todo because: " + error);
      });
  }
}
