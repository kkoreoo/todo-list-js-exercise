function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logTaskState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    markCompleted: function() {
      this.complete = true;
    }

  };
  return task;
};

// prints out the provided task's details


// marks the provided task as completed

// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");

const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

task1.logTaskState(); // Clean Cat Litter has not been completed
task1.markCompleted();
task1.logTaskState(); // Clean Cat Litter has been completed

console.log(tasks);