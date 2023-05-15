const btn = document.querySelector('#btn')

const fn = (text) => {
  console.log(text)
}

// btn.addEventListener('click', () => fn('abc'))

btn.addEventListener('click', () => {
  fn('abc')
})
