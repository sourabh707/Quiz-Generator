let addMCQQuestion = document.getElementById('multiple');
let addParaQuestion = document.getElementById('paragraph');
let fileUploadQuestion = document.getElementById('fileUpload');
let mainContainer = document.getElementById("main");
let body1=document.getElementsByTagName('body');
let deleteButtons = document.getElementsByClassName("delete");
let shuffle=document.getElementById('shuffle');

let byebye=document.getElementsByClassName('option_delete');
shuffle.addEventListener('click',()=>
{
 console.log("clicked");
for (var i =  mainContainer .children.length; i >= 0; i--) {
  mainContainer .appendChild( mainContainer .children[Math.random() * i | 0]);
}
})
function setupDeleteButtons(){
  for(gone of deleteButtons){
    gone.addEventListener('click',(e)=>{
      if(e.target.closest('div.box').remove()){
      }
    })
  }
}


addParaQuestion.addEventListener('click',()=>{
  additional=document.createElement("div");
  additional.innerHTML=`
  <div class="box" >
      <input type="text" placeholder="Question">
      <div class="sample-text">
        Type your answer here
      </div>
      <div class="seperator">

      </div>
      <div class="question-control">
        <div class="required">
          <span>Required</span>
          <input type="checkbox" id="switch" class="checkbox"  />
          <label for="switch" class="toggle">
        </div>
        <div class="delete"><i class="fa fa-trash-o add" aria-hidden="true"></i></div>
      </div>
    </div>
  `
  mainContainer.appendChild(additional);
  setupDeleteButtons();
});


fileUploadQuestion.addEventListener('click',()=>{
  additional=document.createElement("div");
  additional.innerHTML=`
  <div class="box" >
      <input type="text" placeholder="Question">
      <div class="sample-text">
        File upload
      </div>
      <div class="seperator">
      </div>
      <div class="question-control">
        <div class="required">
          <span>Required</span>
          <input type="checkbox" id="switch" class="checkbox" />
          <label for="switch" class="toggle">
        </div>
        <div class="delete"><i class="fa fa-trash-o" aria-hidden="true"></i></div>
      </div>
    </div>
  `
  mainContainer.appendChild(additional);
  setupDeleteButtons();
});

addMCQQuestion.addEventListener('click',()=>{
    additional = document.createElement("div");
    additional.innerHTML=`
    <div class="box" id="checkones">
      <input  type="text" placeholder="Question">
      <div class="plus"><i class="fa fa-plus option" aria-hidden="true"></i></div>
      <div id="possible">
      <div class="indivisual"><input class="option-input" placeholder = "Option" style="width:50%;"><button class="option_delete">X</button></div>
       </div>
      <div class="seperator"></div>
      <div class="question-control">
        <div class="required">
          <span>Required</span>
          <input type="checkbox" id="switch" class="checkbox" />
          <label for="switch" class="toggle">
        </div>

        <div class="delete"><i class="fa fa-trash-o" aria-hidden="true"></i></div>
      </div>
    </div>`
  mainContainer.appendChild(additional);
  let possible=document.getElementById('possible');
let options=document.getElementsByClassName('option');
tog=document.getElementsByClassName('toggle');

for(option of options)
{
    option.addEventListener('click',(e)=>
    {
      cheating = document.createElement("div");
      cheating.innerHTML=` <input class="option-input" placeholder = "Option"><button class="option_delete";>X</button>`;
      console.log("created");
    e.target.appendChild(cheating);
    for(option_delete of byebye)
    {
       
          option_delete.addEventListener('click',(e)=>{
            if(e.target.closest('div').remove()){
              
            }
          })
    
        
    }
    })
}

  setupDeleteButtons();
 
})
let possible=document.getElementById('possible');
let options=document.getElementsByClassName('option');
let gayab=document.getElementsByClassName('indivisual');


