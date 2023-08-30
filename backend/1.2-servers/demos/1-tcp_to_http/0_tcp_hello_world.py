import socketserver

class RequestHandler(socketserver.StreamRequestHandler):
    def handle(self):
        # Every time a request comes in, it calls this method

        # The request data is in a file-like object called 'self.rfile' that we
        # can read. We need to "decode" it since it comes in as bytes.
        print('---- REQUEST -------------')
        request = self.rfile.readline().decode('ascii').strip()
        print(request)
        print('--------------------------')

        # Just say the same thing to all requests
        self.wfile.write(b'Hello Server World!')
        self.wfile.close()


if __name__ == "__main__":
    PORT = 8080
    server = None
    try:
        socketserver.TCPServer.allow_reuse_address = True
        server = socketserver.TCPServer(('', PORT), RequestHandler)
        print('--------> Starting server on port ', PORT)
        server.serve_forever()

    finally:
        print('\n-------> Shutting down the web server')
        if server:
            server.server_close()

