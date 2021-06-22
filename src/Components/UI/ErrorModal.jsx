import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom";
import classes from "./Error.module.css";

const BackDrop = ({ handleModalClose }) => (
  <div className={classes.backdrop} onClick={handleModalClose}></div>
);

const ModalOverlay = ({ title, message, handleModalClose }) => {
  return (
    <div className={classes["modal-container"]}>
      <header className={classes.header}>
        <h2>{title}</h2>
      </header>
      <div className={classes.content}>
        <p>{message}</p>
      </div>
      <footer className={classes.actions}>
        <button onClick={handleModalClose}>Okay!</button>
      </footer>
    </div>
  );
};

const ErrorModal = ({ title, message, handleModalClose }) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <BackDrop handleModalClose={handleModalClose} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={title}
          message={message}
          handleModalClose={handleModalClose}
        />,
        document.getElementById("overlays-root")
      )}
    </Fragment>
  );
};

export default ErrorModal;
