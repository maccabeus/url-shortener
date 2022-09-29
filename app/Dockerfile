
# We are using the LTS node version
FROM node:18-alpine

# Set environment to production
ENV NODE_ENV=production

# Create our app working directory
WORKDIR /usr/src/app

# expose port 4000 for binding`
EXPOSE 3000

# copy the packages files
COPY package*.json ./

RUN npm install 
# Copy all installations to the image
COPY . .
CMD ["npm",  "start"]