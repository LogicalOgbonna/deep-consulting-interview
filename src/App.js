import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-loading-skeleton/dist/skeleton.css';
import './App.scss';
import { Layout } from './components';
import { HomePage, CityPage } from './Pages';

toast.configure();

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Routes>
            <Route
              exact
              path="/"
              name="Home Page"
              element={<HomePage />}
            />
            <Route
              exact
              path="/:city"
              name="City Weather"
              element={<CityPage />}
            />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
