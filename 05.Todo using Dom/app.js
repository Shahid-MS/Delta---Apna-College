let add = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

add.addEventListener("click", function addTask() {
  if (inp.value == "") {
    return;
  }
  let liItem = document.createElement("li");
  let deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.classList.add("delete");
  liItem.innerText = inp.value;
  liItem.appendChild(deleteBtn);
  ul.appendChild(liItem);
  inp.value = "";
});

// let deleteBtns = document.querySelectorAll(".delete");
// for (delBtn of deleteBtns) {
//   delBtn.addEventListener("click", function deleteTask() {
//     let parent = this.parentElement;
//     // console.log(parent);
//     parent.remove();
//   });
// }

//event listener doest work for element created dynamically so we use event bubbling

ul.addEventListener("click", function deleteTask(e) {
  //   console.dir(e.target);
  //   //Give which one is clicked button or li
  //   console.dir(e.target.nodeName);
  //   console.log("button clicked");

  //delete when button is clicked not li

  if (e.target.nodeName == "BUTTON") {
    let listItem = e.target.parentElement;
    // console.log(listItem);
    listItem.remove();
  }
});
