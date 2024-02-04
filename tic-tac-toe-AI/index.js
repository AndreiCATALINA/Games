let gameTurn = 0;
let currentPlayer;
let previousPlayer;
let board;

// this function will be called whenever the user changes
// the `select` input labeled `please select game mode`
function setGameMode(selectedValue) {
    switch (selectedValue) {
        case 'human-human':
            isPlayerXHuman = true;
            isPlayerYHuman = true;
            setHTMLvisibilityForInputGameMode(true);
            setHTMLvisibilityForInputHumanCoordinates(true);
            setHTMLvisibilityForInputAiCoordinatesInput(false);
            setHTMLvisibilityForButtonLabeledReset(true);
            displayMessage("Player X's turn");
            document.getElementById("human-human").disabled = true
            document.getElementById("human-ai").disabled = true
            document.getElementById("ai-ai").disabled = true
            gameTurn = 0
            break;
        case 'human-ai':
            isPlayerXHuman = true;
            isPlayerYHuman = false;
            setHTMLvisibilityForInputGameMode(true);
            setHTMLvisibilityForInputHumanCoordinates(true);
            setHTMLvisibilityForInputAiCoordinatesInput(false);
            setHTMLvisibilityForButtonLabeledReset(true);
            displayMessage("Player X's turn");
            document.getElementById("human-human").disabled = true
            document.getElementById("human-ai").disabled = true
            document.getElementById("ai-ai").disabled = true
            gameTurn = 0
            break;
        case 'ai-ai' :
            isPlayerXHuman = false;
            isPlayerYHuman = false;
            setHTMLvisibilityForInputGameMode(true);
            setHTMLvisibilityForInputHumanCoordinates(false);
            setHTMLvisibilityForInputAiCoordinatesInput(true);
            setHTMLvisibilityForButtonLabeledReset(true);
            displayMessage("Player X's turn");
            document.getElementById("human-human").disabled = true
            document.getElementById("human-ai").disabled = true
            document.getElementById("ai-ai").disabled = true
            gameTurn = 0
            break;
    }
    resetBoard();


}

// this function is called whenever the user presses the `enter`
// key in the input box labeled `enter coordinates`
// paramerter: input - the content of the input box
function processHumanCoordinate(input) {
    console.log(`'processHumanCoordinate('${input}')`);
    if (gameTurn % 2 === 0) {
        displayMessage("Player O's turn")
        currentPlayer = 'diamond';
    } else {
        displayMessage("Player X's turn")
        currentPlayer = 'pets';
    }

    let coordinates = extractCoordinates(input);
    board[coordinates.x][coordinates.y] = currentPlayer;

    const winningPlayer = getWinningPlayer(board);
    if (winningPlayer) {
        displayMessage('Player ' + currentPlayer + ' has won !');
        setHTMLvisibilityForInputHumanCoordinates(false);
        setHTMLvisibilityForInputAiCoordinatesInput(false);
        setHTMLvisibilityForButtonLabeledReset(true);
    }else if( gameTurn === 9){
        displayMessage("It's a tie!")
        setHTMLvisibilityForInputHumanCoordinates(false);
        setHTMLvisibilityForInputAiCoordinatesInput(false);
        setHTMLvisibilityForButtonLabeledReset(true);
    }

    gameTurn += 1;
    displayBoard(board);

    // TODO: add a message stating either
    // Player X's turn
    // Player O's turn
    // It's a tie
    // Player X won 
    // Player O won 

    // TODO: add conditions to hide the coordinates screen for 
    // the human player & show for the button to generate AI 
    // coordinates

   if(isPlayerYHuman === false){
 if(gameTurn % 2===0){
    setHTMLvisibilityForInputHumanCoordinates(true);
    setHTMLvisibilityForInputAiCoordinatesInput(false);
    }else{
    setHTMLvisibilityForInputHumanCoordinates(false);
    setHTMLvisibilityForInputAiCoordinatesInput(true)
    }
   }
   displayBoard(board)
   if (winningPlayer) {
    displayMessage('Player ' + currentPlayer + ' has won !');
    setHTMLvisibilityForInputHumanCoordinates(false);
    setHTMLvisibilityForInputAiCoordinatesInput(false);
    setHTMLvisibilityForButtonLabeledReset(true);
}else if( gameTurn === 9){
    displayMessage("It's a tie!")
    setHTMLvisibilityForInputHumanCoordinates(false);
    setHTMLvisibilityForInputAiCoordinatesInput(false);
    setHTMLvisibilityForButtonLabeledReset(true);
}
 }  

