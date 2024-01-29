"use client"
import React, { useState } from 'react';


const Toolbar = () => {

  const [widget, setwidget] = useState<string[]>([])

  const handleOnDrag = (e : React.DragEvent,widgetType : string) =>{
    e.dataTransfer.setData("widgetType", widgetType)
  }

  return (
    <div className="h-screen w-[350px] fixed shadow-3xl border-r-2 z-[9999] text-white">
      <div className="text-center">
        <h1 className="flex justify-center font-bold p-5 text-3xl">Drag and Drop</h1>
        <p className="text-xl">Dragging is the new way to create websites easily</p>
      </div>

      <div className='p-4 mt-10 text-white m-4 text-center'>
        <h1 className='p-4 font-bold text-md'>
          Drag following options
        </h1>
       
        <div
          className='m-3 p-2 bg-white text-[#00c3c7] font-bold rounded-lg text-center shadow-xl'
          draggable onDragStart={(e) => handleOnDrag(e,"text")}>
          text
        </div>
       
        
        <div 
          className='m-3 p-2 bg-white text-[#00c3c7] font-bold rounded-lg text-center shadow-xl'
          draggable onDragStart={(e) => handleOnDrag(e,"image")}>
          image
        </div>

      </div>
     
    </div>
  );
};

export default Toolbar;
