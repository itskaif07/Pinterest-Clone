let dragArea = document.querySelector('#dragArea')
let fileInput = document.querySelector('#fileInput')

dragArea.addEventListener('click', function(){
    fileInput.click()
})

dragArea.addEventListener('dragover', function(e){
    e.preventDefault()
    dragArea.classList.add('bg-blue-400', 'border-solid', 'border-blue-600')
    dragArea.classList.remove('border-dashed')
})

dragArea.addEventListener('dragleave', function(e){
    e.preventDefault()
    dragArea.classList.remove('bg-blue-400', 'border-solid', 'border-blue-600')  
    dragArea.classList.add('border-dashed')
})

dragArea.addEventListener('drop', function(e){
    e.preventDefault()
    dragArea.classList.remove('bg-blue-400', 'border-solid', 'border-blue-600')  
    dragArea.classList.add('border-dashed')
})


let left1 = document.querySelector('#left1')
let left2 = document.querySelector('#left2')
let back1 = document.querySelector('#back1')
let back2 = document.querySelector('#back2')

back1.addEventListener('click', function(e){
    left1.classList.add('hidden')
    left2.classList.remove('hidden')
})

back2.addEventListener('click', function(e){
    left1.classList.remove('hidden')
    left2.classList.add('hidden')
})