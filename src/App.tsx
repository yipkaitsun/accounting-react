import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './font/OpenSans-Regular.ttf';
import { Header } from './components/header';
import { BackButton } from './components/back_button';
import { Test1 } from './components/test1';



function App() {


  const setPageFn = (newPage: JSX.Element, curPage: JSX.Element) => {
    setPage(newPage)
    setPageStack((prevState) => {
      prevState.push(curPage)
      return prevState
    })
  }

  const backfn = () => {
    setPageStack((prevState) => {
      setPage(prevState.pop() || page)
      return prevState
    })
  }

  const [pageStack, setPageStack] = useState<Array<JSX.Element>>([])

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
        height="40px"
      />
      <div
        className='backgound_layer'
        style={{
          width: '100vw',
          height: 'calc(100vh - 40px)',
          backgroundImage: 'url(/background_image.jpg)',
          backgroundSize: 'cover',

        }}>
        <div className="blur_layer" style={{
          backgroundColor: '#2927488c',
          width: '100vw',
          height: '100%'
        }}>

          <BackButton click={backfn} />
          <div
            className="scroll"
            style={{
              width: '100vw',
              overflowX: 'hidden',
              height: 'calc( 100% - 50px)',
              display: 'flex',
              justifyContent: 'center'
            }}>
            {page}
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
