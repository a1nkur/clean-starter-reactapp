// Verson-1
/*

import { Fragment, useState, } from "react";
import ErrorModal from "../UI/ErrorModal";
import "./Form.css";

const Form = ({ setData }) => {
  // States
  const [inputData, setInputData] = useState({
    name: "",
    age: "",
  });

  const [error, setError] = useState();

  // Event Handlers
  const handleInput = e => {
    setInputData(prevState => {
      return {
        ...prevState,
        [e.target.id]: e.target.value,
      };
    });
  };

  const handleModalClose = () => setError(null);

  const handleSubmit = e => {
    e.preventDefault();

    // Input Validations
    if (inputData.name.trim().length === 0 || inputData.age.trim() === 0) {
      setError({
        title: "Invalid input. Name and Age should be non-zero",
        message: "Enter non empty name and Age > 0",
      });

      return;
    }

    if (+inputData.age < 1) {
      setError({
        title: "Invalid input. Age should be non-zero",
        message: "Enter Age > 0",
      });

      return;
    }

    setData(prevState => {
      return [inputData, ...prevState];
    });

    setInputData({
      name: "",
      age: "",
    });
  };

  return (
    <Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          handleModalClose={handleModalClose}
        />
      )}
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-controls">
            <div className="form-control">
              <label htmlFor="name">Enter Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={inputData.name}
                onChange={handleInput}
              />
            </div>
            <div className="form-control">
              <label htmlFor="age">Enter Age</label>
              <input
                type="number"
                name="age"
                step={0.5}
                id="age"
                value={inputData.age}
                onChange={handleInput}
              />
            </div>
            <div className="button-control">
              <button type="submit">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default Form;
*/

// Verson-2

import { Fragment, useState, useRef } from "react";
import ErrorModal from "../UI/ErrorModal";
import "./Form.css";

const Form = ({ setData }) => {
  // Reference
  const inputNameRef = useRef(null);
  const inputNumberRef = useRef(null);

  const [error, setError] = useState();

  // Event Handlers
  const handleModalClose = () => setError(null);

  const handleSubmit = e => {
    e.preventDefault();

    const inputData = {
      name: inputNameRef.current.value,
      age: inputNumberRef.current.value,
    };

    // Input Validations
    if (inputData.name.trim().length === 0 || inputData.age.trim() === 0) {
      setError({
        title: "Invalid input. Name and Age should be non-zero",
        message: "Enter non empty name and Age > 0",
      });

      return;
    }

    if (+inputData.age < 1) {
      setError({
        title: "Invalid input. Age should be non-zero",
        message: "Enter Age > 0",
      });

      return;
    }

    setData(prevState => {
      return [inputData, ...prevState];
    });

    inputNameRef.current.value = "";
    inputNumberRef.current.value = "";
  };

  return (
    <Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          handleModalClose={handleModalClose}
        />
      )}
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-controls">
            <div className="form-control">
              <label htmlFor="name">Enter Name</label>
              <input type="text" name="name" id="name" ref={inputNameRef} />
            </div>
            <div className="form-control">
              <label htmlFor="age">Enter Age</label>
              <input
                type="number"
                name="age"
                step={0.5}
                id="age"
                ref={inputNumberRef}
              />
            </div>
            <div className="button-control">
              <button type="submit">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default Form;
