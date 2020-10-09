import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaRegFlag, FaPinterest, FaFacebook, FaTwitter, FaLink, FaRegThumbsUp, FaMapMarkerAlt } from 'react-icons/fa';
import { RiCloseLine, RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import Moment from 'react-moment';
import 'moment-timezone';

const modalVariant = {
  initial: { opacity: 0 },
  isOpen: { opacity: 1 },
  exit: { opacity: 0 },
};

const leftImgVariant = {
  initial: { scale: 0.4, x: -325},
  isOpen: { scale: 1, x: 0, opacity: 1 },
  exit: { scale: 0.4, x: -325, opacity: 0 },
  transition: { bounce: 0 },
};

const rightImgVariant = {
  initial: { scale: 0.5, x: 50, opacity: 0 },
  isOpen: { scale: 1, x: 0, opacity: 1 },
  exit: { scale: 0.5, x: 50, opacity: 0 },
  transition: { bounce: 0 },
};

const centerImgVariant = {
  initial: { scale: 0.5, x: -150, opacity: 0 },
  isOpen: { scale: 1, x: 0, opacity: 1 },
  exit: { scale: 0.5, x: -150, opacity: 0 },
  transition: { bounce: 0 },
};

const PhotosModal = ({ show, handleClose, photos, campsiteArea, campsiteName, propIndex }) => {
  const [x, setX] = useState(0);
  const [slideNum, setSlideNum] = useState(1);
  const [used, setUsed] = useState(false);

  const goLeft = () => {
    if (propIndex === 0 && !used) {
      setSlideNum(photos.length);
    } else if (slideNum === 1 && used) {
      setSlideNum(photos.length);
    } else if (used) {
      setSlideNum(slideNum - 1);
    } else if (slideNum === 1 && propIndex === 1) {
      setSlideNum(slideNum);
    } else {
      setSlideNum(slideNum + propIndex - 1);
    }

    if (propIndex === 0 && !used) {
      setX(-100 * (photos.length - 1) + (propIndex * -100));
    } else if (!used && x === 0) {
      setX(x + 100);
    } else if (slideNum === 1) {
      setX(-100 * (photos.length - 1) + (propIndex * 100));
    } else {
      setX(x + 100);
    }

    setUsed(true);
  };

  const goRight = () => {
    if (slideNum === 29) {
      setSlideNum(1);
    } else if (used) {
      setSlideNum(slideNum + 1);
    } else {
      setSlideNum(slideNum + propIndex + 1);
    }

    if (slideNum === 29) {
      setX(propIndex * 100);
    } else if (!used && x === 0) {
      setX(x - 100);
    } else {
      setX(x - 100);
    }
    setUsed(true);
  };

  const reset = () => {
    setX(0);
    setSlideNum(1);
    setUsed(false);
  };

  const imgTransition = () => {
    let realClassName;

    if (propIndex === 0 || propIndex === 3 || propIndex === 6) {
      realClassName = leftImgVariant;
    } else if (propIndex === 2 || propIndex === 5 || propIndex === 8) {
      realClassName = rightImgVariant;
    } else {
      realClassName = centerImgVariant;
    }

    return realClassName;
  };

  const carousel = photos.map((photo, index) => (
    <motion.div
      className="carousel"
      key={index}
      style={{ transform: `translateX(${x + (propIndex * -100)}%)` }}
      onClick={() => { handleClose(); reset();}}
      initial="initial"
      animate="isOpen"
      exit="exit"
      variants={modalVariant}
    >
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
        <motion.div
          className="photo-wrapper"
          initial="initial"
          animate="isOpen"
          exit="exit"
          transition="transition"
          variants={imgTransition()}
        >
          <img className="photos-modal-photo" src={photo.photo} alt="campsite photos"/>
        </motion.div>
        <div className="caption">{photo.caption}</div>
      </div>
    </motion.div>
  ));

  return (
    <AnimatePresence exitBeforeEnter>
      {show && (
        <div>
          <motion.div
            className="photos-overlay"
            initial="initial"
            animate="isOpen"
            exit="exit"
            variants={modalVariant}
            onClick={() => { handleClose(); reset();}}
          />
          <div className="photos-modal-container">
            {carousel}
          </div>
          <div className="photos-modal-top-left">
            <div className="slideNumber">{used ? slideNum : propIndex + 1} / {photos.length}</div>
            <div className="report" ><FaRegFlag /> Report</div>
          </div>
          <div className="photos-modal-top-right" onClick={() => { handleClose(); reset();}}>
            <RiCloseLine className="overview-close" />
          </div>
          <RiArrowLeftSLine className="goLeft" onClick={goLeft} />
          <RiArrowRightSLine className="goRight" onClick={goRight} />
        </div>
      )}
    </AnimatePresence>
  );
};

export default PhotosModal;
