// SaveButtonComponent.js

import React from 'react';

const SaveButtonComponent = ({ contentToSave }) => {
  const saveDivContent = () => {
    // Get the content of the specified div
    const divContent = document.getElementById(contentToSave);

    // Create a Blob containing the HTML content
    const blob = new Blob([divContent], { type: 'text/html' });

    // Create a download link
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = 'savedDiv.html';

    // Append the link to the document and trigger the click event
    document.body.appendChild(downloadLink);
    downloadLink.click();

    // Remove the link from the document
    document.body.removeChild(downloadLink);
  };

  return (
    <button 
        className='bg-[#00c3c7] text-white rounded-lg border-none p-3 m-2 mt-3 font-bold shadow-xl' 
        onClick={saveDivContent}
    >
      Save Your Website
    </button>
  );
};

export default SaveButtonComponent;
