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
// <div class="col-lg-3 mx-3 my-3">
// <div class="card" style="width: 18rem;">

// <div class="card-body ">
//   <p>Name:${title}</p>
//   <p>Points:${list}</p>
// </div>
//     </div>
// </div>
// `
// // CardContainer.append(notes)
// }

let CreateNotes=()=>{
   let title=document.querySelector('.title').value 
   let work=document.querySelector('.Work').value
let notes=document.querySelector('.Notes')
notes.innerHTML += `
<div class="col-md-4 col-sm-6 content-card">
      <div class="card-big-shadow">
          <div class="card card-just-text">
              <div class="content">
                  <h4 class="title">asdas</h4>
                  <p class="description">sadas </p>
              </div>
          </div> <!-- end card -->
      </div>
  </div>
`
}




