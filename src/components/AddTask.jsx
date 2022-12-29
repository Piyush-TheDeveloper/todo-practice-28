import React from 'react';

const AddTask = () => {
  const styleInput = {
    width: '100%',
    textAlign: 'center',
  };
  return (
    <div className="mx-auto">
      <input
        type="text"
        className="my-2 form-control"
        placeholder="Enter Task"
        style={styleInput}
      />
      <input type="submit" className="btn btn-success my-2" />
    </div>
  );
};

export default AddTask;
