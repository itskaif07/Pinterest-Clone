let cr = document.querySelector('#cr')
let sv = document.querySelector('#sv')
let created = document.querySelector('#created')
let saved = document.querySelector('#saved')

cr.addEventListener('click', function(){
    created.classList.remove('hidden')
    saved.classList.add('hidden')
})

sv.addEventListener('click', function(){
    saved.classList.remove('hidden')
    created.classList.add('hidden')
})