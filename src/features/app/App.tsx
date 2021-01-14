/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/state-in-constructor */
import { CssBaseline } from '@material-ui/core';
import Header from 'components/Header/Header';
import 'normalize.css';
import 'features/app/App.scss';
import Photo from 'features/photo/Photo';
import React, { Suspense } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

function App(): JSX.Element {
  return (
    <CssBaseline>
      <div className="App">
        <Suspense fallback={<div>Loading ...</div>}>
          <BrowserRouter>
            <Header />
            <Switch>
              <Redirect exact from="/" to="/photos" />
              <Route path="/photos" component={Photo} />
            </Switch>
          </BrowserRouter>
        </Suspense>
      </div>
    </CssBaseline>
  );
}

export default App;

// import React, { useState } from 'react';
// import InfiniteScroll from 'react-infinite-scroll-component';

// const style = {
//   height: 30,
//   border: '1px solid green',
//   margin: 6,
//   padding: 8,
// };

// function App() {
//   const [state, setState] = useState({
//     items: Array.from({ length: 20 }),
//   });

//   const fetchMoreData = () => {
//     if (state.items.length >= 50) {
//       return;
//     }
//     // a fake async api call like which sends
//     // 20 more records in 1.5 secs
//     setTimeout(() => {
//       setState({
//         items: state.items.concat(Array.from({ length: 20 })),
//       });
//     }, 1500);
//   };

//   return (
//     <CssBaseline>
//       <div className="App">
//         <Suspense fallback={<div>Loading ...</div>}>
//           <BrowserRouter>
//             <Header />
//             <Switch>
//               <Redirect exact from="/" to="/photos" />
//               <Route path="/photos" component={Photo} />
//             </Switch>
//           </BrowserRouter>
//         </Suspense>
//       </div>
//   );
// }

// export default App;
