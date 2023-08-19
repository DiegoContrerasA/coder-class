import { createElement, useState } from 'react'
import './App.css'

const CounterButton = () => {
  const [count, setCount]  = useState(0)

  return (
  <button onClick={() => setCount((count) => count + 1)}>
    count is {count}
  </button>
  )
}

// const CreateCounterButton = () => {
//  createClass({
//   getInitialState () {
//     return {
//      counter: 0
//     }
//   },
//   handleCounter: function() {
//     this.state.counter = this.state.counter + 1
//   },
//   render: function() {
//     return createElement('button', {
//       onClick: this.handleCounter.bind(this)
//     }, `count is ${this.state.counter}`)
//   }
//  })
// }


//viejo 2014 - 2016
 const CreateCounterButton = () => {
     return createElement('button', {
      class:'calse-1',
      disabled: true,
      id: 'id-1',
     }, `text`)
 }

function App() {
  return (
    <>
      <div>
        <CounterButton />
      </div>
      <div>
        <CreateCounterButton />
      </div>
    </>
  )
}

export default App
