

Challenge 1: Hints
-----------------------------------------------------------------------------

- MovieDetails is being used with hard-coded data in App.js.  However, it would
  seem that not all the movie details are showing.

- Open up src/App.js to see what props are being used. See how it has data
  being passed to MovieDetails? e.g.

              name="The Shawshank Redemption"
              description="Two imprisoned men bond over a number of years"

- These "props" are your clue. One prop at a time, you'll want to show all this
  information in the MovieDetails component.

- Fix the src/components/MovieDetails/MovieDetails.js component to show all
  information given to it.


Challenge 2: Hints
-----------------------------------------------------------------------------

- HINT 1: Console log example:

      .then(data => {
        // TODO... Do something here!
        console.log('got data back!');
        console.log(data);

      });


- HINT 2: The property you want to set is "data.movies"

        console.log(data); // see that its "data.movies"
        setMovies(data.movies);




Challenge 2: Hints
-----------------------------------------------------------------------------

- Hint #1:

        {
          movies.map(movie => (
            /* something goes here... */
          ))
        }


- Hint #2 (partial):

          <MovieDetails
            name={movie.name}
            details={movie.desc}
          />



- Hint #3 (full):

        <MovieDetails
          key={movie.id}
          name={movie.name}
          details={movie.desc}
          rating={movie.rate}
          year={movie.year}
          director={movie.director}
          length={movie.length}
        />


- Hint #4: All together:

        {
          movies.map(movie => (
            <MovieDetails
              key={movie.id}
              name={movie.name}
              details={movie.desc}
              rating={movie.rate}
              year={movie.year}
              director={movie.director}
              length={movie.length} />
          ))
        }



Challenge 4: Hints
-----------------------------------------------------------------------------



        function doSearch () {
          console.log('search getting clicked!', searchInput);
          setSearchBoxText('');
        }

        <button onClick={doSearch}>Search</button>



Challenge 5: Hints
-----------------------------------------------------------------------------

- Step 1 Hint:

          function doSearch() {
            console.log('search getting clicked!', searchInput);
            setSearchBoxText('');
            fetch(..something goes here...)
              .then(response => response.json())
              .then(data => {
                // todo
              });
          }


- Step 2 Hint:

        fetch('/api/search/shrek')
          .then(response => response.json())
          .then(data => {
            // todo
          });

- Step 3a Hint:

        fetch('/api/search/shrek')
          .then(response => response.json())
          .then(data => {
            console.log('search - Got data back!');
            console.log(data);
          });


- Step 3b Hint:

          console.log('search - Got data back!');
          console.log(data); // .results is the array
          setMovies(data.results);


- Step 4 Hint:

          '/api/search/' + searchBoxText




- Final hint (everything together):

        function doSearch() {
          setSearchBoxText('');
          fetch('/api/search/' + searchBoxText)
            .then(response => response.json())
            .then(data => {
              console.log('search - Got data back!');
              console.log(data);
              setMovies(data.results);
            });
        }





Bonus Challenge: Add Movie Hints
-----------------------------------------------------------------------------

        const [formData, setFormData] = useState({});
        function onGenericFormInputChange(ev) {
          const nameOfInput = ev.target.name;
          const newValueOfInput = ev.target.value;
          setFormData({
            ...formData,
            [nameOfInput]: newValueOfInput,
          });
        }


        <label>Name</label>
        <input name="name" value={formData.name} onChange={onGenericFormInputChange} />
        <label>Details</label>
        <input name="details" value={formData.details} onChange={onGenericFormInputChange} />
        <label>Rating</label>
        <input name="rating" value={formData.rating} onChange={onGenericFormInputChange} />
        <label>Director</label>
        <input name="director" value={formData.director} onChange={onGenericFormInputChange} />
        <label>Year</label>
        <input type="number" name="year" value={formData.year} onChange={onGenericFormInputChange} />
        <label>Length</label>
        <input type="number" name="length" value={formData.length} onChange={onGenericFormInputChange} />
        <div></div>
        <button onClick={doAddMovie}>Add New Movie</button>



        function doAddMovie() {
          fetch('/api/add/movie', {
            method: 'POST',
            body: JSON.stringify(formData),
          }).then(response => response.json())
            .then(data => {
              doFetch(); // call this to refresh with the new movie
            });
        }

