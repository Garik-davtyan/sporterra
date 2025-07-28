import React, { useRef, useState } from "react";
import img2 from "../image/venumk.jpg";
import img3 from "../image/venumaa.jpg";
import lecoq1 from "../image/lecoq1.jpg";
import lecoq2 from "../image/lecoq2.jpg";
import squatwolf2 from "../image/squatwolfk.jpg";
import underarmour from "../image/underarmour.jpg";
import squatvideo from "../image/lecoqvideo.MP4";
import squatwolf111 from "../image/squatwolf111.MP4";
import "../styles/main.css";

const videos = [squatwolf111, squatvideo];

function Main() {
  const [current, setCurrent] = useState(0);
  const [offset, setOffset] = useState(0);
  const [animating, setAnimating] = useState(false);
  const touchStartX = useRef(null);
  const videoRef = useRef(null);

  const getNext = (dir) => (current + dir + videos.length) % videos.length;

  const handleTouchStart = (e) => {
    if (animating) return;
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchMove = (e) => {
    if (animating || touchStartX.current === null) return;
    const dx = e.touches[0].clientX - touchStartX.current;
    setOffset(dx);
  };
  const handleTouchEnd = () => {
    if (animating || touchStartX.current === null) return;
    const SWIPE_THRESHOLD = 60;
    if (offset > SWIPE_THRESHOLD) {
      slideTo(-1);
    } else if (offset < -SWIPE_THRESHOLD) {
      slideTo(1);
    } else {
      setOffset(0);
    }
    touchStartX.current = null;
  };
  const slideTo = (dir) => {
    setAnimating(true);
    setOffset(dir * -window.innerWidth);
    setTimeout(() => {
      setCurrent(getNext(dir));
      setOffset(dir * window.innerWidth);
      setTimeout(() => {
        setOffset(0);
        setAnimating(false);
      }, 40); // чуть дольше для плавности
    }, 500); // увеличено с 300 до 500мс для плавности
  };

  return (
    <div className="main1">
      <div
        className="video-player-wrap swipe-video-wrap"
        style={{ position: "relative", overflow: "hidden" }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <video
          ref={videoRef}
          src={videos[current]}
          className="main-image swipe-video"
          style={{
            transform: `translateX(${offset}px)` ,
            transition: animating ? "transform 0.5s cubic-bezier(.4,1.3,.5,1)" : "none"
          }}
          autoPlay
          muted
          playsInline
          controls={false}
          onEnded={() => setCurrent((current + 1) % videos.length)}
          disablePictureInPicture
          controlsList="nodownload nofullscreen noremoteplayback noplaybackrate"
        />
      </div>
      <div className="main-title">VENUM</div>
      <div className="main-gallery">
        <img src={img2} alt="venum2" className="gallery-image" />
        <img src={img3} alt="venum3" className="gallery-image" />
      </div>
      <div className="squatwolf-title">SQUATWOLF</div>
      <div className="main-bottom-row squatwolf-row">
        <img src={squatwolf2} alt="squatwolf2" className="squatwolf-image" />
      </div>
    <div className="underarmour-title">UNDER ARMOUR</div>
    <div className="main-bottom-row">
      <img src={underarmour} alt="underarmour" className="squatwolf-image" />
    </div>

    </div>
  );
}

export default Main;