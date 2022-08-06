import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { HomePage } from './components/homePage';
import './font/OpenSans-Regular.ttf';
import { Header } from './components/header';
import { BackButton } from './components/back_button';
import { Test1 } from './components/test1';
import { Test2 } from './components/test2';



function App() {


  const setPageFn = (newPage: JSX.Element) => {
    setPage(newPage)
  }

  const [page, setPage] = useState<JSX.Element>(
    <Test1 setPage={setPageFn} style={{ width: '78%' }} />
  )

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }} >
      <Header
        color={{
          main: '#292748',
          second: '#3d3a67',
          third: '#9d97f3'
        }}
        title={'test'}
        height="69px"
      />
      <div
        className='backgound_layer'
        style={{
          width: '100vw',
          height: 'calc(100vh - 69px)',
          backgroundImage: 'url(/background_image.jpg)',
          backgroundSize: 'cover',

        }}>
        <div className="blur_layer" style={{
          backgroundColor: '#2927488c',
          width: '100vw',
          height: '100%'
        }}>

          <BackButton click={() => { setPageFn(<Test2 setPage={setPageFn} style={{ width: '78%' }} />) }} />
          <div style={{
            width: '100vw',
            overflowX: 'hidden',
            height: 'calc( 100vh - 119px)',
            display: 'flex',
            justifyContent: 'flex-end'
          }}>
            {page}
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
