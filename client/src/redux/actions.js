const UPDATE_SCORE = 'UPDATE_SCORE'
const RESET_SCORE = 'RESET_SCORE'
const LEVEL_UP = 'LEVEL_UP'
const SETTING_PLAYER = 'SETTING_PLAYER'
const SCORE_BOARD = 'SCORE_BOARD'
const SCORE_BOARD_IND = 'SCORE_BOARD_IND'
const SET_ALERT = 'SET_ALERT'


export function updateScore(score){
  return{
    type:UPDATE_SCORE,
    payload:score
  }
}

export function resetScore(){
  return{
    type:RESET_SCORE,
  }
}

export function levelUp(condition){
  return{
    type:LEVEL_UP,
    payload:condition
  }
}

export function scoreBoard(score){
  return{
    type:SCORE_BOARD,
    payload:score
  }
}

export function scoreBoardInd(score){
  return{
    type:SCORE_BOARD_IND,
    payload:score
  }
}

export function setAlert(alert){
  return{
    type:SET_ALERT,
    payload:alert
  }
}


export function settingPlayer(player){
  return{
    type:SETTING_PLAYER,
    payload:player
  }
}
