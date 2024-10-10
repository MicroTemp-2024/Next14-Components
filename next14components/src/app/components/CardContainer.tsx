import React from 'react';

const CardContainer = ({ children }) => {
  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-4 mb-4">
      <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
        Card title
      </h5>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {children}
      </div>
      <p className="text-gray-700 text-base mb-4">
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
      </p>
    </div>
  );
};

export default CardContainer;
