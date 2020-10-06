import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaRegFlag, FaPinterest, FaFacebook, FaTwitter, FaLink, FaRegThumbsUp, FaMapMarkerAlt } from 'react-icons/fa';
import { RiCloseLine, RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import Moment from 'react-moment';
import 'moment-timezone';

const modalVariant = {
  initial: { opacity: 0 },
  isOpen: { opacity: 1 },
  exit: { opacity: 0 },
};

const PhotosModal = ({ show, handleClose, selectedPhoto, photos, campsiteArea, campsiteName }) => {
  const [x, setX] = useState(0);
  const goLeft = () => {
    x === 0 ? setX(-100 * (photos.length - 1)) : setX(x - 100);
  };
  const goRight = () => {
    x === -100 * (photos.length - 1) ? setX(0) : setX(x - 100);
  };

  const carousel = photos.map((photo, index) => (
    <div className="carousel" key={index} style={{ transform: `translateX(${x}%)` }}>
      <div className="photos-modal-top-center">
        <div className="photos-modal-top-upper">
          <div className="photos-modal-userInfo">
            <img className="photos-modal-avatar" src={photo.userImage} alt="avatar" />
            <div className="photos-modal-user">
              <h2 className="photos-modal-name">{photo.userName}</h2>
              <div className="photos-modal-date">Posted on <Moment format="MMMM Do, YYYY">{photo.date}</Moment></div>
            </div>
          </div>
          <div>
            <button className="helpful-button" type="button">
              <div className="helpful-context">
                <FaRegThumbsUp className="thumbs-up" />
                <div>Helpful</div>
              </div>
              <div>{photo.likes}</div>
            </button>
          </div>
        </div>
        <div className="photos-modal-top-lower">
            <div>
              <p className="photos-modal-location"><FaMapMarkerAlt className="social-media" />{campsiteName}, {campsiteArea}</p>
            </div>
            <div className="social-media-holder">
              <div className="social-media"><FaPinterest /></div>
              <div className="social-media"><FaFacebook /></div>
              <div className="social-media"><FaTwitter /></div>
              <div className="social-media"><FaLink /></div>
            </div>
          </div>
        <img className="photos-modal-photo" src={photo.photo} alt="campsite photos" />
        <p className="caption">Caption</p>
      </div>
    </div>
  ));

  return (
    <AnimatePresence exitBeforeEnter>
      {show && (
        <motion.div>
          <motion.div
            className="photos-overlay"
            initial="initial"
            animate="isOpen"
            exit="exit"
            variants={modalVariant}
            onClick={handleClose}
          />
          <div className="photos-modal-top-left">
            <div className="slideNumber">1 / 10</div>
            <div className="report" ><FaRegFlag /> Report</div>
          </div>
          <div className="photos-modal-top-right">
            <RiCloseLine className="close" onClick={handleClose} />
          </div>
          <motion.div
            className="photos-modal-container"
          >
            {carousel}
          </motion.div>
          <RiArrowLeftSLine className="goLeft" onClick={goLeft} />
          <RiArrowRightSLine className="goRight" onClick={goRight} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PhotosModal;
