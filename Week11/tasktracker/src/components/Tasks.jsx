const tasks = [
  {
    id: 1,
    text: "Doctor's appointment",
    day: "July 10,2025 at 2:30pm",
    reminder: true,
  },
  {
    id: 2,
    text: "Parent teacher's meeting",
    day: "July 17,2025 at 1:30pm",
    reminder: false,
  },
  {
    id: 3,
    text: "GYM",
    day: "August 6,2025 at 2:30pm",
    reminder: false,
  },
];

const Tasks = () => {
  return (
    <>
      {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
      ))}
    </>
  );
};
export default Tasks;
