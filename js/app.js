let input = document.querySelector(".todo-input"),
  addTodoBtn = document.querySelector(".add__todo"),
  todoBoxItems = document.querySelector(".todo__items-box"),
  todoFunctional = document.querySelectorAll(".todo__functional-item"),
  todoClear = document.querySelector(".todo__functional-clear"),
  todoLeftItems = document.querySelector(".todo__items-left span"),
  todoItem = document.querySelectorAll(".todo-item"),
  todoItemEnd = document.querySelectorAll(".todo-item-circle");

let inputVal;

input.addEventListener("change", function () {
  inputVal = this.value;
  return inputVal;
});

addTodoBtn.addEventListener("click", () => {
  todoBoxItems.insertAdjacentHTML(
    "afterbegin",
    `<li class="todo-item">
    <label class="todo-circle__box">
      <input class="todo-circle__checkbox" type="checkbox" />
      <span class="custom__circle"></span>
      <label class="todo-item__text">${inputVal}</label>
    </label>
    <span class="cross"
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
      >
        <path
          fill="#494C6B"
          fill-rule="evenodd"
          d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
        />
      </svg>
    </span>
  </li>`
  );
  input.value = "";
  inputVal = "";
});
