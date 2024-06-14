import { useState } from "react";

/*
    Custom handlers for form to separate out some of the specified logic for 
    checking the forms and handling changes to fields.
*/

const formHandlers = (initialState) => {
    const [formData, setFormData] = useState(initialState);
    const [isChecked, setIsChecked] = useState(false);
    const [inputError, setInputError] = useState(null);

    // Handler for a change on a field of the form to continuously store form inputs. 
    // Changes setInputError to null if all fields are filled out in case the user previously tried to submit but got an error.
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => {
          const updatedFormData = { ...prevFormData, [name]: value };
          if (updatedFormData.name !== "" && updatedFormData.logo !== "" && updatedFormData.description !== "") {
            setInputError(null);
          }
          return updatedFormData;
        });
      };

    // Specific handler for a change on the checkbox to store form input.
    const handleBoxChange = (event) => {
        setIsChecked(event.target.checked);
        handleChange(event);
    };

    // Validates that all text fields are filled out
    const validateForm = () => {
        const { name, logo, description } = formData;
        if (name === "" || logo === "" || description === "") {
            setInputError('Please fill in all fields.');
            return false;
        }
        return true;
    };

    return { formData, isChecked, inputError, handleChange, handleBoxChange, validateForm,setInputError };
};

export default formHandlers;