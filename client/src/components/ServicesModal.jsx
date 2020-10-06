import React from 'react';
import { RiCloseLine } from "react-icons/ri";
import { AnimatePresence, motion } from 'framer-motion';

const modalVariant = {
  initial: { opacity: 0 },
  isOpen: { opacity: 1 },
  exit: { opacity: 0 },
};
const containerVariant = {
  initial: { top: "-50%" },
  isOpen: { top: "30%" },
  exit: { top: "-50%" },
  transition: { ease: "easeIn" },
};

const ServicesModal = ({ show, handleClose, service }) => (
  <AnimatePresence exitBeforeEnter>
    {show && (
      <motion.div>
        <motion.div
          className="overlay"
          initial="initial"
          animate="isOpen"
          exit="exit"
          variants={modalVariant}
          onClick={handleClose}
        />
        <motion.div
          className="modal-container"
          initial="initial"
          animate="isOpen"
          exit="exit"
          transition="transition"
          variants={containerVariant}
        >
          <div className="services-modal-main">
            <RiCloseLine className="exit" onClick={handleClose} />
            <div className="services-modal-top">
              <img className="services-modal-icon" src={service.image} alt={service.name} />
              <h2 className="services-modal-header">{service.name}</h2>
              <p className="services-modal-desc">{service.description}</p>
            </div>
            <div className="services-modal-bottom">Available at checkout.</div>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default ServicesModal;
