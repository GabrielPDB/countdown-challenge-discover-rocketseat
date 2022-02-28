const Modal = {
  modal: document.querySelector('.modal-overlay'),
  open() {
    this.modal.classList.add('active')
  },
  close() {
    this.modal.classList.remove('active')
  }
}

const Counter = {
  remainingTime: 0,
  handleCounter() {
    this.remainingTime =
      new Date(2022, 03, 25, 10, 30, 30).getTime() - new Date().getTime()
    let days = Math.floor(this.remainingTime / 86400000)
    this.remainingTime = this.remainingTime - 86400000 * days
    let hours = Math.floor(this.remainingTime / 3600000)
    this.remainingTime = this.remainingTime - 3600000 * hours
    let minutes = Math.floor(this.remainingTime / 60000)
    this.remainingTime = this.remainingTime - 60000 * minutes
    let seconds = Math.floor(this.remainingTime / 1000)
    this.remainingTime = this.remainingTime - 1000 * seconds

    document.querySelector('span.days').innerHTML = days
    document.querySelector('span.hours').innerHTML = hours
    document.querySelector('span.minutes').innerHTML = minutes
    document.querySelector('span.seconds').innerHTML = seconds
  }
}

setInterval(Counter.handleCounter, 1000)

document.addEventListener('click', event => {
  if (event.target.classList[0] == 'modal-overlay') {
    Modal.close()
  }
})
