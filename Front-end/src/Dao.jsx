import React from "react";

const Dao = () => {
  const strDao = localStorage.getItem("created-dao");
  const dao = JSON.parse(strDao);
  return (
    <div>
      <h1>{dao.name}</h1>
      <p>{dao.numberOfMembers}</p>
      <h2>{dao.contratAddress}</h2>
      <pre>{strDao}</pre>
    </div>
  );
};

export default Dao;