// this function is called whenever the user presses
// the button labeled `Generate AI coordinates`
function processAICoordinate() {
    console.log(`processAICoordinate()`);
    
    if(gameTurn%2 === 0){
        displayMessage("Player O's turn")
        currentPlayer = "diamond"
    }else{
        displayMessage("Player X's turn")
        currentPlayer = "pets"
    }
    getWinningPlayer(board);
    getUnbeatableAiCoordinates();
    displayBoard(board)
    

    if(isPlayerXHuman === true){
        setHTMLvisibilityForInputHumanCoordinates(true)
        setHTMLvisibilityForInputAiCoordinatesInput(false)
    }
    const winningPlayer = getWinningPlayer(board);
    if (winningPlayer) {
        displayMessage('Player ' + currentPlayer + ' has won !');
        setHTMLvisibilityForInputHumanCoordinates(false);
        setHTMLvisibilityForInputAiCoordinatesInput(false);
        setHTMLvisibilityForButtonLabeledReset(true);
    }else if( gameTurn === 9){
        displayMessage("It's a tie!")
        setHTMLvisibilityForInputHumanCoordinates(false);
        setHTMLvisibilityForInputAiCoordinatesInput(false);
        setHTMLvisibilityForButtonLabeledReset(true);
    }
}

// this function is called when the user clicks on 
// the button labeled `Restart Game`
function resetGame() {
    gameTurn = 0
    console.log(`resetGame()`);
    resetBoard()
    displayBoard(board)
    setHTMLvisibilityForInputGameMode(true)
    setHTMLvisibilityForInputHumanCoordinates(false)
    setHTMLvisibilityForInputAiCoordinatesInput(false)
    setHTMLvisibilityForButtonLabeledReset(false)
    document.getElementsByTagName("select")[0].value=""
    document.getElementById("human-human").disabled = false
    document.getElementById("human-ai").disabled = false
    document.getElementById("ai-ai").disabled = false
    displayMessage('')

}

// this function should change from A1..C3 to coordinates
// that are present in the `board` global variable
function extractCoordinates(input) {
    // this is a sample of what should be returned if the
    // the user had typed `A1`
    // you need to add the to also treat other cases (A2..C3)
    
    switch (input){

        case 'A1':
            if(board[0][0] !== ""){
             return displayMessage("Position is alerady taken on board")
            }
            if (gameTurn % 2 === 0) {
        board[0][0] = 'diamond';
    } else {
        board[0][0] = 'pets';
    }
            return { 
                x:0 , 
                y:0
            };
        case 'A2':
            if(board[0][1] !== ''){
                return displayMessage("Position is alerady taken on board")
              }
             if (gameTurn % 2 === 0) {
            board[0][1] = 'diamond';
         }   else {
            board[0][1] = 'pets';
          }
              return { 
                  x:0 , 
                  y:1
              };
        case 'A3' :
            if(board[0][2] !== ''){
               return displayMessage("Position is alerady taken on board")
              }
                if (gameTurn % 2 === 0) {
        board[0][2] = 'diamond';
    } else {
        board[0][2] = 'pets';
    }
              return { 
                  x:0 , 
                  y:2
              }; 
        case 'B1' :
            if(board[1][0] !== ''){
              return displayMessage("Position is alerady taken on board")
              }
                if (gameTurn % 2 === 0) {
        board[1][0] = 'diamond';
    } else {
        board[1][0] = 'pets';
    }
              return { 
                  x:1 , 
                  y:0
              };
        case 'B2' :
            if(board[1][1] !== ''){
               return displayMessage("Position is alerady taken on board")
              }
                if (gameTurn % 2 === 0) {
        board[1][1] = 'diamond';
    } else {
        board[1][1] = 'pets';
    }
              return { 
                  x:1 , 
                  y:1
              };
        case 'B3' :
            if(board[1][2] !== ''){
               return displayMessage("Position is alerady taken on board")
              }
                if (gameTurn % 2 === 0) {
        board[1][2] = 'diamond';
    } else {
        board[1][2] = 'pets';
    }
              return { 
                  x:1 , 
                  y:2
              };
        case 'C1' :
            if(board[2][0] !== ''){
               return displayMessage("Position is alerady taken on board")
              }
                if (gameTurn % 2 === 0) {
        board[2][0] = 'diamond';
    } else {
        board[2][0] = 'pets';
    }
              return { 
                  x:2 , 
                  y:0
              };
        case 'C2' :
            if(board[2][1] !== ''){
               return displayMessage("Position is alerady taken on board")
              }
                if (gameTurn % 2 === 0) {
        board[2][1] = 'diamond';
    } else {
        board[2][1] = 'pets';
    }
              return { 
                  x:2 , 
                  y:1
              }
        case 'C3' :
            if(board[2][2] !== ''){
               return displayMessage("Position is alerady taken on board")
              }
                if (gameTurn % 2 === 0) {
        board[2][2] = 'diamond';
    } else {
        board[2][2] = 'pets';
    }
              return { 
                  x:2 , 
                  y:2
              };
    }
    return displayMessage("Invalide coordonate :(");

}

