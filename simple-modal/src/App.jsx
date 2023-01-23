// App.jsx

import Modal from './components/Modal'
import { useState } from 'react';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="App">
      <button onClick={() => setIsModalOpen(true)} className="button">
        Open Modal
      </button>

      {/* Modal Component  */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        heading={'🎉 Congratulations'}
        content={
          `Your account has been created successfully!
          You can now log in with the email address 
          and password you provided during registration`
        }
      />
    </div>
  )
}

export default App;
