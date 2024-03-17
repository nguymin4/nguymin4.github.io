import React from 'react';
import { Alert } from 'reactstrap';
import '../styles/index.scss';

export default function Page404() {
  return (
    <div id="page_404" className="d-flex justify-content-center view active">
      <Alert className="mt-5 p-5" color="light">
        <h3>Oops 404! We could not find this page.</h3>
        <a href="/">Go to main page</a>
      </Alert>
    </div>
  );
}
