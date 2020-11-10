import React from 'react'

export default function ListUsersV2(props) {
  const { empleados } = props;
  return(
    <div>
      <h4>Lista de Usuarios V2</h4>
      <p>...</p>
      <ul>
        {empleados.map((empleados, index) =>
          <li key={ index }> Nombre: { empleados.name } - Años:  { empleados.years }</li>
        )}
      </ul>
    </div>
  )
}