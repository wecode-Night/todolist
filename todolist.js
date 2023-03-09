const todoInput = document.getElementsByClassName("todoInput")[0];
const dateInput = document.getElementsByClassName("todoInput")[1];
const addBtn = document.getElementsByClassName("addButton")[0];

const checkInput = () => {
  // 유효성 검사
  if (!todoInput.value) {
    alert("할 일을 입력해주세요.");
  } else if (!dateInput.value) {
    alert("시간을 입력해주세요.");
  } else {
    addTodo(todoInput.value, dateInput.value);
  }
};

const addTodo = (todo, date) => {
  const listWrapper = document.getElementsByClassName("listWrapper")[0];
  const addedList = document.createElement("div");
  const newTodo = `<input class="checkbox" type="checkbox" />
  <p class="todo">${todo}</p>
  <span class="time">${date}</span>
  <button class="deleteButton">삭제</button>`;

  addedList.className = "addedList";
  addedList.innerHTML = newTodo;

  // 삭제 이벤트 추가
  makeDeleteEvent(addedList);

  // 최종 HTML 추가
  listWrapper.appendChild(addedList);

  // 값 초기화
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
