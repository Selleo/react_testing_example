import React, { useEffect } from "react";
import { Field, useFormikContext } from "formik";
import { navigate } from "@reach/router";

const Third = () => {
  const { setStep } = useFormikContext();

  const handlePrevButtonClick = () => {
    navigate('/wizard/second', { state: { controlledEntry: true }, replace: true});
  };

  useEffect(() => {
    setStep(2);
  }, [setStep]);

  return (
    <div>
      <label>
        Date: 
        <Field name="date">
          {({ field, meta }) => (
            <>
              <input type="date" {...field} />
              <p>{meta.touched && meta.error}</p>
            </>
          )}
        </Field>
      </label>
      <button type="button" onClick={handlePrevButtonClick}>Previous</button>
      <button type="submit">Submit</button>
    </div>
  )
};

export default Third;