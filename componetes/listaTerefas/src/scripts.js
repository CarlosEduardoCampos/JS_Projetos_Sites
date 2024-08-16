const tasksContainer = document.querySelector('.tasks-container');
const inputElement = document.querySelector('.new-task-input');
const addTaskButton = document.querySelector('.new-task-button');

// Valida se o input esta vazio e a diciona uma borda vermelha se true
const validateInput = () => inputElement.value.trim().length > 0;

// Add uma classe de erro no input ou cria uma nova tarefa na lista
const handleAddTask = () => {

    // Se o input estiver vazio add o class error
    if(!validateInput()){
        inputElement.classList.add('error');
        return inputElement;
    }

    // Cria um novo item
    createItem(inputElement.value.trim().toLowerCase());

    // Limpa o input
    inputElement.value = '';

    // Add a nova lista de tarefas no localStorage
    updateLocalStorage();
};

// Remove a tarefa que foi selecionada
const handleDeleteClick = (taskItemContainer, taskContent) => {
    const tasks = tasksContainer.childNodes;

    for (const task of tasks){
        if (task.firstChild === taskContent)
        {
            taskItemContainer.remove();
        }
    }

    updateLocalStorage()
}

// Adiciona a class completed na tarefa que foi selecionada
const handleClick = (taskContent) => {
    const tasks = tasksContainer.childNodes;

    for (const task of tasks){
        if (task.firstChild === taskContent)
        {
            task.firstChild.classList.toggle('completed');
        }
    }

    updateLocalStorage();
}

// Se o input tiver conteudo remove a class error
const handleInputChange = () => {
    if(validateInput()){
        inputElement.classList.remove('error');
        return inputElement;
    }
};

const createItem = (nameTask, isCompleted=false) => {
    // Cria um novo elemento onde ira mostrar a lista de tarefas
    // Resultado -> <div class="task-item"> </div>
    const taskItemContainer = document.createElement('div')
    taskItemContainer.classList.add('task-item');

    // Cria um paragrafo que recebe o nome da tarefa
    // Resultado -> <p> Nome da tarefa </p>
    const taskContent = document.createElement('p');
    taskContent.innerText = nameTask; 

    // Add a class 'comtend' se o parametro for true
    if(isCompleted){
        taskContent.classList.add('completed');
    }

    // Espera um evento de click no nome da tarefa
    taskContent.addEventListener("click", () => handleClick(taskContent))

    // Cria icone de lixeira
    // Resultado -> <i class='far fa-trash-alt'></i>
    const deleteItem = document.createElement('i');
    deleteItem.classList.add('fa');
    deleteItem.classList.add('fa-trash-o');

    // Espera um evento de click no botão 'lixeira';
    deleteItem.addEventListener("click", () => handleDeleteClick(taskItemContainer, taskContent));

    // Criam o item tarefa
    // Resultado -> <div class="task-item"> <p> Nome da tarefa </p> <i class='far fa-trash-alt'></i> </div>
    taskItemContainer.appendChild(taskContent);
    taskItemContainer.appendChild(deleteItem);

    // Add o elemento na lista
    tasksContainer.appendChild(taskItemContainer);
}

// Salva no localStorange do navegado um Array com as informações das tarefas
const updateLocalStorage = () => {
    // Pega todas as tarefas dentro da tasks-container
    const tasks = tasksContainer.childNodes;

    // Percorre a lista de tarefas tranformando as informações em um Array
    const localStorageTasks = [... tasks].map((task) =>
    {
        const content = task.firstChild;

        if(content != null)
        {
            const isCompleted = content.classList.contains("completed");
            return {description: content.innerText, isCompleted};   
        }
    });

    // Tranforma o array de tarefa em json e coloca ele no localStorange do navegador
    localStorage.setItem('tasks', JSON.stringify(localStorageTasks));
}

// Recupera do localStorange uma lista de tarefas previamente registrada
const refreshTasksUsingLocalStarage = () => {
    // recupera as tarefas
    const tasksFromLocalStorange  = JSON.parse(localStorage.getItem('tasks'));
    
    // finalizar a função caso não exita tarefas
    if (!tasksFromLocalStorange) return; 

    // Recria a lista de tarefas
    for(const item of tasksFromLocalStorange){
        createItem(item.description, item.isCompleted);
    }
}

// Recria a lista de tafas cadastrada anteriomente
refreshTasksUsingLocalStarage();

// Espera um evento de click no botão 'Adicionar'
addTaskButton.addEventListener("click", () => handleAddTask());

// Espera um evento de alteração no input
inputElement.addEventListener("change", () => handleInputChange());
