import { FC } from "react"
import { useState } from "react"

export const Test: FC = () => {
  const [text, setText] = useState('text');
  const onClickChangeText = () => {
    setText('success');
  }
  return (
    <div>
      <button onClick={onClickChangeText}>押下</button>
      <p>{text}</p>
    </div>
  )
}