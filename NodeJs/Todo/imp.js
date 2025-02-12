const fs = require("fs");
const filePath = "./soham.json";

const localtask = () => {
  try {
    const dataBuffer = fs.readFileSync(filePath);
    const dataJson = dataBuffer.toString();
    return JSON.parse(dataJson);
  } catch {
    return [];
  }
};

const saveTask = (tasks) => {
  const dataJson = JSON.stringify(tasks);
  fs.writeFileSync(filePath, dataJson);
};
const addTask = (task) => {
  const tasks = localtask();
  const id = Date.now().toString();
  tasks.push({ id, task });
  saveTask(tasks);
};
const command = process.argv[2];
const argument = process.argv[3];

if (command === "add") {
  addTask(argument);
}
