import './style.css'

const HTML_ELEMENT = `
<div class="card">
  <button id="counter" type="button"></button>
</div>
`

function setupCounter(element, initValue = 0) {
  let counter = initValue

  const setCounter = (count) => {
    counter = count
    element.innerHTML = `js counter ${counter}`
  }

  element.addEventListener('click', () =>
   setCounter(counter + 1)
   )

  setCounter(counter)
}


document.querySelector('#app').innerHTML = HTML_ELEMENT

const button = document.querySelector('#counter')

setupCounter(button, 3)




