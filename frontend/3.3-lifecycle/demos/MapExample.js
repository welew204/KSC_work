import React from 'react';

function App() {
  const articles = [
    {
      title: 'My blog post',
      text: 'This is what I think about the world',
      likeCount: 10,
    },
    {
      title: 'Another post',
      text: 'On second thought, everything I said previously was wrong',
      likeCount: 3,
    },
  ];

  return (
    <div className="App">
      <h1>All our articles:</h1>
      {
        articles.map(article => (
          <div>
            <h1>{article.title}</h1>
            <p>{article.text}</p>
          </div>
        ))
      }

      <h1>Our most popopular articles:</h1>
      {
        articles
          .filter(article => article.likeCount > 5)
          .map(article => (
            <div>
              <h1>{article.title}</h1>
              <p>{article.text}</p>
            </div>
          ))
      }
    </div>
  );
}
