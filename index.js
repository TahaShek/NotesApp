
let btn =document.querySelector('.btn')

btn.addEventListener('click',()=>{
  let title= document.querySelector('.title').value 
let work =document.querySelector('.work').value 
  let CreateNotes=document.querySelector('.NotesContainer');
  console.log(work)
CreateNotes.innerHTML+= `
<div class="col-md-4">

<div class="mb-3">
 <h3>${title}</h3>
 <textarea class="form-control " placeholder="Enter Your Work" name="" id="" rows="5">${work}</textarea>
<button class="del">Delete</button>
</div>


</div>
`
CreateNotes.querySelector('.del')
CreateNotes.addEventListener('click',()=>{
  CreateNotes.remove()
})

})