import React from 'react'

const Food = ({food}) => {
  const style = {
    top:`${food[1]}%`,
    left:`${food[0]}%`
  }
  return (
    <div className="snake-food" style={style} ></div>
  )
}

export default Food
