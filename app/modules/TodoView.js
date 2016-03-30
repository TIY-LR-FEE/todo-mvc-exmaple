class TodoView {
  constructor(id, item, completed = false) {
    this.id = id;
    this.item = item;
    this.completed = completed;
    this.el;

    this.render();
  }

  render() {
    // <li class="completed">
    //    <span>Item Here</span>
    //    <i class="fa fa-times"></i>
    //  </li>
    let li = document.createElement("li");

    let span = document.createElement("span");
    span.textContent = this.item;
    li.appendChild(span);

    let i = document.createElement("i");
    i.classList.add("fa");
    i.classList.add("fa-times");
    li.appendChild(i);

    if (this.completed) {
      li.classList.add("completed");
    }

    this.el = li;
    document.querySelector("#todos").appendChild(li);
  }

  complete() {
    this.el.classList.add("completed");
    this.completed = true;
  }

  uncomplete() {
    this.el.classList.remove("completed");
    this.completed = false;
  }

  destroy() {
    document.querySelector("#todos").removeChild(this.el);    
  }
}

export default TodoView;
