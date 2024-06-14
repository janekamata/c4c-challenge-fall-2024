import React from "react";
import formHandlers from "../handlers/formHandlers";

/*
  A form component to add a new partner with name, logo URL, description, and active status.
  Uses custom handlers from formHandlers to use form inputs.
*/

function Form() {
  const { formData, isChecked, inputError, handleChange, handleBoxChange, validateForm } = formHandlers({ name: "", logo: "", description: "", active: false });

  // Handler for submit button. Shows an error if any fields are left blank. Reloads the page after posting the new partner data.
  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, logo, description, active } = formData;
    if (validateForm()) {
      fetch('http://localhost:4000', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ thumbnailUrl: logo, name: name, description: description, active: active ? "Active" : "Inactive" })
      }).then(() => window.location.reload(true));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Partner Name:</label>
      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />

      <label htmlFor="logo">Partner Logo Source:</label>
      <input type="url" id="logo" name="logo" value={formData.logo} onChange={handleChange} />

      <label htmlFor="description">Partner Description:</label>
      <textarea id="description" name="description" value={formData.description} onChange={handleChange} />

      <label htmlFor="active">Active?</label>
      <div className="checkbox-container">
        <input type="checkbox" name="active" checked={isChecked} onChange={handleBoxChange} />
        {inputError && <div style={{ color: 'red' }}>{inputError}</div>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;