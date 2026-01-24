import React from 'react'

function StudentInfo(props) {
  return (
    <div>
      <h3>Thông tin sinh viên</h3>
      <p>{props.name}</p>
      <p>{props.id}</p>
      <p>{props.class}</p>
    </div>
  )
}

export default StudentInfo
