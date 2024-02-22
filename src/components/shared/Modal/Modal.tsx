import { Fragment } from "react";
import { Transition } from "@headlessui/react";


interface Props {
  showModal: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ showModal, onClose, children }: Props) => {
  return (
    <>
      <Transition show={showModal} as={Fragment}>
        <div className="fixed inset-0 overflow-y-auto z-50">
          <div className="flex items-center justify-center min-h-screen p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className=" fixed inset-0 bg-black bg-opacity-80 transition-opacity" onClick={onClose}></div>
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="relative bg-orange-200 rounded-lg shadow-xl max-w-md w-full p-6 overflow-y-auto">
                <div className="absolute top-0 right-0 p-2">
                  <button className="text-gray-500 hover:text-gray-800" onClick={onClose}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg> 
                  </button>
                </div>
                <div className="text-gray-800">{children}</div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Transition>
    </>
  );
};

export default Modal;
