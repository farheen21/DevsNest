
let outterBox = document.getElementsByClassName('main-box')[0];


  for(let i = 1 ; i < 169 ; i++) {
      let box = document.createElement('div');
      box.className = "box";
      outterBox.appendChild(box);
  }

  let boxes_update = document.querySelectorAll(".box");
  boxes_update.forEach((box) => {
      box.addEventListener('click' ,()=> {
          box.classList.toggle('white');
      });
  });



