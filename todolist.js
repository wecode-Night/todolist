const addBtn = document.getElementsByClassName("addButton")[0];
const todoInput = document.getElementsByClassName("todoInput")[0];
const dateInput = document.getElementsByClassName("todoInput")[1];

const checkInput = () => {
  if (!todoInput.value) {
    alert("할 일을 입력해주세요.");
  } else if (!dateInput.value) {
    alert("시간을 입력해주세요");
  } else {
    addTodo(todoInput.value, dateInput.value);
  }
};

const addTodo = (todo, date) => {
  const listWrapper = document.getElementsByClassName("listWrapper")[0];
  const addedList = document.createElement("div");
  const newTodo = `<input type="checkbox" class="checkbox" />
  <p class="todo">${todo}</p>
  <span class="time">${date}</span>
  <button class="deleteButton">삭제</button>`;

  addedList.className = "addedList";
  addedList.innerHTML = newTodo;

  // 삭제
  makeDeleteEvent(addedList);

  // 최종
  listWrapper.appendChild(addedList);

  // 초기화
  todoInput.value = "";
  dateInput.value = "";
};

const makeDeleteEvent = (addedList) => {
  const deleteBtn = addedList.querySelector(".deleteButton");
  deleteBtn.addEventListener("click", () => deleteTodo(addedList));
};

const deleteTodo = (addedList) => {
  addedList.remove();
};

addBtn.addEventListener("click", checkInput);

// 선언식
function test1() {
  console.log(123);
}

// 표현식
const test = function () {
  console.log(456);
};

// 화살표
