import { useState, useEffect } from "react";
import styled from "styled-components";
import {
  fetchOpenTasks,
  fetchCompletedTasks,
  fetchPendingTasks,
} from "../../services/TaskService";
import "./Tasks.css";

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
  useEffect(() => {
    getData();
  }, []);

  /* ------ Pending Tasks ------- */
  const [pendingTasksState, setPendingTasksState] = useState([{}]);

  async function getPendingData() {
    const data = await fetchPendingTasks();
    setPendingTasksState(data);
  }
  useEffect(() => {
    getPendingData();
  }, []);

  /* ------ Completed Tasks ------- */
  const [closedTasks, setClosedtasks] = useState([{}]);

  async function getCompletedData() {
    const data = await fetchCompletedTasks();
    setClosedtasks(data);
  }
  useEffect(() => {
    getCompletedData();
  }, []);

  //   have a handleClick that changes the task status to pending and have a select on the task status area

  return (
    <div id="topDiv" style={{ display: "flex" }}>
      <div style={{ width: 300, margin: 20 }}>
        <h3>Open Tasks</h3>
        {openTaskState
          .map((task, idx) => (
            <StyledDiv>
              <h6>Name: {task.personName}.</h6>
              <h6>Pet: {task.animalName} </h6>
              <h6>Contact: {task.contactInfo}</h6>
              <h6>Status: {task.status === "" ? <> Open</> : <></>}</h6>
              <button className="btn btn-secondary">Edit</button>
              {/* Use a modal to show more details */}
              <button className="btn btn-info">View Details</button>
            </StyledDiv>
          ))
          .reverse()}
      </div>
      <div style={{ width: 300, margin: 20 }}>
        <h3>Pending Tasks</h3>
        {pendingTasksState.map((task, idx) => (
          <StyledDiv>
            <h6>Name: {task.personName}.</h6>
            <h6>Pet: {task.animalName} </h6>
            <h6>Contact: {task.contactInfo}</h6>
            <h6>Status: {task.status}</h6>
            <button className="btn btn-secondary">Edit</button>
            {/* Use a modal to show more details */}
            <button className="btn btn-info">View Details</button>
          </StyledDiv>
        ))}
      </div>
      <div style={{ width: 300, margin: 20 }}>
        <h3>Closed Tasks</h3>
        {closedTasks.map((task, idx) => (
          <StyledDiv>
            <h6>Name: {task.personName}.</h6>
            <h6>Pet: {task.animalName} </h6>
            <h6>Contact: {task.contactInfo}</h6>
            <h6>Status: {task.status}</h6>
            <button className="btn btn-secondary">Edit</button>
            {/* Use a modal to show more details */}
            <button className="btn btn-info">View Details</button>
          </StyledDiv>
        ))}
      </div>
    </div>
  );
};

export default Tasks;
