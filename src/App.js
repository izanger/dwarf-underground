import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import MainArticle from './MainArticle'
import Ad from './Ad'
import Footer from './Footer'
import OtherArticles from './OtherArticles'



class App extends Component {
  render() {
    return (
      <div className="App">
        
            <Header />

        <main className="expanded row">
        
          <MainArticle />

          <aside className="large-4 medium-12 columns">
            <Ad />
          </aside>

          <OtherArticles />


        </main>

        <Footer />

      </div>
    );
  }
}

export default App;
