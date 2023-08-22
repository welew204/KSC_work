Challenge #1
---------------
# DONE

Add in a `<link>` tag to enable the Bootstrap CDN.
Do this by Googling Bootstrap CDN and copy & pasting the top thing you find.


Challenge #2
---------------
# DONE

Things still look wrong. This is because that in addition to the Bootstrap
CSS, there is custom CSS for the site also.

Add in a link tag to include the local blog.css (similar to what we've done in
previous activities).

- Hint: The link tag for custom CSS (which this blog.css would be) always goes
  after the CDN / Bootstrap links.


Challenge #3
---------------
# DONE

Things look almost correct, but we are missing the right font.

Use Google Font to include "Playfair Display"


Bonus Challenge
------------------
# DONE

Look up "Bootswatch CDN". Can you get one of these Bootstrap alternate color
schemes or themes working?


Advanced Bonus Challenge
-------------------------

# DONE

For certain features of Bootstrap to work, notably drop-down menus and modals,
you have to include a "script" tag to connect your page to Bootstrap's
JavaScript CDN.

- Hint: JavaScript script tags can go in the `<head>` like for CSS, but a
  traditional spot for them is right before the closing `</body>` tag at the
  end (in the `<head>` can be slower).

- To confirm its working, try including the Modal component and getting it to
  pop up when you click a button (we'll learn more about this later in this
  lesson):
    - https://getbootstrap.com/docs/5.0/components/modal/
