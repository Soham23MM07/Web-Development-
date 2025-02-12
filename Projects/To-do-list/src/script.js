document.addEventListener("DOMContentLoaded", () => {
  let Input = document.getElementById("Add-Input");
  let list = document.getElementById("todo-list");
  let button = document.getElementById("Add-Task");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach((element) => {
    render(element);
  });

  button.addEventListener("click", () => {
    let context = Input.value.trim();
    if (context === "") return;

    const newTask = {
      id: Date.now(),
      text: context,
      completed: false,
    };
    tasks.push(newTask);
    saveTask();
    render(newTask);
    Input.value = "";
  });

  function saveTask() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  function render(element) {
    let li = document.createElement("li");
    li.setAttribute("data.id", element.id);
    if (element.completed) {
      li.classList.add("completed");
    }
    li.innerHTML = `<span>${element.text}</span><button>delete</button>`;

    li.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") {
        return;
      }
      element.completed = !element.completed;
      li.classList.toggle("completed");
      saveTask();
    });

    li.querySelector("button").addEventListener("click", (e) => {
      e.stopPropagation();
      tasks = tasks.filter((t) => t.id !== element.id);
      li.remove();
      saveTask();
    });

    list.append(li);
  }
});
