import Tasks from "../components/Tasks/Tasks";

const TaskPage = (props) => {
  return (
    <div className="page">
      <h1>Task Page</h1>
      <Tasks {...props} />
    </div>
  );
};

export default TaskPage;
