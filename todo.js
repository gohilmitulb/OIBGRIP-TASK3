document.querySelector('#push').onclick = function () {
    var newTaskInput = document.querySelector('#newtask input');
    var taskName = newTaskInput.value;

    if (taskName.length == 0) {
        alert("Please enter a task");
    } else {
        var pendingTasksContainer = document.querySelector('#pending-tasks');
        var tasksSmall = pendingTasksContainer.querySelector('small');
        if (tasksSmall) {
            tasksSmall.remove();
        }

        var taskElement = document.createElement('div');
        taskElement.classList.add('task');
        taskElement.innerHTML = `
            <span id="taskname">${taskName}</span>
            <button class="complete">&#10003;</button>
        `;
        pendingTasksContainer.appendChild(taskElement);

        var completeBtns = document.querySelectorAll('.complete');
        var completedTasksContainer = document.querySelector('#completed-tasks');

        for (var i = 0; i < completeBtns.length; i++) {
            completeBtns[i].onclick = function () {
                var taskElement = this.parentNode;
                var taskName = taskElement.querySelector('#taskname').textContent;

                var completedTaskElement = document.createElement('div');
                completedTaskElement.classList.add('task');
                completedTaskElement.innerHTML = `<span id="taskname" style="text-decoration: line-through;">${taskName}</span>`;
                completedTasksContainer.appendChild(completedTaskElement);
                taskElement.remove();

                var removeSmallCompleted = document.querySelector('#completed-tasks');
                var tasksSmall = removeSmallCompleted.querySelector('small');
                if (tasksSmall) {
                    tasksSmall.remove();
                }
            }
        }

        newTaskInput.value = "";
    }
}
