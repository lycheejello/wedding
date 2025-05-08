import './Photos.css'

import photo1 from '@/assets/TeaCeremonyPhotos/1.png';
import photo2 from '@/assets/TeaCeremonyPhotos/2.png';
import photo3 from '@/assets/TeaCeremonyPhotos/3.png';
import photo4 from '@/assets/TeaCeremonyPhotos/4.png';

export function Photos() {
  return (
    <div id="photos-grid-container">
      <div className="photos-item">
        <img src={photo1} alt="Tea Ceremony Photo 1" />
      </div>
      <div className="photos-item">
        <img src={photo2} alt="Tea Ceremony Photo 2" />
      </div>
      <div className="photos-item">
        <img src={photo3} alt="Tea Ceremony Photo 3" />
      </div>
      <div className="photos-item">
        <img src={photo4} alt="Tea Ceremony Photo 4" />
      </div>
    </div>
  )
  }



