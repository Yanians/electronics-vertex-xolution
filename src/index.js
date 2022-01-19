import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
// import ReactDOMServer from 'react-dom/server';
import { BrowserRouter  as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import 'materialize-css/dist/css/materialize.min.css';
// import './css/materialize.min.css';
import './css/vertex-home.css';
import './css/custom.css';
import { Application } from './components';
// import Main from './video rentals/main';
// import Main from './trialroute/main';
const el = document.getElementById('root');

ReactDOM.render(
     <Provider store={store}>
      <Suspense fallback={<div> Loading app. please wait.. </div>}>
        <Router>
          {/* <Main /> */}
          <Application />
        </Router>
      </Suspense>
     </Provider>       
,el);

// function Main(props){
   

// }

// Main();
