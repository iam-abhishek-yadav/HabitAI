# HabitAI

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) that uses PostgreSQL as the database with Prisma ORM.

## Prerequisites

- [Docker](https://docs.docker.com/get-docker/) and [Docker Compose](https://docs.docker.com/compose/install/)
- [Node.js](https://nodejs.org/) (version 20 or higher) - only needed for local development without Docker
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) - only needed for local development without Docker

## Getting Started

### Quick Start with Docker

1. **Clone the repository and navigate to the project directory:**
   ```bash
   git clone https://github.com/iam-abhishek-yadav/HabitAI.git
   cd HabitAI
   ```

2. **Start the application with Docker Compose:**
   ```bash
   docker-compose up --build
   ```
   This will:
   - Start PostgreSQL database
   - Wait for PostgreSQL to be healthy
   - Build and start the Next.js application
   - Automatically run database migrations

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

### Database Management

- **PostgreSQL runs in Docker** on port 5432
- **Database credentials:** 
  - Database: `habitai`
  - Username: `habitai_user`
  - Password: `habitai_password`
- **Access database directly:** `docker-compose exec postgres psql -U habitai_user -d habitai`

## Available Scripts

- `npm run dev` - Start the development server with hot reload
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint

## Useful Commands

### Docker Commands
- `docker-compose up --build` - Start both PostgreSQL and the app
- `docker-compose up postgres -d` - Start only PostgreSQL database
- `docker-compose down` - Stop all services
- `docker-compose logs` - View logs for all services
- `docker-compose logs postgres` - View database logs
- `docker-compose logs app` - View app logs

### Development Commands (when running locally)
- `npx prisma studio` - Open Prisma Studio (database GUI)
- `npx prisma migrate dev` - Run database migrations
- `npx prisma generate` - Generate Prisma client

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
