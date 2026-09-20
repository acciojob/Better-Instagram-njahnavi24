//your code here
let divs = document.querySelectorAll('.image')
divs.forEach(function(div){
	div.draggable = true
	div.addEventListener("dragstart",(e)=>{
		e.dataTransfer.setData("text",e.target.id)
	})
	div.addEventListener("dragover",(e)=>{
		e.preventDefault()
	})
	div.addEventListener("drop",(e)=>{
		e.preventDefault()
		let draggedId = e.dataTransfer.getData("text")
		let draggedDiv = document.getElementById(draggedId)
		let droppedDiv = e.target
		let temp = draggedDiv.style.backgroundImage
		draggedDiv.style.backgroundImage = droppedDiv.style.backgroundImage
		droppedDiv.style.backgroundImage = temp
	})
})