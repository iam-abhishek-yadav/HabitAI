# Use the official Node.js 20 image as the base image
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install all dependencies (including dev dependencies for local development)
RUN npm ci

# Copy the rest of the application code
COPY . .

# Generate Prisma client
RUN npx prisma generate

# Expose the port the app runs on
EXPOSE 3000

# Start the development server with hot reload
CMD ["npm", "run", "dev"]