// this function should return `X` or `O` or undefined (carefull it's not a string )
// based on interpreting the values in the board variable
function getWinningPlayer(board) {
    if(board[0][0]==="diamond" && board[1][0]==="diamond" && board[2][0]==="diamond"){
        return `X`;
    }
    if(board[0][0]==="pets" && board[1][0]==="pets" && board[2][0]==="pets"){
        return `O`;
    }
    if(board[0][1]==="diamond" && board[1][1]==="diamond" && board[2][1]==="diamond"){
        return `X`;
    }
    if(board[0][1]==="pets" && board[1][1]==="pets" && board[2][1]==="pets"){
        return `O`;
    }
    if(board[0][2]==="diamond" && board[1][2]==="diamond" && board[2][2]==="diamond"){
        return `X`;
    }
    if(board[0][2]==="pets" && board[1][2]==="pets" && board[2][2]==="pets"){
        return `O`;
    }
    if(board[0][0]==="diamond" && board[0][1]==="diamond" && board[0][2]==="diamond"){
        return `X`;
    }
    if(board[0][0]==="pets" && board[0][1]==="pets" && board[0][2]==="pets"){
        return `O`;
    }
    if(board[1][0]==="diamond" && board[1][1]==="diamond" && board[1][2]==="diamond"){
        return `X`;
    }
    if(board[1][0]==="pets" && board[1][1]==="pets" && board[1][2]==="pets"){
        return `O`;
    }
    if(board[2][0]==="diamond" && board[2][1]==="diamond" && board[2][2]==="diamond"){
        return `X`;
    }
    if(board[2][0]==="pets" && board[2][1]==="pets" && board[2][2]==="pets"){
        return `O`;
    }
    if(board[0][0]==="diamond" && board[1][1]==="diamond" && board[2][2]==="diamond"){
        return `X`;
    }
    if(board[0][0]==="pets" && board[1][1]==="pets" && board[2][2]==="pets"){
        return `O`;
    }
    if(board[0][2]==="diamond" && board[1][1]==="diamond" && board[2][0]==="diamond"){
        return `X`
    }
    if(board[0][2]==="pets" && board[1][1]==="pets" && board[2][0]==="pets"){
        return `O`
    }
    else{
        return undefined;
    }
}

