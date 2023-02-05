// Example from https://beta.reactjs.org/learn

import { useEffect, useState } from 'react'
import dateStyle from "./date.module.css"

function GetDate() {
  const [date, setDate] = useState(new Date());
    
  useEffect(() => {
      const timer = setInterval(() => setDate(new Date()), 1000 )
      return function cleanup() {
          clearInterval(timer)
      }
  
  });

  return (
    <div className={dateStyle.dateWrapper}>
      <div>Сейчас: </div>
      <div>{date.toLocaleTimeString()}</div>
      <div className={dateStyle.right}>{date.toLocaleDateString()}</div>
    </div>
  )
}

export default function CurrentDate() {
  return <GetDate />
}