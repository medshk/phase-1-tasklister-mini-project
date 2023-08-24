document.addEventListener("DOMContentLoaded", (e) => {
  // your code here
  const form = document.getElementById("create-task-form");
  const list = document.getElementById("tasks");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const task = createTask(form[0].value);
    list.append(task);
  });

  const createTask = (text) => {
    const btn = document.createElement("button");
    btn.textContent = "X";
    const task = document.createElement("li");
    task.textContent = text;
    task.setAttribute("data-description", text);
    task.append(btn);
    btn.addEventListener("click", (e) => {
      list.childNodes.forEach((node) => {
        if (
          node.getAttribute &&
          node.getAttribute("data-description") === text
        ) {
          node.remove();
        }
      });
    });
    return task;
  };
});
