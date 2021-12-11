import React, { useEffect } from "react";
import { Field, useFormikContext } from "formik";

const First = () => {
  const { setStep } = useFormikContext();

  useEffect(() => {
    setStep(0);
  }, [setStep]);

  return (
    <div>
      <label>
        First Name: 
        <Field name="firstName">
          {({ field, meta }) => (
            <>
              <input {...field} />
              <p>{meta.touched && meta.error}</p>
            </>
          )}
        </Field>
      </label>
      <label>
        Last Name: 
        <Field name="lastName">
          {({ field, meta }) => (
            <>
              <input {...field} />
              <p>{meta.touched && meta.error}</p>
            </>
          )}
        </Field>
      </label>
      <button type="submit">Next</button>
    </div>
  );
}

export default First;