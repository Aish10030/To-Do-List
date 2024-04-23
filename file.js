const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector(".todo-form input[type='text']");
const todoList = document.querySelector(".todo-list");

todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const newTodoText = todoInput.value;
    // console.log(newTodoText);

    const newLi = document.createElement("li");
    const newLiInnerHtml = `<span class="text">${newTodoText}</span>
    <div class="todo-buttons">
        <button class="todo-btn done">Done</button>
        <button class="todo-btn remove">Remove</button>
    </div>`;
    // console.log(newLiInnerHtml);

    newLi.innerHTML = newLiInnerHtml;
    // console.log(newLi);

    todoList.append(newLi);

    todoInput.value = "";
})

todoList.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove")) {
        const targetLi = e.target.parentNode.parentNode;
        // console.log(targetLi);
        targetLi.remove();
    }
    if (e.target.classList.contains("done")) {
        const liSpan = e.target.parentNode.previousElementSibling;
        // console.log(liSpan);
        liSpan.style.textDecoration = "line-through"
    }
})

