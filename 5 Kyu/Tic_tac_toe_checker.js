function isSolved(board) {
  for (const index in board){
    if (board[index].every(e=>e===1)){
      return 1
    }else if (board[index].every(e=>e===2)){
      return 2
    }else if (board[0][index] === 1 && board[1][index] === 1 && board[2][index] === 1){
      return 1
    }else if (board[0][index] === 2 && board[1][index] === 2 && board[2][index] === 2){
      return 2
    }else if (board[0][0] === 1 && board[1][1] === 1 && board[2][2]===1){
      return 1
    }else if (board[0][2] === 1 && board[1][1] === 1 && board[2][0]===1){
      return 1
    }else if (board[0][0] === 2 && board[1][1] === 2 && board[2][2]===2){
      return 2
    }else if (board[0][2] === 2 && board[1][1] === 2 && board[2][0]===2){
      return 2
    } else if(!board[0].includes(0) && !board[1].includes(0) && !board[2].includes(0)){
      return 0
    } else if(index==='2'){
      return -1
    } 
  } 
}