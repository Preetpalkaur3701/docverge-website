# Stage 1: Build the React application
FROM node:20-alpine as builder

WORKDIR /app

# Copy package files first for better caching
COPY package.json pnpm-lock.yaml ./

# Install pnpm
RUN npm install -g pnpm

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source code (excluding node_modules)
COPY . .

# Build the React app
RUN pnpm run build

# Stage 2: Serve the static files with Nginx
FROM nginx:alpine

# Copy the built React app from the builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]


