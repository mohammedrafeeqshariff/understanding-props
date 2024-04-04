import React from 'react';
import './App.css';
import DataComponent from './Components/DataComponent';

export default function App() {
  const images = DataComponent();

  return (
    <>
      <p><strong>Function Component</strong></p>
      <div className="image-container">
        {images.map((ele) => (
          <img src={ele.img} alt="elephant-images" key={ele.id} />
        ))}
      </div>
    </>
  );
}