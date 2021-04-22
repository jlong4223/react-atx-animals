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
    margin: 3px 3px;
    width: 30%;
    height: 10%;
  }
`;

const Tasks = ({
  task,
  // toggleForm,
  update,
  getData,
  getPendingData,
  getCompletedData,
  toggleEditDoneForm,
  togglePendingForm,
  // editFormVisible,
  editDoneFormVisible,
  editPendFormVisible,
  handleDelete,
}) => {
  //  TODO figure out how to bring in the other tasks
  const [editFormVisible, setEditFormVisible] = useState(false);

  function toggleForm() {
    setEditFormVisible(!editFormVisible);
  }

  return (
    <div id="topDiv" style={{ display: "flex" }}>
      <div style={{ width: 300, margin: 20 }}>
        <h3>Open Tasks</h3>
        {/* {openTaskState
          .map((task, idx) => ( */}
        <StyledDiv>
          {editFormVisible ? (
            <>
              <div>
                <EditTaskForm
                  toggleForm={toggleForm}
                  task={task}
                  update={update}
                  getData={getData}
                  getPendingData={getPendingData}
                  getCompletedData={getCompletedData}
                />
                <div>
                  <button className="btn btn-secondary" onClick={toggleForm}>
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
              <h6 style={{ backgroundColor: "green", color: "white" }}>
                Status: {task.status}
              </h6>
              <div>
                <button className="btn btn-secondary" onClick={toggleForm}>
                  <i className="fas fa-edit fa-lg"></i>
                </button>
                <TasksModal task={task} />
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(task)}
                >
                  <i className="fas fa-trash-alt fa-lg"></i>
                </button>
              </div>
            </>
          )}
        </StyledDiv>
        {/* )) .reverse()} */}
      </div>
      {/* <div style={{ width: 300, margin: 20 }}>
        <h3>Pending Tasks</h3>
        {/* {pendingTasksState
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
              <h6 style={{ backgroundColor: "yellow" }}>
                Status: {task.status}
              </h6>
              <div>
                <button
                  className="btn btn-secondary"
                  onClick={togglePendingForm}
                >
                  <i className="fas fa-edit fa-lg"></i>
                </button>
                <TasksModal task={task} />
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(task)}
                >
                  <i className="fas fa-trash-alt fa-lg"></i>
                </button>
              </div>
            </>
          )}
        </StyledDiv>
        {/* ))
          .reverse()} 
      </div> */}
      {/* <div style={{ width: 300, margin: 20 }}>
        <h3>Closed Tasks</h3>
        {/* {closedTasks
          .map((task, idx) => ( *
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
              <h6 style={{ backgroundColor: "red", color: "white" }}>
                Status: {task.status}
              </h6>
              <div>
                <button
                  className="btn btn-secondary"
                  onClick={toggleEditDoneForm}
                >
                  <i className="fas fa-edit fa-lg"></i>
                </button>
                <TasksModal task={task} />
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(task)}
                >
                  <i className="fas fa-trash-alt fa-lg"></i>
                </button>
              </div>
            </>
          )}
        </StyledDiv>
        ))
          .reverse()}
      </div> */}
    </div>
  );
};

export default Tasks;
