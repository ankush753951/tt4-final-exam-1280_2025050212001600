# Build stage
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

# Copy csproj and restore dependencies
COPY ["StudentAttendance.API/StudentAttendance.API.csproj", "StudentAttendance.API/"]
RUN dotnet restore "StudentAttendance.API/StudentAttendance.API.csproj"

# Copy the rest of the code
COPY . .
WORKDIR "/src/StudentAttendance.API"

# Build the application
RUN dotnet build "StudentAttendance.API.csproj" -c Release -o /app/build

# Publish stage
FROM build AS publish
RUN dotnet publish "StudentAttendance.API.csproj" -c Release -o /app/publish

# Final stage
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS final
WORKDIR /app
COPY --from=publish /app/publish .

# Add healthcheck
HEALTHCHECK --interval=30s --timeout=3s \
    CMD curl --fail http://localhost:5000/health || exit 1

EXPOSE 5000

ENV ASPNETCORE_URLS=http://+:5000

ENTRYPOINT ["dotnet", "StudentAttendance.API.dll"] 