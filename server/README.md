# A simple URL Shortener Server

This is a `Simple URL shortener` API section of our application. The application utilizes Javascript / Nodejs `Express framework` , while using `MongoDB` for database management.

The default application `port` is `4001`.

## Setting up local database

Check the `/.env` file to see the `Environment variables` used within the application.

## Running Automated build during development

This application uses `typescript`, `watchman`, and `webpack` to setup an automated build `environment`
To automate the `build process`, while developing, run the following `command` in your `CLI` before you start code editing.

```bash
npm run tsc

```

## Running application locally

You can deploy the application locally by following te following steps.

### Creating a local Docker Image

To create an image of our application locally, run the following command:

```bash
docker build -t maccabeus/url-shortener-server .
```

#### Running the Docker Image

To run application, enter the following command. Please `note` that you must have installed `Docker Desktop` before you can perform these steps.

```bash
docker run -dp 4001:40001  maccabeus/url-shortener-server
```

### Run application without creating docker image

Run the following commands to install dependencies

```bash
npm install
```

Then run the command below to start the `shortener` server

```bash
npm start
```

Once the application starts, you can check the following URL to ensure that the server is working:

- [link]http://localhost:4001

## Available API

The following API are available within the application. Don't forget to use your local development server path
if you are running application locally.

### Shortener API

- creates a new shortened `URL`. Make a `POST` request to the link with the `url` url key in `post body` as indicated below:
- [api-path]http://localhost:4001/short

```js
const postData = {
  url: "https://longUrlToComvert.com/pages/22",
};
```
