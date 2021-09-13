let addMCQQuestion = document.getElementById('multiple');
let addParaQuestion = document.getElementById('paragraph');
let fileUploadQuestion = document.getElementById('fileUpload');
let mainContainer = document.getElementById("main");
let body1=document.getElementsByTagName('body');
let deleteButtons = document.getElementsByClassName("delete");
let shuffle=document.getElementById('shuffle');
let byebye=document.getElementsByClassName('option_delete');
// rearrange up
function upar(element)
{
  if(element.previousElementSibling)
  {
    element.parentNode.insertBefore(element, element.previousElementSibling);
  }
}
//rearrange down
function niche(element) {
  if(element.nextElementSibling)
  {   
    element.parentNode.insertBefore(element.nextElementSibling, element);
  }
}
function doSetup(){
  setupDeleteButtons();
  setupToggles();
}

let getSiblings = function (e) {
  let siblings = []; 
  if(!e.parentNode) {
      return siblings;
  }
  let sibling  = e.parentNode.firstChild;
  
  while (sibling) {
      if (sibling.nodeType === 1 && sibling !== e) {
          siblings.push(sibling);
      }
      sibling = sibling.nextSibling;
  }
  return siblings;
};

function setupDeleteButtons(){
  for(gone of deleteButtons){
    gone.addEventListener('click',(e)=>{
      if(e.target.closest('div.box').remove()){
      }
    })
  }
}
////////////////////////////////


function hasClass(element, className) {
  return (' ' + element.className + ' ').indexOf(' ' + className+ ' ') > -1;
}

function setupToggles(){
  let toggles = document.getElementsByClassName("toggle");
  let toggleHelpers = document.getElementsByClassName("toggleHelper");
 
  toggleHelpers[toggleHelpers.length - 1].addEventListener('click',(event)=>{
    event.stopPropagation();
  })
 
  toggles[toggles.length - 1].addEventListener('click',(e)=>{
    var currEl = e.target;
    let siblings = getSiblings(currEl);
    
    if(!siblings[0].checked){
      currEl.style.backgroundColor = 'rgb(111, 217, 243)';
      currEl.style.border = "2px solid rgb(111, 217, 243)";
      currEl.firstChild.nextElementSibling.style.left = "15px"
    }
    else{
      currEl.style.backgroundColor = 'white';
      currEl.style.border = " 2px solid gray";
      currEl.firstChild.nextElementSibling.style.left = "-5px"
    }
    siblings[0].checked = !siblings[0].checked;
  })
}

addParaQuestion.addEventListener('click',()=>{
  additional=document.createElement("div");
  additional.innerHTML=`
      <input type="text" placeholder="Question">
      <div class="sample-text">
        Type your answer here
      </div>
      <div class="seperator">

      </div>
      <div class="question-control">
        <button class="up" onclick="upar(parentNode.parentNode)"><i class="fa fa-arrow-up" aria-hidden="true"></i></button>
        <button class="down" onclick="niche(parentNode.parentNode)"><i class="fa fa-arrow-down" aria-hidden="true"></i></button>
        <div class="required">
          <span>Required</span>
          <input type="checkbox" id="switch" class="checkbox"  />
          <label for="switch" class="toggle">
          <label class="toggleHelper"></label>
        </label>
        </div>
        <div class="delete"><i class="fa fa-trash-o add" aria-hidden="true"></i></div>
      </div>
  `
  additional.classList.add("box");
  mainContainer.appendChild(additional);
  setupDeleteButtons();
  setupToggles();
});


fileUploadQuestion.addEventListener('click',()=>{
  additional=document.createElement("div");
  additional.innerHTML=`
    <input type="text" placeholder="Question">
    <div class="sample-text">
      Upload file
    </div>
    <div class="seperator">
    </div>
    <div class="question-control">
      <button class="up" onclick="upar(parentNode.parentNode)"><i class="fa fa-arrow-up" aria-hidden="true"></i></button>
      <button class="down" onclick="niche(parentNode.parentNode)"><i class="fa fa-arrow-down" aria-hidden="true"></i></button>
      <div class="required">
        <span>Required</span>
        <input type="checkbox" id="switch" class="checkbox" />
        <label for="switch" class="toggle">
        <label class="toggleHelper"></label>
      </label>
      </div>
      <div class="delete"><i class="fa fa-trash-o" aria-hidden="true"></i></div>
    </div>
  `
  additional.classList.add("box");
  mainContainer.appendChild(additional);
  setupDeleteButtons();
  setupToggles();
});

addMCQQuestion.addEventListener('click',()=>{
    additional = document.createElement("div");
    additional.innerHTML=`
      <input  type="text" placeholder="Question">
      <div class="plus"><i class="fa fa-plus option" aria-hidden="true"></i></div>
      <div id="possible">
        <div class="indivisual">
          <input class="option-input" placeholder = "Option"><button class="option_delete">X</button>
        </div>
      </div>
      <div class="seperator"></div>
      <div class="question-control">
        <button class="up" onclick="upar(parentNode.parentNode)"><i class="fa fa-arrow-up" aria-hidden="true"></i></button>
        <button class="down" onclick="niche(parentNode.parentNode)"><i class="fa fa-arrow-down" aria-hidden="true"></i></button>
        <div class="required">
          <span>Required</span>
          <input type="checkbox" id="switch" class="checkbox" />
          <label for="switch" class="toggle">
          <label class="toggleHelper"></label>
        </label>
        </div>

        <div class="delete"><i class="fa fa-trash-o" aria-hidden="true"></i></div>
      </div>`
      additional.classList.add("box");
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
    possible.appendChild(cheating);
    for(option_delete of byebye)
    {
      option_delete.addEventListener('click',(e)=>{
        e.target.closest('div').remove();
      })    
    }
  })
}


  setupDeleteButtons();
  setupToggles();
 
})
let possible=document.getElementById('possible');
let options=document.getElementsByClassName('option');
let gayab=document.getElementsByClassName('indivisual');



