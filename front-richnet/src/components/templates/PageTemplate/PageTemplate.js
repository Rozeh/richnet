import React from 'react';
import './PageTemplate.scss';

const PageTemplate = ({ header, children }) => {
  return (
    <div className="page-template">
      {header}
      <main>
        {children}
      </main>
    </div>
  );
};

export default PageTemplate;
