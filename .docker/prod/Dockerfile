# Step 1: Build the React application
FROM node:16-alpine AS node

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Step 2: Serve the application using Nginx
FROM nginx:alpine

# Copy the build output to the Nginx html folder
COPY --from=node /app/dist /usr/share/nginx/html

# Copy custom Nginx configuration if needed (optional)
COPY /production/nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 5173
EXPOSE 5173

# Command to run Nginx
CMD ["nginx", "-g", "daemon off;"]