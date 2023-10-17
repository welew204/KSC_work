- Start with instructions.md, refer to here when you get stuck!

Challenge #1: HINT
------------------------------------------------------------

In the code, they look like:

        useEffect(() => {
            console.log('App is first mounted: useEffect with []');
        }, []);
        useEffect(() => {
            console.log('App is was just rerendered: useEffect with no args');
        });
        console.log('rerendering');
        return (
            /* the rest of the code ... */

They get logged something like:

        rerendering
        App is first mounted: useEffect with []
        App is was just rerendered: useEffect with no args
        rerendering
        App is was just rerendered: useEffect with no args
        rerendering
        App is was just rerendered: useEffect with no args
        etc...



Challenge #2: HINT
------------------------------------------------------------

Add curly braces `{}` around the variable name, as such:

          <div className="WeatherDashboard-data">{weatherResult.windSpeed} <span>km/h</span></div>


Challenge #3: HINT
------------------------------------------------------------


        useEffect(doFetch, []);



Challenge #4: HINT
------------------------------------------------------------


Hint for step 1:

        useEffect((ev) => {
            console.log('Seach box being changed:', searchBox);
        }, [searchBox]);


Hint for step 2:

        useEffect((ev) => {
            localStorage.setItem('weathersearch', searchBox);
        }, [searchBox]);


Hint for steps 3-5:

        // Get from local storage, if it exists
        let prevSearch = localStorage.getItem('weathersearch');
        console.log('previous search was:', prevSearch);
        if (!prevSearch) {
            prevSearch = 'Oakland, California'; // set to default for first time
        }
        const [searchBox, setSearchBox] = useState(prevSearch);


Bonus Hint:


        function getPreviousSearch() {
            let prevSearch = localStorage.getItem('weathersearch');
            console.log('previous search was:', prevSearch);
            if (!prevSearch) {
                prevSearch = 'Oakland, California'; // set to default for first time
            }
            return prevSearch;
        }
        const [searchBox, setSearchBox] = useState(getPreviousSearch);


Challenge #5: HINT
------------------------------------------------------------


Conditionally show the loading spinner:

        {
            isLoading ? (
            <div className="loader"></div>
            ) : (
            null
            )
        }


When a fetch starts, do a setIsLoading

        function doFetch() {
            setIsLoading(true);
            // ...


And when the response comes back, set it to be false

        .then(data => {
            setIsLoading(false);

