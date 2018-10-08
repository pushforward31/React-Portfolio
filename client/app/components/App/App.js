import React, { Component } from 'react';
// import "../node_modules/video-react/dist/video-react.css";
import Header from '../Header';
import Footer from '../Footer/Footer';


const App = ({ children }) => (
  <>
    <Header />

    <main>
      {children}
    </main>

    <Footer />
  </>
);

export default App;
