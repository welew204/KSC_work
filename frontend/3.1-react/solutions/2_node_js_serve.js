const http = require('http');

let count = 0;
function serve(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    if (request.url === '/') {
        response.write(`
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bare-css@2.0.3/css/bare.min.css" />
            <section>
                <h1>Welcome to my site</h1>
                <p><a href="/hot10">Top 10 singles of the the year 1990</a></p>
                <p><a href="/counter">Count times</a></p>
            </section>
        `);
    } else if (request.url === '/hot10') {
        response.write(`
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bare-css@2.0.3/css/bare.min.css" />
            <section>
                <h1>Billboard Magazine's Hot 10 singles of 1990</h1>
                <ol>
                    <li>"Hold On" - Wilson Phillips</li>
                    <li>"It Must Have Been Love" - Roxette</li>
                    <li>"Nothing Compares 2 U" - Sinéad O'Connor</li>
                    <li>"Poison" - Bell Biv DeVoe</li>
                    <li>"Vogue" - Madonna</li>
                    <li>"Vision of Love" - Mariah Carey</li>
                    <li>"Another Day in Paradise" - Phil Collins</li>
                    <li>"Hold On" - En Vogue</li>
                    <li>"Cradle of Love" - Billy Idol</li>
                    <li>"Blaze of Glory" - Jon Bon Jovik</li>
                </ol>
            </section>
        `);
    } else if (request.url === '/counter') {
        count++;
        response.write(`
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bare-css@2.0.3/css/bare.min.css" />
            <section>
                <h1>Number of times listened to "Nothing Compares 2 U"</h1>
                <h2>${count}</h2>

                <p><a href="/counter">Count again!</a></p>
            </section>
        `);
    } else {
        response.write('<h1>404</h1>');
    }

    response.end();
}

const server = http.createServer(serve);
server.listen(8000); // uncommented this to get the server running

