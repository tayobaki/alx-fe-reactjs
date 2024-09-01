// src/App.js
import React, { useEffect, useState } from 'react';
import TodoList from './components/TodoList';

// function App() {
//   return (
//     <div className="App">
//       <TodoList />
//     </div>
//   );
// }

// export default App;

export default function App() {
  return (
    <>
      <Profile person={{
        imageId: 'lrWQx8l',
        name: 'Subrahmanyan Chandrasekhar',
      }} />
      <Profile person={{
        imageId: 'MK3eW3A',
        name: 'Creola Katherine Johnson',
      }} />
    </>
  )
}


let currentPerson;

function Profile({ person }) {
  currentPerson = person;
  return (
    <Panel>
      <Header />
      <Avatar />
    </Panel>
  )
}



function Header() {
  return <h1>{currentPerson.name}</h1>;
}

function Avatar() {
  return (
    <img
      className="avatar"
      src={getImageUrl(currentPerson)}
      alt={currentPerson.name}
      width={50}
      height={50}
    />
  );
}



// export default function App({ }) {


//   let hours = new Date().getHours()


//   const changeColor = () => {
//     if (hours >= 0 && hours <= 6) {
//       document.getElementById('time').className = 'night';
//     } else {
//       document.getElementById('time').className = 'day';
//     }
//   }


//   return (
//     <>
//       <h1 onClick={changeColor} id="time" className={''}>
//         {new Date().toLocaleTimeString()}
//       </h1>

//       <span>money</span>
//     </>
//   );
// }