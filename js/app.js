let input = document.querySelector(".todo-input"),
  addTodoBtn = document.querySelector(".add__todo"),
  todoBoxItems = document.querySelector(".todo__items-box"),
  todoFunctional = document.querySelectorAll(".functional-radio"),
  todoClear = document.querySelector(".todo__functional-clear"),
  todoLeftItems = document.querySelector(".todo__items-left span");

let todoItem;
let inputVal;
let functionalStatus = "active";
let todoLi;
let itemsLeft = 5;

input.addEventListener("change", function () {
  inputVal = this.value;
  return inputVal;
});
addTodoBtn.addEventListener("click", (e) => {
  todoLi = document.createElement("li");
  todoLi.innerHTML = `<label class="todo-circle__box">
  <input class="todo-circle__checkbox" type="checkbox" />
  <span class="custom__circle complete__todo"></span>
  <label class="todo-item__text">${inputVal}</label>
</label>
<span class="cross">
  <img class="cross__img" src="./images/icon-cross.svg" alt="">
</span>`;
  todoLi.className = `todo-item`;
  todoLi.classList.add(functionalStatus);
  todoLi.dataset.functional = functionalStatus;
  if (inputVal != 0) {
    todoBoxItems.append(todoLi);
    input.value = "";
    inputVal = "";
    items(++itemsLeft);
  } else {
    input.value = "";
    inputVal = "";
  }
  functionalTracker();
});
document.addEventListener("click", (e) => {
  const clicked = e.target;
  let todoLiClosest = clicked.closest(".todo-item");
  if (
    clicked.classList.contains("custom__circle") &&
    !clicked.classList.contains("add__todo")
  ) {
    if (todoLiClosest.dataset.functional != "completed") {
      todoLiClosest.dataset.functional = "completed";
      items(--itemsLeft);
    } else {
      todoLiClosest.dataset.functional = functionalStatus;
      items(++itemsLeft);
    }
    functionalTracker();
  }
  if (clicked.classList.contains("cross__img")) {
    todoLiClosest.remove();
    if (todoLiClosest.dataset.functional == "active") {
      items(--itemsLeft);
    }
  }
});
function functionalTracker() {
  todoItem = document.querySelectorAll(".todo-item");
  todoItem.forEach((e) => {
    if (~e.className.split(" ").indexOf(e.dataset.functional)) {
      return;
    } else {
      e.className = `todo-item ${e.dataset.functional}`;
    }
  });
}
function functionalCheckbox() {
  for (let functionalItem of todoFunctional) {
    functionalItem.addEventListener("click", (f) => {
      let clickedFunctional = f.target;
      todoItem = document.querySelectorAll(".todo-item");
      todoItem.forEach((e) => {
        if (
          ~e.className.split(" ").indexOf(clickedFunctional.dataset.functional)
        ) {
          e.style.display = "block";
        } else {
          e.style.display = "none";
        }
      });
    });
  }
}
function items(value) {
  todoItem = document.querySelectorAll(".todo-item");
  if (todoItem.length == 0 || todoItem.length >= 1) {
    todoLeftItems.innerHTML = 0;
  }
  todoItem.forEach((e) => {
    if (e.dataset.functional == "active") {
      todoLeftItems.innerHTML = value;
    }
  });
}
function clearCompleted() {
  todoClear.addEventListener("click", (e) => {
    todoItem = document.querySelectorAll(".todo-item");
    todoItem.forEach((e) => {
      if (e.dataset.functional == "completed") {
        e.remove();
      }
    });
  });
}
clearCompleted();
functionalCheckbox();
