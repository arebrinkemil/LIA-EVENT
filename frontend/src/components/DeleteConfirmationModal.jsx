import React, { useRef, useEffect } from "react";

const DeleteConfirmationModal = ({ onClose, onConfirm }) => {
  const modalRef = useRef(null);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed z-50 top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
      <div
        className="bg-white p-5 rounded-lg flex flex-col justify-center items-center"
        ref={modalRef}
      >
        <h2 className="text-[clamp(1rem,2rem,48px)] text-center">
          Är du säker att du vill ta bort kort?
        </h2>
        <div className="flex justify-around gap-2 mt-4">
          <button
            className="bg-red-500 border-[1px] px-10 py-4 rounded-full font-bold"
            onClick={onConfirm}
          >
            Ta bort
          </button>
          <button
            className="bg-gray-300 border-[1px] px-10 py-4 rounded-full font-bold"
            onClick={onClose}
          >
            Avbryt
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
