document.addEventListener('DOMContentLoaded', () => {
  let menu = document.querySelectorAll('.nav li')
  for(let el of menu) {
    console.log(el)
    el.addEventListener('click', (event) => {
      event.target.classList.add('active')
      console.log(event.target)
    })
  }
})