// Website.js

"use client";
import React, { useState } from 'react';
import SaveButtonComponent from '../SaveButtonComponent/SaveButtonComponent';

const Website = () => {

  const [widget, setwidget] = useState<string[]>([])

  const handleOnDrag = (e: React.DragEvent, widgetType: string) => {
    e.dataTransfer.setData("widgetType", widgetType)
  }

  const handleOnDrop = (e: React.DragEvent) => {
    const widgetType = e.dataTransfer.getData("widgetType") as string;
    console.log("widgetType", widgetType);
    setwidget([...widget, widgetType])
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();

  }


  return (
    <div className='ml-[350px] h-dvh container'>
      
      <div className='flex items-center justify-end mr-6'>
        <SaveButtonComponent contentToSave="myDiv"/>
      </div>

      <h1 className='text-center p-4 text-white text-lg'>Drag and Drop Texts and Images below ⬇️ </h1>

      <div className='p-4' onDrop={handleOnDrop} onDragOver={handleDragOver}>
        <div className=' myDiv overflow-scroll h-[700px] border-2 shadow-xl bg-white text-[#00c3c7]'>
          {
            widget.map((widget) => {
              return (
                <div>
                  {widget}
                </div>)
            })
          }
        </div>
      </div>

    </div>
  );
};

export default Website;
