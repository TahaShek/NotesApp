// let  CreateCard=()=>{
//     let title =document.querySelector('.Name ').value;
//     let list=document.querySelector('.list ').value;
//     // let inputUrl= document.querySelector('.Url').value;

//     // console.log(CardName,inputUrl);
// // let CardObject=new Object();
// // CardObject.Title=title;
// // CardObject.ImageUrl=list;
// // console.log(CardObject)
// // CardObject.Id=Math.floor(Math.random()*1000);
// // CardObject.Points=0;
// // console.log(CardObject)
// let CardContainer = document.querySelector('.CardContainer');
// // let notes =document.createElement('div')
// CardContainer.innerHTML += `
{/* <div class="col-lg-3 mx-3 my-3">
<div class="card" style="width: 18rem;">

<div class="card-body ">
  <p>Name:${title}</p>
  <p>Points:${list}</p>
</div>
    </div>
</div> */}
// `
// // CardContainer.append(notes)
// }


let CreateNotes=()=>{
   let title=document.querySelector('.title').value 
   let work=document.querySelector('.Work').value
let notes=document.querySelector('.Notes')
let div =document.createElement('div')

let r=Math.floor(Math.random()*256)
let g=Math.floor(Math.random()*256)
let b=Math.floor(Math.random()*256)
// body.style.backgroundColor='red'
// notes.style.backgroundColor=`rgb(${r},${g},${b})`
div.style.backgroundColor=`rgb(${r},${g},${b})`
div.classList.add('col-md-9')
div.style.color='white'
div.style.width='500px'
div.innerHTML=`
  <div class="card-body my-3">
    <h5 class="card-title">Title:${title}</h5>
    <p class="card-text">Your Work:${work}</p>
    <button class="btn remove btn-outline-dark w-75 ">Remove</button>
  </div>

  `
div.querySelector('.remove')
div.addEventListener('click',()=>{
  notes.remove()  
})
notes.append(div)
}




