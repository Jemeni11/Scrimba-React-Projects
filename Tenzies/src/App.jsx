import { useState } from "react";
import { nanoid } from "nanoid";
import Die from "./Components/Die"

export default function App() {
  const [dice, setDice] = useState(allNewDice());

  function allNewDice(){
    const newArray = []
    for(let i = 0; i < 10; i++){
      newArray.push({
        value: Math.floor(Math.random() * 6) + 1,
        isHeld: false,
        id: nanoid()
      })
    }
    return newArray
  }

  function diceClick(num){
    setDice(dice.map(die => die === num ? {...num, isHeld: !num.isHeld} : die))
  }

  const diceElements = dice.map(
    num => (
      <Die
        key={num.id}
        value={num.value}
        handleClick={() => diceClick(num)}
        isHeldValue={num.isHeld}
      />
    )
  )

  function rollDice(){
    setDice(allNewDice())
  }

  return (
    <main>
      <div className="die-container">
        {diceElements}
      </div>
      <button
        className="roll-dice"
        onClick={rollDice}
      >
        {true ? "Roll": "Reset Game"}
      </button>
    </main>
  )
};
