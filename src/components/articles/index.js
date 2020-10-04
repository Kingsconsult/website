import React from 'react';

function WithArticleLoading(Component) {
  return function WihLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return (
      <p style={{ textAlign: 'center', fontSize: '30px', color: 'white', marginTop: '70px'}}>
        Hold on, fetching articles, may take some time :)
      </p>
    );
  };
}
export default WithArticleLoading;
