import React, { useState } from 'react';
import '../index.scss';
import Modal from './Modal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false)
  }

  return (
    <div className="App">
      <button onClick={openModal} className="open-modal-btn">✨ Открыть окно</button>
      <Modal 
      isModalOpen={isModalOpen}
      closeModal={closeModal}
      >
        <img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" />
      </Modal>
    </div>
  );
}

export default App;
