import React from 'react';

const Gallery = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Image Gallery</h1>
      <div className="grid grid-cols-2 gap-4">
        <img src="/images/image1.jpg" alt="Gallery Image 1" className="w-full h-auto" />
        <img src="/images/image2.jpg" alt="Gallery Image 2" className="w-full h-auto" />
        <img src="/images/image3.jpg" alt="Gallery Image 3" className="w-full h-auto" />
        <img src="/images/image4.jpg" alt="Gallery Image 4" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default Gallery;