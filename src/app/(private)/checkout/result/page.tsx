import React, { Suspense } from 'react';
import ResultPage from './components/ResultPage';

const Result = () => {
  return (
    <>
      <Suspense>
        <ResultPage />
      </Suspense>
    </>
  );
};

export default Result;
