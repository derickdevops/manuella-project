import { useEffect, useState } from 'react';
import { galleryImages } from '../data.js';

export default function Gallery() {
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    if (!activeImage) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setActiveImage(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeImage]);

  return (
    <section className="section gallery" id="gallery">
      <div className="section-heading reveal">
        <span className="eyebrow">Gallery</span>
        <h2>Real Evora looks and service details.</h2>
        <p>A simple gallery using your provided brand photos, client finishes, and price list.</p>
      </div>
      <div className="gallery-grid">
        {galleryImages.map((image, index) => (
          <button
            className={`gallery-item item-${index + 1} reveal`}
            style={{ '--delay': `${index * 50}ms` }}
            type="button"
            key={image.src}
            onClick={() => setActiveImage(image)}
            aria-label={`Open image: ${image.alt}`}
          >
            <img src={image.src} alt={image.alt} />
          </button>
        ))}
      </div>
      {activeImage && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Gallery image preview">
          <button className="lightbox-backdrop" type="button" aria-label="Close gallery preview" onClick={() => setActiveImage(null)} />
          <div className="lightbox-panel">
            <button className="lightbox-close" type="button" onClick={() => setActiveImage(null)} aria-label="Close">x</button>
            <img src={activeImage.src} alt={activeImage.alt} />
          </div>
        </div>
      )}
    </section>
  );
}
