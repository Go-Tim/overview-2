import React from 'react';
import ReactDOM from 'react-dom';
import { FaPinterest, FaFacebook, FaTwitter, FaLink, FaRegThumbsUp, FaMapMarkerAlt } from 'react-icons/fa';
import Moment from 'react-moment';
import 'moment-timezone';

export default function PhotosModal({ show, handleClose, photos, campsiteArea, campsiteName }) {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  if (!show) {
    return null;
  }
  return ReactDOM.createPortal(
    <div>
      <div className={showHideClassName} onClick={handleClose} />
      <div className="modal-main">
        <div className="top">
          <div className="top-top">
            <div className="userInfo">
                <img className="photo-grid-img" src={photos[0].userImage} alt="avatar" />
                <div className="photo-user">
                  <h2 className="photo-grid-name">{photos[0].userName}</h2>
                  <div className="photo-grid-date">Posted on <Moment format="MMMM Do, YYYY">{photos[0].date}</Moment></div>
                </div>
            </div>
            <div>
              <button className="helpful-button">
                <div className="helpful-context">
                  <FaRegThumbsUp className="thumbs-up" />
                  <div>Helpful</div>
                </div>
                <div>{photos[0].likes}</div>
              </button>
            </div>
          </div>
          <div className="top-bottom">
            <div>
              <p className="photo-grid-location"><FaMapMarkerAlt className="social-media"/>{campsiteName}, {campsiteArea}</p>
            </div>
            <div className="social-media-holder">
              <FaPinterest className="social-media" />
              <FaFacebook className="social-media" />
              <FaTwitter className="social-media" />
              <FaLink className="social-media" />
            </div>
          </div>
        </div>
        <img className="photo-grid-photo" src={photos[0].photo} alt="campsite photos" />
      </div>
    </div>,
    document.getElementById('portal'),
  );
}
