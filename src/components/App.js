import React from "react";
import Article from "./Article";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";


function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <ArticleList>
        <Article />
      </ArticleList>
    </div>
  );
}


export default App;