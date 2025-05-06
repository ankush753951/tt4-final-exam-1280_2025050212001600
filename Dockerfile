# Build stage for backend
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS backend-build
WORKDIR /src/backend
COPY backend/StudentAttendance.API/StudentAttendance.API.csproj backend/StudentAttendance.API/
RUN dotnet restore "backend/StudentAttendance.API/StudentAttendance.API.csproj"
COPY backend/ .
RUN dotnet publish "StudentAttendance.API/StudentAttendance.API.csproj" -c Release -o /app/backend

# Build stage for frontend
FROM node:18-alpine AS frontend-build
WORKDIR /src/frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ .
RUN npm run build

# Production stage
FROM nginx:alpine
WORKDIR /usr/share/nginx/html

# Copy backend files
COPY --from=backend-build /app/backend /app/backend

# Copy frontend files
COPY --from=frontend-build /src/frontend/build /usr/share/nginx/html

# Copy nginx configuration
COPY default.conf /etc/nginx/conf.d/default.conf

# Install curl for healthcheck
RUN apk add --no-cache curl

# Health check
HEALTHCHECK --interval=30s --timeout=3s \
    CMD curl --fail http://localhost:80 || exit 1

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"] 