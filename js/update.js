let update = document.querySelector('#update')
let message = document.querySelector('#message')
let updates = document.querySelector('#updates')
let messages = document.querySelector('#messages')

update.addEventListener('click', function(){
    messages.classList.add('hidden')
    updates.classList.remove('hidden')
})

message.addEventListener('click', function(){
    messages.classList.remove('hidden')
    updates.classList.add('hidden')
})