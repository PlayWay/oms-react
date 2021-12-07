import {Button} from "antd";
import React, {useState} from 'react'
import 'antd/dist/antd.css';
import {CustomModal,MessageAlert,ErrorAlert} from "oms-react";

function App() {

  const [show, setShow] = useState(false)
  const getCustomAlert = () => setShow(true)
  const getErrorAlert = () => ErrorAlert({msg: '23123', title: 'ZZhopa', techError: 'Opapapa'})
  const getMessageAlert = () => MessageAlert({type: 'success', text: 'messsage'})
  return (
    <div className="App">
      <Button onClick={getCustomAlert}>Error Text</Button>
      <Button onClick={getErrorAlert}>getErrorAlert</Button>
      <Button onClick={getMessageAlert}>getMessageAlert</Button>
      {/*<CustomModal show={show} handleCancel={e => setShow(false)}>*/}
      {/*  <h1>dasdasdsad</h1>*/}
      {/*</CustomModal>*/}
    </div>
  );
}

export default App
