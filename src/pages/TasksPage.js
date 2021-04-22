import { useState, useEffect } from "react";
import Tasks from "../components/Tasks/Tasks";
import {
  fetchOpenTasks,
  fetchCompletedTasks,
  fetchPendingTasks,
  deleteTask,
  editTask,
} from "../services/TaskService";

const TaskPage = (props) => {
  /* ------- Open Tasks ------- */
  const [openTaskState, setTaskState] = useState([{}]);

  async function getData() {
    const data = await fetchOpenTasks();
    setTaskState(data);
  }

  /* ------ Pending Tasks ------- */
  const [pendingTasksState, setPendingTasksState] = useState([{}]);

  async function getPendingData() {
    const data = await fetchPendingTasks();
    setPendingTasksState(data);
  }

  /* ------ Completed Tasks ------- */
  const [closedTasks, setClosedtasks] = useState([{}]);

  async function getCompletedData() {
    const data = await fetchCompletedTasks();
    setClosedtasks(data);
  }
  useEffect(() => {
    getCompletedData() && getPendingData() && getData();
  }, []);

  /* -------- Delete Tasks --------*/

  async function handleDelete(task) {
    await deleteTask(task)
      .then(() => {
        getData() && getPendingData() && getCompletedData();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  /*--------- Edit tasks ----------*/
  async function updateTheTask(event, animal) {
    await editTask(event, animal)
      .then(() => {
        getData() && getPendingData() && getCompletedData();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  /* ------- form-toggles -------- */
  const [editFormVisible, setEditFormVisible] = useState(false);
  const [editPendFormVisible, setPendFormVisible] = useState(false);
  const [editDoneFormVisible, setDoneFormVisible] = useState(false);

  function toggleForm() {
    setEditFormVisible(!editFormVisible);
  }
  function togglePendingForm() {
    setPendFormVisible(!editPendFormVisible);
  }
  function toggleEditDoneForm() {
    setDoneFormVisible(!editDoneFormVisible);
  }
  return (
    <div className="page">
      <h1>Task Page</h1>
      {openTaskState.map((task, idx) => (
        <Tasks
          {...props}
          key={idx}
          task={task}
          toggleForm={toggleForm}
          handleDelete={handleDelete}
          update={updateTheTask}
          editFormVisible={editFormVisible}
          editDoneFormVisible={editDoneFormVisible}
          editPendFormVisible={editPendFormVisible}
          toggleEditDoneForm={toggleEditDoneForm}
          togglePendingForm={togglePendingForm}
          getData={getData}
          getPendingData={getPendingData}
          getCompletedData={getCompletedData}
          {...props}
        />
      ))}
    </div>
  );
};

export default TaskPage;
