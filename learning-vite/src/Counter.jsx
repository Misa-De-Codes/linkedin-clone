import { useState } from "react"


const Counter = function Counter() {

    const [number, setNumber] = useState(0)

    const incNum = () => {
        setNumber(number + 1)
    }

    const decNum = () => {
        setNumber(number - 1)
    }

    const reNum = () => {
        setNumber(number * 0)
    }

    const lotNum = () => {
        setNumber(prev => prev + 1)
        setNumber(prev => prev + 1)
        setNumber(prev => prev + 1)
        setNumber(prev => prev + 1)
    }


    return (
      <>  
        <button className="text-3xl border-2 border-amber-800 bg-amber-300 rounded-3xl p-2 my-3" onClick={incNum}>add: {number}</button>
        <button className="text-3xl border-2 border-amber-800 bg-amber-300 rounded-3xl p-2 my-3" onClick={reNum}>reset: {number}</button>
        <button className="text-3xl border-2 border-amber-800 bg-amber-300 rounded-3xl p-2 my-3" onClick={decNum}>remove: {number}</button>
        <button className="text-3xl border-2 border-amber-800 bg-amber-300 rounded-3xl p-2 my-3" onClick={lotNum}>add a lot: {number}</button>
    </>
    )
}

export default Counter