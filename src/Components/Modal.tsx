import { FC, useState, useEffect, ReactNode } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(isOpen);
  }, [isOpen]);

  const handleClose = () => {
    setVisible(false);
    onClose();
  };

  if (!isVisible) {
    return null;
  }

  console.log(isVisible);

  return (
    <div className="modal-overlay fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="modal w-screen h-screen flex items-center justify-center">
        <div className="w-[80%] h-[80%] p-8 bg-white rounded-lg border-2 border-blue-500">
          <button className="modal-close mt-4 px-4 py-2 bg-blue-500 text-white rounded" onClick={handleClose}>
            X
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
