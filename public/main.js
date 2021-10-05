const update = document.querySelector('#update-button')
const deleteButton = document.querySelector('#delete-button')
const messageDiv = document.querySelector('#message')

function deleter(iname,iapt){
  deleteButton.addEventListener('click', _ => {
    fetch('/quotes', {
      method: 'delete',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: iname,
        apartment: iapt
      })
    })
      .then(res => {
        if (res.ok) return res.json()
      })
      .then(response => {
        if (response === 'No quote to delete') {
          messageDiv.textContent = 'Nothing to delete'
        } else {
          window.location.reload(true)
        }
      })
      .catch(console.error)
  })
}
