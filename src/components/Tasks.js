// const tasks = [
// 	{
// 		id: 1,
//     text: 'Doctors Appointmoent0',
//     day: 'Feb 5th at  2:30pm',
//     reminder: true,
// 	},
//   {
// 		id: 2,
//     text: 'Doctors Appointmoent1',
//     day: 'Feb 5th at  2:30pm',
//     reminder: true,
// 	},
//   {
// 		id: 3,
//     text: 'Doctors Appointmoent2',
//     day: 'Feb 5th at  2:30pm',
//     reminder: false,
// 	}
// ];

// const Tasks = () => {
// 	return (
//     <div>
//       { tasks.map(({id,text}) => (
//         <h3 key={id}>{text}</h3>
//       ))}
//     </div>
//   );
// };



const Tasks = ({tasks}) => {

	return (
    <div>
      { tasks.map(({id,text}) => (
        <h3 key={id}>{text}</h3>
      ))}
    </div>
  );
};


export default Tasks;
