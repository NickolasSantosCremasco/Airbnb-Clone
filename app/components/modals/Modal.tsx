'use client';

import { useCallback, useEffect, useState } from "react";

interface ModelProps {
   label:string;
   close: () => void;
   content: React.ReactElement;
   isOpen: boolean;
}

const Modal: React.FC<ModelProps> = ({
   label,
   content,
   close,
   isOpen
}) => {

   const [showModal, setShowModal] = useState(isOpen)


   useEffect(() => {
      setShowModal(true);
   }, [isOpen])

   const handleClose = useCallback(() => {
      setShowModal(false);

      setTimeout(() => {
         close()
      }, 300);
   }, [close])

   if(!isOpen) {
      return null;
   }
 return(
    <div className="flex items-center justify-center fixed inset-0 z-50 bg-black/60">
      <div className="relative w-[90%] md:w-[80%] lg:w-[700px] my-6 h-auto mx-auto">
         <div className={`translate duration-600 h-full ${showModal ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-10'}`}>
            <div className="w-full h-auto rounded-xl relative flex flex-col bg-white">
               
               <header className="h-[60px] flex items-center p-6 rounded-t justify-center relative border-b">
                  <div onClick={handleClose} className=" p-3 absolute left-3 hover:bg-gray-300 rounded-full cursor-pointer">
                     <svg viewBox="0 0 20 20" fill="currentColor" className="size-5">
                        <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM8.28 7.22a.75.75 0 0 0-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 1 0 1.06 1.06L10 11.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L11.06 10l1.72-1.72a.75.75 0 0 0-1.06-1.06L10 8.94 8.28 7.22Z" clipRule="evenodd" />
                     </svg>

                  </div>

                  <h2 className="text-lg font-bold">{label}</h2>
                  
               </header>

               <section className="p-6">
                     {content}
               </section>
            </div>
         </div>
      </div>
    </div>
 )
}

export default Modal