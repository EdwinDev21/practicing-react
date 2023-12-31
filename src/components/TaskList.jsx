import CartTask from "./CartTask";
import { useContext } from "react";
import { TaskContext } from "../Context/TaskContext";

function TaskList() {
  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0) {
    return (
      <h1 className=" text-white text-2xl font-bold text-center">
        No Hay Tareas
      </h1>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-2">
      {tasks.map((task) => (
        <CartTask key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
