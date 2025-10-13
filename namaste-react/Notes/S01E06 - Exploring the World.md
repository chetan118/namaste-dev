# Episode-06 | Exploring the World

## Monolith Architecture

- Traditionally, all apps used this
- One big project has all the code
  - API
  - UI
  - Authentication
  - DB
  - SMS/Email Notifications

## Microservice Architecture

- Different service for different jobs
  - Backend
  - UI
  - Authentication
  - DB connections
  - SMS notifications
  - Email notifications
- Separation of concerns
- Single responsibility principle
- Each team works on their own individual projects
- Different tech stacks for different services

### Connections of services

- On different ports we can deploy different services
- All ports are mapped to the domain name
- Example
  - / - :1234 - UI
  - /api - :1000 - Backend
  - /sms - :3000 - SMS

## Connection React frontend with the Backend

Two approaches to fetch data and render

1. Page Loads -> API call made -> Render Response
2. Page loads -> Render UI -> API call made -> Re-render the app with the data

In React, we'll always use the second approach.
