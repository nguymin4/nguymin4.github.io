import React from 'react';
import { Alert } from 'reactstrap';
import '../styles/index.scss';

export default function Page404() {
  return (
    <div className="d-flex justify-content-center view active">
      <Alert className="mt-5 p-5" color="light">
        <h3>Page Not Found</h3>
        <p>Oops, we could not find this page!</p>
      </Alert>
    </div>
  );
}
