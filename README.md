# End-to-End CI/CD Pipeline for Node.js REST API

![CI/CD Pipeline](https://github.com/muhmubeen1/devops-ci-cd-node-api/actions/workflows/deploy.yml/badge.svg)

## Project Overview

This project demonstrates an end-to-end CI/CD pipeline for a Node.js REST API using Docker and GitHub Actions.

The application is automatically built and containerized whenever code is pushed to the main branch. The Docker image is then pushed to Docker Hub using secure GitHub Secrets.

## Architecture Diagram

```text
Developer
    │
    ▼
 GitHub Repository
    │
    ▼
 GitHub Actions
    │
    ▼
 Docker Build
    │
    ▼
 Docker Hub
```

## Tech Stack

- Node.js
- Express.js
- Docker
- GitHub Actions
- Docker Hub
- Git

## API Endpoints

### Home Endpoint

```http
GET /
```

Response:

```json
DevOps CI/CD Node.js API is running
```

### Health Check Endpoint

```http
GET /health
```

Response:

```json
{
  "status": "success",
  "message": "API is healthy"
}
```

## Docker Commands

### Build Image

```bash
docker build -t devops-ci-cd-node-api .
```

### Run Container

```bash
docker run -p 3000:3000 devops-ci-cd-node-api
```

### Access Application

```text
http://localhost:3000
```

## CI/CD Workflow

The GitHub Actions workflow automatically performs:

1. Checkout Source Code
2. Login to Docker Hub
3. Build Docker Image
4. Push Docker Image to Docker Hub

Workflow File:

```text
.github/workflows/deploy.yml
```

## Docker Hub Image

```text
heraclitus01/devops-ci-cd-node-api
```

## Future Improvements

- Automated Testing
- Kubernetes Deployment
- Terraform Infrastructure
- AWS EC2 Deployment
- Monitoring with Prometheus & Grafana

