import React from 'react'
import { useNavigate } from "react-router-dom";

function Setting() {

const navigate = useNavigate();

  function handleLogin() {

    navigate("/");
  }
  return (
    <div>
      Setting
      <button onClick={handleLogin}>
        Quay lai
    </button>
    </div>
  )
}

export default Setting
