# Step 1: Build the React app
FROM node:18 AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the React app for production
RUN npm run build

# Step 2: Serve the React app using Nginx
FROM nginx:alpine

# Copy the build folder from the previous stage to Nginx's default public directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose the app to port 5575
EXPOSE 5575

# Run the Nginx server
CMD ["nginx", "-g", "daemon off;"]
