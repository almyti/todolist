const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask() {
    if (inputBox.value.trim() === "") {
        alert("Please insert first.");
    } else {
        const li = document.createElement("li");
        li.textContent = inputBox.value.trim();

        const span = document.createElement("span");
        span.innerHTML = "&#x000D7;";
        span.classList.add("close");

        span.onclick = function() {
            const listItem = this.parentElement;
            listContainer.removeChild(listItem);
        };
        li.appendChild(span);
        listContainer.appendChild(li);
        li.addEventListener("click", toggleTask); 
    }
    inputBox.value = "";
}

inputBox.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

function toggleTask() {
    this.classList.toggle("checked");
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
});
