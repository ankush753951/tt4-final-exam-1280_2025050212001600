# Build stage
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

# Copy csproj and restore as distinct layers
COPY ["StudentAttendance.API/StudentAttendance.API.csproj", "StudentAttendance.API/"]
RUN dotnet restore "StudentAttendance.API/StudentAttendance.API.csproj" --disable-parallel

# Copy everything else and build
COPY . .
WORKDIR "/src/StudentAttendance.API"
RUN dotnet build "StudentAttendance.API.csproj" -c Release -o /app/build

# Publish stage
FROM build AS publish
RUN dotnet publish "StudentAttendance.API.csproj" -c Release -o /app/publish

# Final stage
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS final
WORKDIR /app
COPY --from=publish /app/publish .

# Install wget for healthcheck
RUN apt-get update && apt-get install -y wget && rm -rf /var/lib/apt/lists/*

ENV ASPNETCORE_URLS=http://+:5000
ENV ASPNETCORE_ENVIRONMENT=Development

EXPOSE 5000

ENTRYPOINT ["dotnet", "StudentAttendance.API.dll"] 