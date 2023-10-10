# Node & NPM

Ensure you have node and npm by running each of the following commands:

        node --version
        npm --version

If you get "command not found", that means you don't have node or npm
installed. Install it:

        Ubuntu Linux:
            sudo apt-get install nodejs
        macOS:
            brew install node


# Using create-react-app

Once installed, it can be used to start new React projects. In a terminal that
is in the directory where you want to work, type something like:

    npx create-react-app my-new-project

With "my-new-project" being the name of the project you are creating, in
kebab-case. This might take a minute, as it downloads and installs about 200
megabytes of dependencies. React is huge... both in popularity, and in size!

Once it's done, cd into the new directory created, as such:

        cd my-new-project
        ls

You will see something like:

        node_modules  package.json  public  README.md  src

See the package.json? Good, you are in the right spot.  Finally, run:

        npm run start

If all went well, you should see a "Welcome to React" example application!



# Avoiding doing create react-app-again

Normally, whenever you start work for the first time on a new project, such as
one that another person started and you are just modifying or getting running
on your machine, you will want to run "npm install" to install all of the
"dependencies" for that project. Running "npm install" without anything after
it will look into the package.json file for what it needs to install and
install all of those.

The reason we want to install new copies of all packages every time is because
different projects may require different versions of React and other
dependencies. React, notoriously, changes very quickly, so you'll have to get
used to using various versions depending on when the project you were working
on was started.

However, this can take a long time, and if you are working on many projects one
after another, e.g. during class activities, then this can be a frustratingly
slow process.

Keep on reading for hints on how to avoid that long step.



## Easiest: Copying previous `node_modules`

This one is simple:

- From a project you know works, copy the `node_modules` directory into your
  new project (e.g., next to the package.json)

- Feel free to use your file browser for this. Otherwise, you can use `cp -r`
  to do it in Terminal.

- If you are installing more than just create-react-app -- in two weeks we will
  be installing react-router -- then you will have to be careful to copy from
  another project that has the right thing installed (or just suffer through
  installing that extra package the usual way, with npm install)



## Harder: Using symbolic links

Here's a little trick that's even faster than copying the entire
`node_modules`:

1. First, copy a "good" node modules that has react installed into your home
directory, with some name you will remember:

        cp -r node_modules ~/.global_react_nm

2. Now, whenever you want to use that "global" `node_modules`, you can use a
"symbolic link" to include it in your current directory. Symbolic links don't
copy, they instead just have a "fake" directory that actually links to a real
directory in a central place. The command is as follows:

        ln -s ~/.global_react_nm node_modules

