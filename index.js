
let btn =document.querySelector('.btn')

btn.addEventListener('click',()=>{
  let title= document.querySelector('.title').value 
let work =document.querySelector('.work').value 
  let CreateNotes=document.querySelector('.NotesContainer');
  if(title==='' || work===''){
    alert('Enter Valid Requirements')
  }
  return
  // console.log(work)
let div=document.createElement('div')
div.classList.add('col-md-4')


div.innerHTML= `
<div class="mb-3">
 <h3>${title}</h3>
 <textarea class="form-control " placeholder="Enter Your Work" name="" id="" rows="7">${work}</textarea>
 <button type = "button" class = "btn del" id = "delete-all-btn">
 <span><i class = "fas fa-trash"></i></span>
 Delete All
</button> 
</div>
`
div.querySelector('.del')
div.addEventListener('click',()=>{
 div.remove()
})

CreateNotes.append(div)
})