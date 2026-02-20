'use client';
import appStyles from './App.module.scss';
import { RotatingSquare } from 'react-loader-spinner';

const Loading = () => {
  return (
    <main className={appStyles.LoadingPage}>
      <div className={appStyles.Wrapper}>
        <div className={appStyles.Loading}>
          <div className={appStyles.Content}>
            <RotatingSquare
              visible={true}
              height="100"
              width="100"
              color="#E07A5F"
              ariaLabel="rotating-square-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Loading;
