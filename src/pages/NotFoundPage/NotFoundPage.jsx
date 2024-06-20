import { Helmet } from 'react-helmet-async';

const ErrorPage = () => {
  return (
    <>
      <h2>ErrorPage</h2>
      <Helmet>
        <title>Not found</title>
      </Helmet>
    </>
  );
};

export default ErrorPage;
