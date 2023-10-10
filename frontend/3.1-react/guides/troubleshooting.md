macOS: Installation problem with "dyld" and "i18n"
----------------------------------------------------------------------

Problem: On macOS, after installing node.js, it crashes with the following:

        dyld: Library not loaded: /usr/local/opt/icu4c/lib/libicui18n.64.dylib
            Referenced from: /usr/local/bin/node
            Reason: image not found
        zsh: abort      node

Solution: Try the following, and try running it again:

        brew upgrade node




GNU/Linux: How to upgrade node
----------------------------------------------------------------------

Some Linux distributions might not have a recent enough version of node/npm/npx

- When you run `node --version`, and you get `v8.9` or earlier, you might want
  to update it.

- Similarly, your version of `npm` might be too old to have `npx`. You might
  get an error like:

        Command 'npx' not found, did you mean:

            command 'upx' from snap upx (v0.2.3)
            command 'nax' from snap nax (0.0.35)
            command 'gpx' from deb gpx
            command 'np' from deb mosquitto-auth-plugin
            command 'nyx' from deb nyx
            command 'nex' from deb nvi
            command 'npm' from deb npm

- **Solution:** This command will install v16 (a recent version) globally using
  the tool called `n` (yes, it's a single letter):

        sudo npm install -g n
        sudo n 16



GNU/Linux: node-tar unsupported version
----------------------------------------------------------------------

If you get an error of node-tar being unsupported, that means you have probably
installed a few versions of node in a way that is incompatible. Here's a
potential solution (for Debian or Ubuntu):

        # Remove the OS-installed version of node + dependencies
        sudo apt-get autoremove nodejs

        # Re-install the OS-installed version of node + dependencies
        sudo apt-get install nodejs

        # Use the OS-installed version of NPM to upgrade node to a more recent
        # version
        sudo npm install -g n
        sudo n 14


