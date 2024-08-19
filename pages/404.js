// pages/404.js

import Link from 'next/link';

const Custom404 = () => {
  return (
    <div className="container">
      <div className="error-page">
        <h1 className="error-page__title">404</h1>
        <p className="error-page__message">Oops! The page you’re looking for doesn’t exist.</p>
          <a className="error-page__link">Go back to Home</a>
      </div>

      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: #f9f9f9;
        }
        .error-page {
          text-align: center;
        }
        .error-page__title {
          font-size: 5rem;
          color: #ff6f61;
        }
        .error-page__message {
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }
        .error-page__link {
          color: #0070f3;
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};

export default Custom404;
