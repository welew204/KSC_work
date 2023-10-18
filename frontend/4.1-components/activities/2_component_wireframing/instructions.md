Go through each of the images, and write down how you might break them down
into components.

1. GitHub
>>> I'd start with a backdrop page, with...
- 'badge components' (upper right)
- "tab components" that handle each view
- within each tab, have components for listed items, with buttons/links as needed

2. Google Slides
>>> again, start w/ backdrop component w/ global buttons/func; wihtin I'd have:
- sidebar, main view, edit area (just pipe update to correct state, but component can stay same)
- sidebar: have 1 thumbnail component per page
- main view: have 'page detail' component

3. Slack
>>> sidebar component, feed component, search component (that doesn't change when different channel/feed gets selected), text field (bottom of screen)
- sidebar: search box, lists channels, messages, apps,
- feed component: can be swapped for messaging screen instead
---> the idea is that ONLY the parts that get visually updated reload/change; the text areas, sidebar, etc stay and look 'structural' 
4. Reddit
>>> frame component, holding everything else:
- main topic feed (listing topic components)
- (right) sidebar w/ community details
- (not visible) topic view component when topic LI is clicked
 
If you have extra time, try doing Reddit, and Gmail.

