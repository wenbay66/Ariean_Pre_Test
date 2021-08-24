import { useState } from "react";

const UserForm = ({ initialValues, validation, onSubmit }) => {
  
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = ({ target }) => {
    
    const stateName = target.name;
    const stateType = target.type;
    const value = stateType === "checkbox" ? target.checked : target.value;

    setValues({
      ...values,
      [stateName]: value
    });
  };

  const handleSubmit = () => {
    
    const errMsg = validation(values);

    setErrors(errMsg);

    if (Object.keys(errMsg).length === 0) {
      onSubmit(values);
    }
  };

  return { handleChange, handleSubmit, values, errors };
};

export default UserForm;
