const newTaskModal = document.getElementById("modalNewTask");
const newTaskBtn = document.getElementById("newTask");
const newTaskClose = document.querySelector("#modalNewTask .close");

newTaskBtn.onclick = () => {
  newTaskModal.style.display = "block";
};

newTaskClose.onclick = () => {
  newTaskModal.style.display = "none";
};