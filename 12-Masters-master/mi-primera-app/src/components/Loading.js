import React from "react";

export default function Loading(props) {
  const { data } = props;
  // console.log(props);
  return(
    <div>
      <h2>{ data.title }</h2>
      <h2>{ "Time is: " + data.time }</h2>
      <h2>El tiempo estimado es { data.time } segundos </h2>
    </div>  

  );
}