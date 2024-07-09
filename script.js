let time = document.querySelector(".time")
let dayDate = document.querySelector(".day-date")
let addBtn = document.querySelector(".add-btn")
let itemList = document.querySelector(".item-list")
setInterval(() => {
    if (new Date().getHours() < 10 && new Date().getMinutes() < 10) {
        let clock = `0${new Date().getHours()}:0${new Date().getMinutes()}`
        time.innerHTML = clock
    }
    else if (new Date().getMinutes() < 10) {
        let clock = `${new Date().getHours()}:0${new Date().getMinutes()}`
        time.innerHTML = clock
    }
    else if (new Date().getHours() < 10) {
        let clock = `0${new Date().getHours()}:${new Date().getMinutes()}`
        time.innerHTML = clock
    }
    else {
        let clock = `${new Date().getHours()}:${new Date().getMinutes()}`
        time.innerHTML = clock
    }
    let date = `${new Date().toDateString()}`
    dayDate.innerHTML = date
}, 1000)
addBtn.disabled = true
let handleInput = () => {
    let todoItem = document.querySelector(".todo-item").value
    addBtn.disabled = todoItem == "" ? true : false
}
addBtn.addEventListener("click", () => {
    let todoItem = document.querySelector(".todo-item").value
    let newItem = document.createElement("li")
    newItem.setAttribute("class", "list-group-item new-item")
    itemList.append(newItem)
    let middle = document.createElement("div")
    middle.setAttribute("class", "middle")
    newItem.append(middle)
    let check = document.createElement("input")
    check.setAttribute("class", "form-check-input me-1")
    check.setAttribute("type", "checkbox")
    middle.append(check)
    let inputText = document.createElement("span")
    inputText.innerHTML = todoItem
    middle.append(inputText)
    let dashed = false
    check.addEventListener("click", () => {
        if (dashed == false) {
            inputText.classList.add("dash")
            dashed = true
        }
        else {
            inputText.classList.remove("dash")
            dashed = false
        }
    })
    let deleteBtn = document.createElement("button")
    deleteBtn.setAttribute("class", "btn btn-light delete-btn")
    newItem.append(deleteBtn)
    let trash = document.createElement("i")
    trash.setAttribute("class", "fa-regular fa-trash-can")
    deleteBtn.append(trash)
    deleteBtn.addEventListener("click", () => {
        newItem.remove()
        localStorage.removeItem(todoItem)
    })
})