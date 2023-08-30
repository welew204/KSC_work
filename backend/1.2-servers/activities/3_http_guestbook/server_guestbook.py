import socketserver
import random
import requests


def index():
    print('----- index')
    return '''
        <h1>Welcome to my home page!</h1>
        <a href="/about-me">About me</a> <br />
        <a href="/contact">Contact me</a> <br />
        <a href="/bio">My Bio</a> <br />
        <a href="/m8ball">Try the Magic 8ball (of BS)!</a> <br />
    '''


def about_me():
    print('----- about-me')
    return '''
        <h1>About me</h1>
        <p>My name is Ash Ketchum</p>
        <p>I have a Pikachu</p>
    '''


def m8ball():
    print('----- magik time!')
    special_thing = requests.get(
        'https://corporatebs-generator.sameerkumar.website/').json()
    # print(special_thing)
    return f'''
        <h1>Magic Eight Ball</h1>
        <p>The thing you need to remember is to always...  <em>{special_thing["phrase"]}</em></p>
        <a href="/m8ball"><h3>Try again?</h3></a>
    '''


def bio():
    print('----- bio')
    return '''
        <h1>BIOgraphy</h1>
        <p>I grew up a poor white boy in GA with no rhythm...</p>
        <a href="/"><h3>Go Home</h3></a>
    '''


def contact_me(path):
    print('---CONTACT ME')
    v1 = path[16:]
    name = v1
    print('---')
    list_of_contacts = [f"<li>{gname}</li>" for gname in guestbook]
    contact_lis = ''
    if guestbook == [] and name != '':
        contact_lis += f"<li>{name}</li>\n"
    else:
        for gname in guestbook:
            print("guestname: ", gname)
            contact_lis += f"<li>{gname}</li>\n"
        if name != '':
            contact_lis += f"<li>{name}</li>\n"

    body_string = f'''
        <h1>Contact</h1>
        <form method="GET" action="/contact">
            <input name="myname" placeholder="Your name" />
            <button>Submit</button>
        </form>
        '''
    guests = f'''
        <ul>
            {contact_lis}
        </ul>
    '''
    final = body_string+guests if len(contact_lis) > 0 else body_string
    print(final)
    return final, name


class RequestHandler(socketserver.StreamRequestHandler):
    def handle(self):
        # Every time a request comes in, it calls this method

        # Step 1, parse the request data
        # Get the top line of the request
        top_line = self.rfile.readline().decode('ascii')
        method, path, http_version = top_line.split(' ', 2)
        print('--> Receiving %s request for %s' % (method, path))

        # Get the HTML value associated with the path that is getting requested
        # from the pages dictionary
        if path == '/':
            body = index()
        elif path == '/about-me':
            body = about_me()
        elif path == '/m8ball':
            body = m8ball()
        elif path == '/bio':
            body = bio()
        elif path.startswith('/contact'):
            body, name = contact_me(path)
            if len(name) > 0:
                guestbook.append(name)
            print(guestbook)
        else:
            # Couldn't find page, send back 404 error page, and be sure to set
            # the 404 status code in the header
            body = '<h1>Oh no, 404! Jigglypuff prolly stole it.</h1>'

        # Write the response headers text/html
        self.wfile.write(b'HTTP/1.0 200 OK\n')
        self.wfile.write(b'Content-Type: text/html\n')

        # The HTTP standard mandates an extra return character here, separating
        # the headers from the body of the response.
        self.wfile.write(b'\n')
        self.wfile.write(bytes(body, 'ascii'))
        self.wfile.close()


###################################################################
# NOTE: The rest of this file is some dense boilerplate that's not useful for
# your learning to understand.
if __name__ == "__main__":
    PORT = 8080
    server = None
    guestbook = []
    try:
        socketserver.TCPServer.allow_reuse_address = True
        server = socketserver.TCPServer(('', PORT), RequestHandler)
        print('--------> Starting server on port ', PORT)

        server.serve_forever()

    finally:
        print('\n-------> Shutting down the web server')
        if server:
            server.server_close()
