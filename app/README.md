# A simple Gateway and devices management App
This application was build with `React` and `Material UI`.

The default application `port` is `3000`.

## Running application locally
To run the Application, you either run directly or create a `docker` image.

### Creating a local Docker Image
To create an image of our application locally, run the following command:
```bash
docker build -t musala/client-app:1.0.0  .
```

#### Running the Docker Image
To run application, enter the following command. Please `note` that you must have installed `Docker Desktop` before you can perform these steps. 
```bash
docker run -dp 3000:3000  musala/client-app:1.0.0
```

### Running application locally
Install dependencies `NPM` `packages`
```npm install 
docker 

Once dependencies are successfully installed, run the application using the command:
```bash
npm start
```