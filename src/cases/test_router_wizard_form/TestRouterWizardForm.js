import React  from 'react';
import { Router } from "@reach/router"

import Wizard from './Wizard';
import First from './First';
import Second from './Second';
import Third from './Third';

const TestRouterWizardForm = () => (
  <div>
    <Router>
      <Wizard path="/">
        <First path="first" />
        <Second  path="second" />
        <Third path="third" />
      </Wizard>
    </Router>
  </div>
);

export default TestRouterWizardForm;
