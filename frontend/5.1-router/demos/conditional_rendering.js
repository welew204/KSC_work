function App() {
  const [page, setPage] = useState('homepage');

  return (
    <div>

      {page === 'homepage' ? (
        <div>
          <h1>Welcome to my Homepage!</h1>
          <p>Here you will hear my thoughts on things.</p>
        </div>
      ) : null}

      {page === 'blog' ? (
        <div>
          <h1>Blog</h1>
          <h2>Why the moon landing was fake?</h2>
          <p>Because the moon is made of cheese, it would have been to
          delicious to stand on.</p>

          <h2>Who really shot JFK?</h2>
          <p>Answer: He faked his death and had plastic surgery to switch
          places with Elvis.</p>
        </div>
      ) : null}

    </div>
  )
}



