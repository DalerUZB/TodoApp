const cheked = document.querySelector('#cheked')
const lineH1 = document.querySelector('.lineH1')
const item = document.querySelector('.item')
const itemDivRemove = document.querySelector('.itemDivRemove')


function inputValueFunc() {
    let saved = inputValue.value
    if (inputValue.value === '') {
        alert('siz biron nima kiritmadingiz')
    } else {
        const dispalayDiv = document.querySelector('.dispalayDiv')

        const htmlTodo = `
            <div class="itemDivRemove">
            <div class="d-flex headerDiv">
                <div class="d-flex envelopDiv">
                    <h1 class="lineH1">${saved}</h1>
                    <span class="item"></span>
                </div>
                <div >
                    <img width="50px" height="50px" style="border-radius: 10px;" src="./assets/youAreChecked.png"
                        alt="cheked" id="cheked" class="chekedClass" onclick="toggleFun(this)">
    
                    <img width="50px" height="50px" src="./assets/242-2428212_png-file-delete-icon-png-small.png" alt=""
                        id="remove" class="removeClass" onclick="removeFunc(this)">
                </div>
            </div>            
        </div>`
        const fragment = document.createDocumentFragment()
        const div = document.createElement('div')
        div.innerHTML = htmlTodo
        fragment.append(div)
        dispalayDiv.append(fragment)
    }
    inputValue.value = ''


}

function toggleFun(one) {
    one.parentElement.children[0].classList.toggle('changed');
    one.parentElement.parentElement.parentElement.children[0].children[0].children[0].classList.toggle('accepted');
    one.parentElement.parentElement.parentElement.children[0].children[0].children[1].classList.toggle('forAbs');
}


function removeFunc(rem) {
    rem.parentElement.parentElement.parentElement.style.display = 'none'
}