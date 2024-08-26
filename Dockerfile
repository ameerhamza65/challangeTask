# Use the official Node.js image as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the React app
RUN npm run build

# Install a lightweight web server to serve the static files
RUN npm install -g serve

# Expose the port that the server will run on
EXPOSE 3000

# Start the application using the 'serve' command
CMD ["serve", "-s", "build", "-l", "3000"]
