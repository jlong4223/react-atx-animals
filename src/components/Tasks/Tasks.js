import { useState, useEffect } from "react";
import styled from "styled-components";
import {
  fetchOpenTasks,
  fetchCompletedTasks,
  fetchPendingTasks,
  deleteTask,
  editTask,
} from "../../services/TaskService";
import "./Tasks.css";
import EditTaskForm from "./EditTaskForm";
import TasksModal from "./TasksModal";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin: 10px 0;
  padding: 10px;

  button {
    margin: 3px 0;
  }
`;

const Tasks = (props) => {
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
  //   TODO move the mapping of each styled div to taskpage or move the content inside styled div to an even lower component?
  //   TODO figure out form toggle and why it toggles all of them
  return (
    <div id="topDiv" style={{ display: "flex" }}>
      <div style={{ width: 300, margin: 20 }}>
        <h3>Open Tasks</h3>
        {openTaskState
          .map((task, idx) => (
            <StyledDiv key={idx}>
              {editFormVisible ? (
                <>
                  <div>
                    <EditTaskForm
                      toggleForm={toggleForm}
                      task={task}
                      update={updateTheTask}
                      getData={getData}
                      getPendingData={getPendingData}
                      getCompletedData={getCompletedData}
                      {...props}
                    />
                    <div>
                      <button
                        className="btn btn-secondary"
                        onClick={toggleForm}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <h6>Name: {task.personName}.</h6>
                  <h6>Pet: {task.animalName} </h6>
                  <h6>Contact: {task.contactInfo}</h6>
                  <h6>Status: {task.status}</h6>
                  <button className="btn btn-secondary" onClick={toggleForm}>
                    Edit
                  </button>
                  <TasksModal task={task} />
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(task)}
                  >
                    Delete
                  </button>
                </>
              )}
            </StyledDiv>
          ))
          .reverse()}
      </div>
      <div style={{ width: 300, margin: 20 }}>
        <h3>Pending Tasks</h3>
        {pendingTasksState
          .map((task, idx) => (
            <StyledDiv key={idx}>
              {editPendFormVisible ? (
                <>
                  <div>
                    <EditTaskForm
                      toggleForm={togglePendingForm}
                      task={task}
                      update={updateTheTask}
                      getData={getData}
                      getPendingData={getPendingData}
                      getCompletedData={getCompletedData}
                      {...props}
                    />
                    <div>
                      <button
                        className="btn btn-secondary"
                        onClick={togglePendingForm}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <h6>Name: {task.personName}.</h6>
                  <h6>Pet: {task.animalName} </h6>
                  <h6>Contact: {task.contactInfo}</h6>
                  <h6>Status: {task.status}</h6>
                  <button
                    className="btn btn-secondary"
                    onClick={togglePendingForm}
                  >
                    Edit
                  </button>
                  <TasksModal task={task} />
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(task)}
                  >
                    Delete
                  </button>
                </>
              )}
            </StyledDiv>
          ))
          .reverse()}
      </div>
      <div style={{ width: 300, margin: 20 }}>
        <h3>Closed Tasks</h3>
        {closedTasks
          .map((task, idx) => (
            <StyledDiv key={idx}>
              {editDoneFormVisible ? (
                <>
                  <div>
                    <EditTaskForm
                      toggleForm={toggleEditDoneForm}
                      task={task}
                      update={updateTheTask}
                      getData={getData}
                      getPendingData={getPendingData}
                      getCompletedData={getCompletedData}
                      {...props}
                    />
                    <div>
                      <button
                        className="btn btn-secondary"
                        onClick={toggleEditDoneForm}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <h6>Name: {task.personName}.</h6>
                  <h6>Pet: {task.animalName} </h6>
                  <h6>Contact: {task.contactInfo}</h6>
                  <h6>Status: {task.status}</h6>
                  <button
                    className="btn btn-secondary"
                    onClick={toggleEditDoneForm}
                  >
                    Edit
                  </button>
                  <TasksModal task={task} />
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(task)}
                  >
                    Delete
                  </button>
                </>
              )}
            </StyledDiv>
          ))
          .reverse()}
      </div>
    </div>
  );
};

export default Tasks;
