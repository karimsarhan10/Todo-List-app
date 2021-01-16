// General Variables
// Selected Elements
const $form = document.getElementById('form')
const $input = document.getElementById('input')
const $todosUL = document.getElementById('todos')


// Main Event for submit todos
$form.addEventListener('submit', (e) => {
    e.preventDefault()

    addToDo()
})


// Functions & Events
function addToDo(todo) {
    let $todoText = $input.value

    if(todo) {
        $todoText = todo.text
    }

    if($todoText) {
        const $todoEl = document.createElement('li') 
        if(todo && todo.completed) {
            $todoEl.classList.add('completed')
        }

        $todoEl.innerHTML = $todoText

        //Event to add todos
        $todoEl.addEventListener('click' , () => $todoEl.classList.toggle('completed'))


        //Event to remove todos
        $todoEl.addEventListener('contextmenu' , (e) => {
            e.preventDefault()
            $todoEl.remove()
        })

        $todosUL.appendChild($todoEl)

        $input.value = ''
    }
    
}
