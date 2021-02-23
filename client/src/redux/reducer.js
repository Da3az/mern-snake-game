import {initialState} from './states'


export let reducer = (state = initialState,action) => {
  switch (action.type){
    case 'UPDATE_SCORE':
      return {...state,score:action.payload}
    case 'RESET_SCORE':
      return {...state,score:0}
    case 'LEVEL_UP':
      if(action.payload){
      let newLevel = state.level+1
      return {...state,level:newLevel}
      }
      return{...state,level:1}
    case 'SETTING_PLAYER':
      return {...state,player:action.payload}
    case 'SCORE_BOARD':
      return  {...state,scoreBoard:action.payload}  
    case 'SCORE_BOARD_IND':
      return  {...state,scoreBoardInd:action.payload}    
    case 'SET_ALERT':
      return {...state,alert:action.payload}
    default:
      return state
    
  }
}
