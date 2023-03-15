const winnerMsg = document.querySelector('[data-winning-menssage]');
const cellElements = document.querySelectorAll('[data-cell]');
const board = document.querySelector('[data-board]');

let isCircleTurn = true;
const winningCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const startGame = () => {
    cellElements.forEach(element => {
        element.classList.remove('x', 'circle');
        element.addEventListener('click', handleClick, {once:true});
    });

    swapTurn();
    winnerMsg.classList.remove("show-winning");
};

const endGame = (isDraw) => {
    if (isDraw) {
        winnerMsg.innerHTML += "<p>!!! Empate !!!</p>";
    }
    else{
        winnerMsg.innerHTML += (isCircleTurn ? "<p>!!! O Venceu !!!</p>" : "<p>!!! X Venceu !!!</p>");
    }
    winnerMsg.classList.add("show-winning");
}

const checkForWin = (currentPlayer) =>{
    return winningCombination.some(combination => {
        return combination.every(index => {
            return cellElements[index].classList.contains(currentPlayer);
        });
    });
};

const checkForDraw = () => {
    return [...cellElements].every(cell => {
        return cell.classList.contains("x") || cell.classList.contains("circle");
    });
};

const placeMark = (cell, classToAdd) => {
    cell.classList.add(classToAdd);
};

const swapTurn = () =>{
    isCircleTurn = !isCircleTurn;
    
    // Remove class atual
    board.classList.remove('x','circle');

    // Verifica o turno e add a class corespondente
    board.classList.add(isCircleTurn ? 'circle' : 'x');
};

const handleClick = (e) => {
    // Colocar a marca(X ou Circulo)
    const cell = e.target;
    const classToAdd = isCircleTurn ? 'circle': 'x';

    placeMark(cell, classToAdd);

    // Verificar por vitória
    const isWin  = checkForWin(classToAdd);

    if(isWin){
        endGame(false);
    }
    // Verificar por empate
    const isDraw = checkForDraw();

    if (isDraw) {
        endGame(true);
    }
    // Mudar o simbolo
    swapTurn();
};

startGame();