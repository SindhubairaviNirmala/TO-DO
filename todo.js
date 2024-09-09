var input=document.getElementById("input")
var list=document.getElementById("list")

function add(){
    var head=document.createElement("li")
    head.innerHTML=input.value +"<button onclick='dlt(event)' id='btn2'>✖</button>"
    list.append(head)
}

function dlt(event){
    event.target.parentElement.remove()
}

