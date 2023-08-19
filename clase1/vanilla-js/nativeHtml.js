const button1 = document.querySelector('.native-html1')
const span1 = button1.querySelector('.native-html-counter')

let initValue1 = Number(span1.innerHTML)

button1.addEventListener('click', () => {
    initValue1 = initValue1 + 1
    span1.innerHTML = initValue1
})

const button2 = document.querySelector('.native-html2')
const span2 = button2.querySelector('.native-html-counter')

let initValue2 = Number(span2.innerHTML)

button2.addEventListener('click', () => {
    initValue2 = initValue2 + 1
    span2.innerHTML = initValue2
})

const button3 = document.querySelector('.native-html3')
const span3 = button3.querySelector('.native-html-counter')

let initValue3 = Number(span3.innerHTML)

button3.addEventListener('click', () => {
    initValue3 = initValue3 + 1
    span3.innerHTML = initValue3
})