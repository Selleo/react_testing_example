import React, { useEffect } from "react";
import { Field, useFormikContext } from "formik";
import { useNavigate } from "@reach/router";

const Second = () => {
  const navigate = useNavigate();
  const { setStep } = useFormikContext();

  const handlePrevButtonClick = () => {
    navigate('/wizard/first', { state: { controlledEntry: true }, replace: true});
  };

  useEffect(() => {
    setStep(1);
  }, [setStep]);

  return (
    <div>
      <label>
        E-mail: 
        <Field name="email">
          {({ field, meta }) => (
            <>
              <input type="email" {...field} />
              <p>{meta.touched && meta.error}</p>
            </>
          )}
        </Field>
      </label>
      <button type="button" onClick={handlePrevButtonClick}>Previous</button>
      <button type="submit">Next</button>
    </div>
  )
};

export default Second;