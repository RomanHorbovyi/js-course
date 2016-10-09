var todoApp = (function() {
  function todoApp() {
    this.todoList = document.getElementById("todo-list");
    this.addBtn = document.getElementById("add-btn");
    this.todoInput = document.getElementById("todo-item-name");
    this.init = function () {
      setupEventHandlers.call(this);
    }
  }

  function setupEventHandlers() {
    var self = this;
    this.addBtn.onclick = function() {
      var listItem;
      var todo = self.todoInput.value;
      if (todo) {
        listItem = createTodo.call(self, todo);
        self.todoList.appendChild(listItem);
        self.todoInput.value = '';
      }
    };
  }

  function createTodo(todo) {
    var self = this;
    var listItem = document.createElement("li");
    var text = document.createTextNode(todo);
    var removeBtn = document.createElement("button");
    removeBtn.setAttribute("type", "button");
    var removeBtnText = document.createTextNode("X");
    removeBtn.appendChild(removeBtnText);
    removeBtn.onclick = function () {
      var listItem = this.parentElement;
      listItem.remove();
    }
    listItem.appendChild(text);
    listItem.appendChild(removeBtn);
    return listItem;
  }

  return new todoApp();
})();
