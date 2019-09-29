document.getElementById('arrowsLink').addEventListener('click', (e) => {
  e.preventDefault()
  document.querySelector('.scroll-box').scrollIntoView({block: 'start', behavior: 'smooth'})
})