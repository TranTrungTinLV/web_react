import { useState } from 'react'
import Backdrop from './Backdrop';
import Modal from './Modal';

function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true);
    // console.log('Clicked!');
    console.log(props.text);
  }

  function closeHandler() {
    setModalIsOpen(false);
  }
  return <div className='card'>
    <h2>{props.text}</h2>
    <div className='actions'>
      <button className='btn' onClick={deleteHandler} >
        Delete
      </button>
    </div>
    {modalIsOpen && <Modal onDefault={closeHandler} onConfirm={closeHandler} />}
    {modalIsOpen && <Backdrop onClick={closeHandler} />}
  </div>
}

export default Todo;