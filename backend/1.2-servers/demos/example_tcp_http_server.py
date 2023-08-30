# This server implements the HTTP protocol

import socketserver

# At the top we specify for this example simple hardcoded HTML pages
pages = {
    '/': '''
        <h1>Welcome to my home page!</h1>
        <a href="/about-me">About me</a> <br />
        <a href="/contact">Contact me</a> <br />
        <a href="/does-not-exist">Example broken link</a> <br />
    ''',

    '/about-me': '''
        <h1>About me</h1>
        <p>My name is Ash Ketchum</p>
        <p>I have a Pikachu</p>
    ''',

    '/contact': '''
        <h1>Contact me</h1>
        <p>Send Pokemail to Palette Town</p>
    ''',

    404: '''
        <h1>Uh oh, no page here!</h1>
        <p>Maybe Gary stole it :p</p>
    '''
}


class MyTCPHandler(socketserver.StreamRequestHandler):
    def handle(self):
        '''
        Every time a request comes in, it handles it here.
        '''

        ## Step 1, parse the request data
        # Only the top line is useful for this simple implementation
        top_line = self.rfile.readline().decode('ascii')
        method, path, http_version = top_line.split(' ', 2)
        print('--> Receiving %s request for %s' % (method, path))


        # Get the HTML value associated with the path that is getting requested
        # from the pages dictionary
        if path in pages:
            body = pages[path]
            self.wfile.write(b'HTTP/1.0 200 OK\n')
        else:
            # Couldn't find page, send back 404 error page, and be sure to set
            # the 404 status code in the header
            body = pages[404]
            self.wfile.write(b'HTTP/1.0 404 Not Found\n')

        # Write the response headers text/html 
        self.wfile.write(b'Content-Type: text/html\n')

        # The HTTP standard mandates an extra return character here, separating
        # the headers from the body of the response
        self.wfile.write(b'\n')
        self.wfile.write(bytes(body, 'ascii'))
        self.wfile.close()

def main():

    # Create the server, binding to localhost on port 8080
    server = None
    try:
        socketserver.TCPServer.allow_reuse_address = True
        server = socketserver.TCPServer(('', 8080), MyTCPHandler)
        # Activate the server; this will keep running until you interrupt the
        # program with Ctrl-C
        server.serve_forever()

    except KeyboardInterrupt:
        print('^C received, shutting down the web server')
        server.socket.close()

    finally:
        if server:
            server.socket.close()

if __name__ == "__main__":
    main()

