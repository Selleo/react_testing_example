import React, { useEffect, useState } from 'react'
import { useFormik, FormikProvider } from 'formik';
import * as yup from 'yup';
import { navigate } from '@reach/router';
import { useBeforeUnload } from 'react-use';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  date: ''
};

const validationSchema = [
  yup.object({
    firstName: yup.string().required('This field is required'),
    lastName: yup.string().required('This field is required.')
  }),
  yup.object({
    email: yup.string().email('Provide valid email format.').required()
  }),
  yup.object({
    date: yup.date().typeError('Date format required').required('This field is required.')
  })
];

const controlledNavigate = path => navigate(path, { state: { controlledEntry: true }, replace: true});

const formNavigation = ['/wizard/second', '/wizard/third'];

const Wizard = ({ children, location }) => {
  const [step, setStep] = useState(0);
  const formik = useFormik({
    onSubmit: (values, helpers) => {
      if (step === 2) {
        console.log(values);
        return;
      };

      helpers.setTouched({});
      controlledNavigate(formNavigation[step]);
    },
    initialValues,
    validationSchema: validationSchema[step],
    validateOnMount: true
  });

  useBeforeUnload(() => { 
    navigate('/wizard/first', { replace: true }); 
    
    return true; }, 
  'You have unsaved changes, are you sure?');

  useEffect(() => {
    if (!location?.state?.controlledEntry) {
      navigate('/wizard/first', { replace: true });
    }
  }, [location?.state?.controlledEntry]);

  return (
    <FormikProvider value={{...formik, setStep}}>
      <h1>Form</h1>
      <form onSubmit={formik.handleSubmit}>
        {children}
      </form>
    </FormikProvider>
  );
};

export default Wizard;