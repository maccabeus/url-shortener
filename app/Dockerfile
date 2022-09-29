
# We are using the LTS node version
FROM node:18-alpine

# Set environment to production
ENV NODE_ENV=production

# Create our app working directory
WORKDIR /usr/src/app

# copy the packages files
COPY package*.json ./
# Copy all installations to the image
COPY . .
# ==== BUILD =====
# Install dependencies (npm ci makes sure the exact versions in the lockfile gets installed)
RUN npm ci 
# Build the app
RUN npm run build
# RUN npm install 
# Expose the port on which the app will be running (3000 is the default that `serve` uses)
EXPOSE 3000
# Start the app
CMD [ "npx", "serve", "build" ]