let todo = [];
let req = prompt("Enter the request");
while (true) {
  if (req == "list") {
    for (task of todo) {
      console.log(task);
    }
  } else if (req == "add") {
    let add = prompt("Enter the task to be added");
    todo.push(add);
  } else if (req == "delete") {
    let idx = prompt("Enter the index of task to be deleted");
    todo.splice(idx, 1);
  } else if (req == "quit") {
    console.log("You quit");
    break;
  } else {
    alert("Wrong request");
  }
  req = prompt("Enter the request");
}