function getUnbeatableAiCoordinates(){
  
    if(isPlayerXHuman === false && gameTurn === 0){
        board[Math.floor(Math.random() * 3)][Math.floor(Math.random() * 3)] = "diamond"
        gameTurn = 1
        return 0
    }

    if (gameTurn % 2 === 0){
        displayMessage("Player O's turn")
        currentPlayer = 'diamond'
        previousPlayer = 'pets'
    }
    else{
        displayMessage("Player X's turn")
        currentPlayer = 'pets'
        previousPlayer = 'diamond'
    }
    
    if((board[0][0] === previousPlayer && board[2][2] === previousPlayer && gameTurn === 3) || (board[0][2]===previousPlayer&& board[2][0]=== previousPlayer)){
        if(board[1][1] === currentPlayer && gameTurn === 3 && board[1][2] === ''){
            board[1][2] = currentPlayer;
        }else if(board[1][1] === currentPlayer && gameTurn === 3 && board[1][0] === ''){
            board[1][0] = currentPlayer
        }else if (board[1][1] === currentPlayer && gameTurn === 3 && board[0][1] === ''){
            board[0][1] = currentPlayer
        }else if(board[1][1] === currentPlayer && gameTurn === 3 && board[2][1] === ''){
            board[2][1] = currentPlayer
        }
    }else if(board[0][1] === previousPlayer && board[0][2] === previousPlayer && board[0][0]=== ''){
        board[0][0] = currentPlayer
    }else if(board[1][1] === previousPlayer && board[2][2] === previousPlayer && board[0][0]=== ''){
        board[0][0] = currentPlayer
    }else if(board[1][0] === previousPlayer && board[2][0] === previousPlayer && board[0][0]=== ''){
        board[0][0] = currentPlayer
    }else if(board[0][0] === previousPlayer && board[0][2] === previousPlayer && board[0][1]=== ''){
        board[0][1] = currentPlayer
    }else if(board[1][1] === previousPlayer && board[2][1] === previousPlayer && board[0][1]=== ''){
        board[0][1] = currentPlayer
    }else if(board[0][0] === previousPlayer && board[0][1] === previousPlayer && board[0][2]=== ''){
        board[0][2] = currentPlayer
    }else if(board[2][0] === previousPlayer && board[1][1] === previousPlayer && board[0][2]=== ''){
        board[0][2] = currentPlayer
    }else if(board[1][2] === previousPlayer && board[2][2] === previousPlayer && board[0][2]=== ''){
        board[0][2] = currentPlayer
    }else if(board[0][0] === previousPlayer && board[2][0] === previousPlayer && board[1][0]=== ''){
        board[1][0] = currentPlayer
    }else if(board[1][1] === previousPlayer && board[1][2] === previousPlayer && board[1][0]=== ''){
        board[1][0] = currentPlayer
    }else if(board[0][0] === previousPlayer && board[2][2] === previousPlayer && board[1][1]=== ''){
        board[1][1] = currentPlayer
    }else if(board[0][1] === previousPlayer && board[2][1] === previousPlayer && board[1][1]=== ''){
        board[1][1] = currentPlayer
    }else if(board[0][2] === previousPlayer && board[2][0] === previousPlayer && board[1][1]=== ''){
        board[1][1] = currentPlayer
    }else if(board[1][0] === previousPlayer && board[1][2] === previousPlayer && board[1][1]=== ''){
        board[1][1] = currentPlayer
    }else if(board[0][2] === previousPlayer && board[2][2] === previousPlayer && board[1][2]=== ''){
        board[1][2] = currentPlayer
    }else if(board[1][0] === previousPlayer && board[1][1] === previousPlayer && board[1][2]=== ''){
        board[1][2] = currentPlayer
    }else if(board[0][0] === previousPlayer && board[1][0] === previousPlayer && board[2][0]=== ''){
        board[2][0] = currentPlayer
    }else if(board[2][1] === previousPlayer && board[2][2] === previousPlayer && board[2][0]=== ''){
        board[2][0] = currentPlayer
    }else if(board[1][1] === previousPlayer && board[0][2] === previousPlayer && board[2][0]=== ''){
        board[2][0] = currentPlayer
    }else if(board[0][1] === previousPlayer && board[1][1] === previousPlayer && board[2][1]=== ''){
        board[2][1] = currentPlayer
    }else if(board[2][0] === previousPlayer && board[2][2] === previousPlayer && board[2][1]=== ''){
        board[2][1] = currentPlayer
    }else if(board[2][0] === previousPlayer && board[2][1] === previousPlayer && board[2][2]=== ''){
        board[2][2] = currentPlayer
    }else if(board[0][0] === previousPlayer && board[1][1] === previousPlayer && board[2][2]=== ''){
        board[2][2] = currentPlayer
    }else if(board[0][2] === previousPlayer && board[1][2] === previousPlayer && board[2][2]=== ''){
        board[2][2] = currentPlayer
    }else if(board[0][0] === previousPlayer && board[1][0] === previousPlayer && board[2][0]=== ''){
        board[2][0] = currentPlayer
    }else if(board[0][1] === previousPlayer && board[0][2] === previousPlayer && board[0][0]=== ''){
        board[0][0] = currentPlayer
    }else if(board[1][1] === previousPlayer && board[2][2] === previousPlayer && board[0][0]=== ''){
        board[0][0] = currentPlayer
    }else if(board[1][0] === previousPlayer && board[2][0] === previousPlayer && board[0][0]=== ''){
        board[0][0] = currentPlayer
    }else if(board[0][0] === previousPlayer && board[0][2] === previousPlayer && board[0][1]=== ''){
        board[0][1] = currentPlayer
    }else if(board[1][1] === previousPlayer && board[2][1] === previousPlayer && board[0][1]=== ''){
        board[0][1] = currentPlayer
    }else if(board[0][0] === previousPlayer && board[0][1] === previousPlayer && board[0][2]=== ''){
        board[0][2] = currentPlayer
    }else if(board[2][0] === previousPlayer && board[1][1] === previousPlayer && board[0][2]=== ''){
        board[0][2] = currentPlayer
    }else if(board[1][2] === previousPlayer && board[2][2] === previousPlayer && board[0][2]=== ''){
        board[0][2] = currentPlayer
    }else if(board[0][0] === previousPlayer && board[2][0] === previousPlayer && board[1][0]=== ''){
        board[1][0] = currentPlayer
    }else if(board[1][1] === previousPlayer && board[1][2] === previousPlayer && board[1][0]=== ''){
        board[1][0] = currentPlayer
    }else if(board[0][0] === previousPlayer && board[2][2] === previousPlayer && board[1][1]=== ''){
        board[1][1] = currentPlayer
    }else if(board[0][1] === previousPlayer && board[2][1] === previousPlayer && board[1][1]=== ''){
        board[1][1] = currentPlayer
    }else if(board[0][2] === previousPlayer && board[2][0] === previousPlayer && board[1][1]=== ''){
        board[1][1] = currentPlayer
    }else if(board[1][0] === previousPlayer && board[1][2] === previousPlayer && board[1][1]=== ''){
        board[1][1] = currentPlayer
    }else if(board[0][2] === previousPlayer && board[2][2] === previousPlayer && board[1][2]=== ''){
        board[1][2] = currentPlayer
    }else if(board[1][0] === previousPlayer && board[1][1] === previousPlayer && board[1][2]=== ''){
        board[1][2] = currentPlayer
    }else if(board[0][0] === previousPlayer && board[1][0] === previousPlayer && board[2][0]=== ''){
        board[2][0] = currentPlayer
    }else if(board[2][1] === previousPlayer && board[2][2] === previousPlayer && board[2][0]=== ''){
        board[2][0] = currentPlayer
    }else if(board[1][1] === previousPlayer && board[0][2] === previousPlayer && board[2][0]=== ''){
        board[2][0] = currentPlayer
    }else if(board[0][1] === previousPlayer && board[1][1] === previousPlayer && board[2][1]=== ''){
        board[2][1] = currentPlayer
    }else if(board[2][0] === previousPlayer && board[2][2] === previousPlayer && board[2][1]=== ''){
        board[2][1] = currentPlayer
    }else if(board[2][0] === previousPlayer && board[2][1] === previousPlayer && board[2][2]=== ''){
        board[2][2] = currentPlayer
    }else if(board[0][0] === previousPlayer && board[1][1] === previousPlayer && board[2][2]=== ''){
        board[2][2] = currentPlayer
    }else if(board[0][2] === previousPlayer && board[1][2] === previousPlayer && board[2][2]=== ''){
        board[2][2] = currentPlayer
    }else if(board[0][0] === previousPlayer && board[1][2] === previousPlayer && board[0][1]=== ''){
        board[0][1] = currentPlayer
    }else if(board[1][2] === previousPlayer && board[2][1] === previousPlayer && board[2][2]=== ''){
        board[2][2] = currentPlayer
    }else if(board[1][2]=== board[0][0]===previousPlayer){
        board[0][2]=currentPlayer
    }else if(board[1][1]===''){
        board[1][1] = currentPlayer;
    }else if(board[0][0]===''){
        board[0][0] = currentPlayer;
    }else if(board[2][0]===''){
        board[2][0] = currentPlayer;
    }else if(board[1][1]===''){
        board[1][1] = currentPlayer;
    }else if(board[2][2]===''){
        board[2][2] = currentPlayer;
    }else if(board[0][2]===''){
        board[0][2] = currentPlayer;
    }else if(board[0][1]===''){
        board[0][1] = currentPlayer;
    }else if(board[1][0]===''){
        board[1][0] = currentPlayer;
    }else if(board[1][2]===''){
        board[1][2] = currentPlayer;
    }else if(board[2][1]===''){
        board[2][1] = currentPlayer;
    }

    gameTurn +=1
 }
 