This is an open-ended activity, with no discrete challenges.  For this
activity, you'll need to write both HTML and CSS from scratch to recreate the
mockup (see `futurama_mockup.png`).

**Time to put together all the CSS and HTML you've learned thus far!**



Tip: Writing necessary HTML
---------------------------------

- Look for repeating patterns in the mock-up

- Think about grouping together certain elements into `<div>` elements, giving
  those div elements classes of names you invent (such as `<div
  class="ProfileCard"> ....</div>`) and then giving those classes you created
  the right CSS to lay everything out and style it as you see in the image.




Tip: Writing necessary CSS
---------------------------------

- Look for repeating patterns in the mock-up. This is your clue of where to
  start.

- Use Grid, Flex, margins, padding, etc -- use whatever tool works!

- The shadow can be created with box-shadow


Tip: Following BEM
---------------------------------

This is a good opportunity to follow Block Element Modifier (BEM)
naming-convention practices. The solution should have at least one Block (aka
Component), and probably at least a couple Block Elements.

- NOTE: Most resources online that document BEM using the original `kebab-case`
  and `snake_case` capitalization, while this course (and many React
  developers, including the React official documentation) use `CamelCase` (aka
  `PascalCase`) style of capitalization.
- Read more here (uses kebab/snake capitalization system):
    - <http://getbem.com/naming/>
    - <https://en.bem.info/methodology/quick-start/>
    - <https://css-tricks.com/bem-101/>
- For the CamelCase version, read more here:
    - <https://github.com/suitcss/suit/blob/master/doc/naming-conventions.md>



Summary of the syntax below:

        .BlockName {} /* Block */
        .BlockName-elementName {} /* Element */
        .BlockName--modifierName {} /* Modifier */
