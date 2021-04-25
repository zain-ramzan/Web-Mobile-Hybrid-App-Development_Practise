var list = document.getElementById('list');



function addTodo() {

    var input = document.getElementById('input')
    input.style.borderRadius = "5px 5px 5px"

    
    
    
    //Create List for Todos using JavaScript
    var li = document.createElement('li');
    var liText = document.createTextNode(input.value)
    li.appendChild(liText)
    li.style.color = 'white'
    li.style.backgroundColor = "green"
    li.style.width = "400px"
    li.style.borderRadius = "5px 5px 5px"


    
    input.value = "";
    
    //Create Delete button with list using JavaScript
    var delBtn = document.createElement('button');
    var delBtnText = document.createTextNode('DELETE');
    delBtn.setAttribute("onclick","deleList(this)")
    delBtn.appendChild(delBtnText);
    
    delBtn.style.margin = "0 5px"
    delBtn.style.borderRadius = "5px 5px 5px"


    //Create Edit Button with list using JavaScript
    var editBtn = document.createElement('button');
    var editBtnText = document.createTextNode("EDIT")
    editBtn.setAttribute("onclick","editList(this)")
    editBtn.appendChild(editBtnText)

    //Add some css
    editBtn.style.margin = "0 5px"
    editBtn.style.borderRadius = "5px 5px 5px"

    li.appendChild(editBtn);
    list.appendChild(li)







    li.appendChild(delBtn)
    list.appendChild(li);


    
    
    
    
    
}
 

function deleList(e){
    e.parentNode.remove();
}

function editList(e) {
    var val = prompt("Edit Your Name...",e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = val
}

function deleteAll() {
    list.innerHTML = ""
}