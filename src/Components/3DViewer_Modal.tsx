import React, { useState } from 'react';
import { SphereViewer } from './3DViewer';
import { Modal } from './Modal';

interface ModalProps_3D {
  Count: number;
}

export const Viewer3D_Modal: React.FC<ModalProps_3D> = ({ Count }) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <div>
      <button className="text-white" onClick={() => setModalOpen(true)}>
        Open Modal
      </button>
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        {modalOpen && (
          //   <div className="min-h-screen flex items-center justify-center">
          //     <div className="w-96 h-60 border-4 bg-white flex items-center justify-center">
          <div>
            <SphereViewer count={Count}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
            </SphereViewer>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Viewer3D_Modal;
