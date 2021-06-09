
// import React from 'react'

// class App extends React.Component {
//   render() {
//     return <h1> Hello from a class 888 </h1>
//   }
// }

import {useState} from 'react'
import Header from "./components/Header"
import Tasks from './components/Tasks'

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointmoent0',
      day: 'Feb 5th at  2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Doctors Appointmoent1',
      day: 'Feb 5th at  2:30pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Doctors Appointmoent2',
      day: 'Feb 5th at  2:30pm',
      reminder: false,
    }
    ])

  return (
    <div className="App">
      <h1> Hello From React </h1>
      <Header title={"zhao"} />
      <Tasks tasks={tasks} />
    </div>
  );
}




export default App;
