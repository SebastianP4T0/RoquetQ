export default function Modal() {
  const modalWrapper = document.querySelector('.modalWrapper')

  const cancelButton = document.querySelector('.button.cancel')
  cancelButton.addEventListener('click', close)
  // Acrescentar a classe active para modal
  function open() {
    modalWrapper.classList.add('active')
  }
  // Remover a classe active de modal
  function close() {
    modalWrapper.classList.remove('active')
  }

  return {
    open,
    close
  }
}
