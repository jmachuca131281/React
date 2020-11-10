import React from 'react';
import Buttons from './components/Buttons';
import { ReactComponent as ReactLogo } from './assets/react.svg'
// import Loading from './components/Loading'
// import ListUsers from './components/ListUsers'
// import ListUsersV2 from './components/ListUsersV2';

export default function App() {
  // const textObj = {
  //   title: "Cargando obj.",
  //   time: 6
  // };

  // const users = [
  //   "Nombre 1",
  //   "Nombre 2",
  //   "Nombre 3",
  //   "Nombre 4",
  //   "Nombre 5"
  // ];

  // const employees = [
  //   {name: "Nombre 1", years: 12 },
  //   {name: "Nombre 2", years: 13 },
  //   {name: "Nombre 3", years: 14 },
  //   {name: "Nombre 4", years: 34 }
  // ]

  const showNameConsole = name => {
    console.log(name);
  };

  return (
    <div className="App">
      <h1>Mi app</h1>
      {/* <Loading text="Cargando todos..." /> */}
      {/* <Loading data={ textObj }/> */}
      {/* <Loading text={"Numero: " + 99 } /> */}
      {/* <ListUsers listUsers={ users }/> */}
      {/* <ListUsersV2 empleados={ employees }/> */}
      {/* <Buttons fnShowNombre = { showNameConsole }/> */}
      <ReactLogo style={{width: 200, height: 200 }} />
    </div>
  );
}

