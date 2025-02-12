const fs = require("fs"); //import the built-in fs module
const filePath = "./tasks.json"; // ./current directory create tasks.json

// Json is lightweight,textbased file which is easy to write for human and easy to parse for

const loadTasks = () => {
  try {
    const dataBuffer = fs.readFileSync(filePath);
    const dataJson = dataBuffer.toString();
    return JSON.parse(dataJson); // whatever the data structure is present in the file
  } catch (error) {
    return [];
  }
};
const saveTasks = (tasks) => {
  const dataJson = JSON.stringify(tasks);
  fs.writeFileSync(filePath, dataJson);
};
const addTask = (task) => {
  const tasks = loadTasks();
  const id = Date.now().toString();
  tasks.push({ id, task });
  saveTasks(tasks);
  console.log("Added Task");
};
const listTasks = () => {
  const tasks = loadTasks();
  tasks.forEach((element, index) => {
    console.log(`${index} and ${element.task}`);
  });
};

const removeTask = (argument) => {
  let remove = loadTasks();
  let needid = 0;
  remove.forEach((element) => {
    if (element.task === argument) {
      needid = element.id;
    }
  });
  console.log(needid);

  remove = remove.filter((t) => t.id !== needid);
  saveTasks(remove);
  console.log("Element is removed");
};

const command = process.argv[2]; //"add"
const argument = process.argv[3]; //"buy milk"

if (command === "add") {
  addTask(argument);
} else if (command === "list") {
  listTasks();
} else if (command === "remove") {
  removeTask(argument);
} else {
  console.log("Command Not Found!");
}
