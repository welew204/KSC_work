Challenge #2: HINT
-------------------


Hints below:

Hint #1: This will require adding a useEffect like this to the Dashboard
page:

    function fetchAll() {

        fetch('  ... something goes here ...   ')
            .then(response => response.json())
            .then(data => {
                console.log('got data back', data);
                // Set state somehow......

            });
    }

    useEffect(fetchAll, []);

Hint #2: Not sure which API URL to use? Use this:

    http://localhost:8080/api/all

Hint #3: When it's working, you should be able to delete the "hard coded" tasks
that start as defaults in the state variable, and still see tasks show after
the fetch is successful.



Challenge #3: HINT
-------------------

Hint #1: You'll need to send a POST request to the server, to send the data
over. Some incomplete code as a clue:

    const myFormData = {
        text: 'hi',
        title: 'hello',
        points: 12,
    };
    const fetchOptions = {
        method: 'POST',
        body: JSON.stringify(myFormData),
    };
    fetch('.........', fetchOptions)
      .then(response => response.json())
      .then(data => {
        // do something....
        console.log('after fetch');
      });

Hint #2: The API endpoint you need to use is /api/create/

Hint #3: Don't worry about the "id" field, the backend handles that



Challenge #4: Implement phase "Update" in dashboard
-------------------

Hint #1: You'll need to use a PUT request with this fetch. Some incomplete code
as a clue about how to do a PUT request in JavaScript:

    const myFormData = {
        phase: 3,
    };
    const fetchOptions = {
        method: 'PUT',
        body: JSON.stringify(myFormData),
    };
    fetch('.........', fetchOptions)
        .then(response => response.json())
        .then(data => {
            // do something....
        });

Hint #2: The URL web address you want to do the request to (aka "API endpoint")
looks like, for a post with ID 12: /api/12/update/

Hint #3: To combine the ID with the URL, consider the following code as a clue:

    const id = 12;
    const url = '/api/' + id + '/update/';


Hint #4: You will put the new code code where it currently moves tasks on the
front-end's state. You don't (yet) need to delete the front-end phase updating
code, but either before or after you will want to put the new code to do the
PUT request.



Challenge #5: HINT
-------------------

1. Create a new button on the frontend for deleting tasks

2. Create a new method in Dashboard , "hooked up" to onClick event on the
button

3. In this method, it should do a DELETE request to the following URL endpoint:

    /api/123/delete/

4. After the DELETE request, it should either refresh with a GET request to
'/api/all/' (re-use the method or code you already wrote for the earlier
challenge), or possibly delete it locally, also (may be more error prone).

