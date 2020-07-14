## Using the application generator

You should already have installed the generator as part of  [setting up a Node development environment](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/development_environment). As a quick reminder, you install the generator tool site-wide using the NPM package manager, as shown:

```bash
npm install express-generator -g
```
## Creating the project

For the sample  _Learn Express_  app we're going to build, we'll create a project named  _learn-express_ using the  _EJS_  template library and no CSS engine.

First, navigate to where you want to create the project and then run the  _Express Application Generator_  in the command prompt as shown:

```bash
express learn-express --view=ejs
```

## Running the skeleton website

At this point, we have a complete skeleton project. The website doesn't actually  _do_  very much yet, but it's worth running it to show that it works.

1.  First, install the dependencies (the  `install`  command will fetch all the dependency packages listed in the project's **package.json**  file).
    
    ```bash
    cd learn-express
    npm install
    ```
    
2.  Then run the application.
       ```bash
	   npm start
    ```
        
3.  Then load  [http://localhost:3000/](http://localhost:3000/)  in your browser to access the app.

## Enable server restart on file changes

Any changes you make to your Express website are currently not visible until you restart the server. It quickly becomes very irritating to have to stop and restart your server every time you make a change, so it is worth taking the time to automate restarting the server when needed.

A convenient tool for this purpose is  [nodemon](https://github.com/remy/nodemon). This is usually installed globally (as it is a "tool"), but here we'll install and use it locally as a  _developer dependency_, so that any developers working with the project get it automatically when they install the application. Use the following command in the root directory for the skeleton project:

```bash
npm install --save-dev nodemon
```

If you open your project's  **package.json**  file you'll now see a new section with this dependency:

```json
 "devDependencies": {
    "nodemon": "^2.0.4"
} 
```

Find the  `scripts`  section of your package.json. Initially, it will contain one line, which begins with  `"start"`. Update it by putting a comma at the end of that line, and adding the  `"devstart"`  line seen below:

```json
  "scripts": {
    "start": "node ./bin/www",
	"devstart": "nodemon ./bin/www"
  },
  ```
  
We can now start the server in almost exactly the same way as previously, but with the  `run devstart`  command specified:

-   On Windows, use this command:
    
    ```bash
    npm run devstart
    ```

## The generated project

Let's now take a look at the project we just created.

### Directory structure

The generated project, now that you have installed dependencies, has the following file structure (files are the items  **not**  prefixed with "/"). The  **package.json**  file defines the application dependencies and other information. It also defines a startup script that will call the application entry point, the JavaScript file  **/bin/www**. This sets up some of the application error handling and then loads  **app.js**  to do the rest of the work. The app routes are stored in separate modules under the  **routes/**  directory. The templates are stored under the /**views**  directory.

```
/learn-express
    /bin
        www
    /node_modules
        [about 6700 subdirectories and files]
    /public
        /images
        /javascripts
        /stylesheets
            style.css
    /routes
        index.js
        users.js
    /views
        error.ejs
        index.ejs
    app.js
    package.json
    package-lock.json
```
    
### package.json

The  **package.json** file defines the application dependencies and other information:
```json
{

	"name": "learn-express",
	"version": "0.0.0",
	"private": true,
	"scripts": {
		"start": "node ./bin/www",
		"devstart": "nodemon ./bin/www"
	},
	"dependencies": {
		"cookie-parser": "~1.4.4",
		"debug": "~2.6.9",
		"ejs": "~2.6.1",
		"express": "~4.16.1",
		"http-errors": "~1.6.3",
		"morgan": "~1.9.1"
	},
	"devDependencies": {
		"nodemon": "^2.0.4"
	}
}
```
