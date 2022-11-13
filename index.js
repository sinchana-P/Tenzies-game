// import Confetti from "react-confetti"

function Die(props) {
    console.log(props.isHeld)
    const styles = {
        backgroundColor : props.isHeld ? "#59E391" : "rgba(245, 245, 245, 0.463)"
    }
    return(
        <div className= "die-face die-num" style={styles} id={props.id} onClick={props.holdDice} >{props.value}</div>
    )
}

function App() {

    const dieArray = [
        {
            id:1,
            isHeld: false,
            dieValue: Math.round(Math.random() * 6)
        },
        {
            id:2,
            isHeld: false,
            dieValue: Math.round(Math.random() * 6) 
        },
        {
            id:3,
            isHeld: false,
            dieValue: Math.round(Math.random() * 6)
        },
        {
            id:4,
            isHeld: false,
            dieValue: Math.round(Math.random() * 6)
        },
        {
            id:5,
            isHeld: false,

            dieValue: Math.round(Math.random() * 6)
        },
        {
            id:6,
            isHeld: false,
            dieValue: Math.round(Math.random() * 6)
        },
        {
            id:7,
            isHeld: false,
            dieValue: Math.round(Math.random() * 6)
        },
        {
            id:8,
            isHeld: false,
            dieValue: Math.round(Math.random() * 6)
        },
        {
            id:9,
            isHeld: false,
            dieValue: Math.round(Math.random() * 6)
        },
        {
            id:10,
            isHeld: false,
            dieValue: Math.round(Math.random() * 6)
        }
    ]
 
    const [die, setDie] = React.useState(dieArray)
    console.log(die)

    const [heldDie, setHeldDie] = React.useState(0)

    const [tenzies, setTenzies] = React.useState(false)

    function roll(){
        if(tenzies){
            setDie(dieArray)
            setHeldDie(0)
            setTenzies(false)   
        }

        console.log("Die rolled")

         setDie(oldDie => oldDie.map(singleDie => {
            return {
                ...singleDie,
                dieValue : singleDie.isHeld ? singleDie.dieValue : Math.round(Math.random() * 6)            
            }
        }
        ))
    }  

    function holdDice (id, value) {
        console.log(id)
        console.log(value)

        setHeldDie(value)
        console.log(heldDie)
 
        setDie(oldDie => oldDie.map(singleDie => {
           return singleDie.id === id ? 
               {...singleDie, isHeld: !singleDie.isHeld } : 
               singleDie          
        }
     ))
     }

     React.useEffect(() => {
        console.log(heldDie)
        const allHeld = die.every(die => die.isHeld)
        const allSameValue = die.every(die => die.dieValue === heldDie)

        if(allHeld && allSameValue){
            setTenzies(true)
            console.log("u won!")
        }
    },[die])

    if(tenzies){
        confirm("You Won!, Congratulations 🎉")
      
    }

                
      const displayDie = die.map(eachDie => {
         return <Die key={eachDie.id} id={eachDie.id} value={eachDie.dieValue} isHeld={eachDie.isHeld} holdDice={() => holdDice(eachDie.id, eachDie.dieValue)}/>
      })    
    
      return (
        <main >
            <h2 className="title">Tenzies</h2>
            <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="die-container">
                {displayDie}
            </div>
            <button className="roll-dice" id="btn" type="submit" onClick={roll} tenzies={tenzies}>{tenzies ? "New Game" : "ROLL"}</button>
        </main>

      )     

}
ReactDOM.render(<App/>, document.getElementById("root"))












// ALTERNATE SOLUTION :

/* pseudo code :
        new array to hold me numbers
        loop 10 times
            push a random number from 1-6 to my array
        return array
*/

// function allNewDice() {
//     const newDice = []
//     for (let i = 0; i < 10; i++) {
//         newDice.push(Math.ceil(Math.random() * 6))
//     }
//     return newDice
// }

/*


export default function App() {
/**
 * Challenge: Create a `Roll Dice` button that will re-roll
 * all 10 dice
 * 
 * Clicking the button should generate a new array of numbers
 * and set the `dice` state to that new array (thus re-rendering
 * the array to the page)
 

 const [dice, setDice] = React.useState(allNewDice())
    
 function allNewDice() {
     const newDice = []
     for (let i = 0; i < 10; i++) {
         newDice.push(Math.ceil(Math.random() * 6))
     }
     return newDice
 }
 
 function rollDice() {
     setDice(allNewDice())
 }
 
 const diceElements = dice.map(die => <Die value={die} />)
 
 return (
     <main>
         <div className="dice-container">
             {diceElements}
         </div>
         <button className="roll-dice" onClick={rollDice}>Roll</button>
     </main>
 )
}

*/

/* 
import React from "react"
import Die from "./Die"
import {nanoid} from "nanoid"

export default function App() {
/**
 * Challenge: Update the array of numbers in state to be
 * an array of objects instead. Each object should look like:
 * { value: <random number>, isHeld: false }
 * 
 * Making this change will break parts of our code, so make
 * sure to update things so we're back to a working state


 const [dice, setDice] = React.useState(allNewDice())
    
 function allNewDice() {
     const newDice = []
     for (let i = 0; i < 10; i++) {
         newDice.push({
             value: Math.ceil(Math.random() * 6), 
             isHeld: false,
             id: nanoid()
         })
     }
     console.log(newDice)
     return newDice
 }
 
 function rollDice() {
     setDice(allNewDice())
 }
 
 const diceElements = dice.map(die => <Die key={die.id} value={die.value} />)
 
 return (
     <main>
         <div className="dice-container">
             {diceElements}
         </div>
         <button className="roll-dice" onClick={rollDice}>Roll</button>
     </main>
 )
}
*/