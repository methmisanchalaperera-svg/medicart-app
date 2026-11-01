# MediCart starter

A learning/demo online pharmacy application for the MediCart DevOps assignment.

## Prerequisites
- Node.js 20+
- npm
- Docker Desktop (optional, for PostgreSQL)

## Run locally
1. Open this folder in VS Code.
2. In the terminal run `npm install`.
3. Run `npm install --prefix server` and `npm install --prefix client`.
4. Start the API: `npm start --prefix server`
5. In another terminal start the website: `npm run dev --prefix client`
6. Open the local URL printed by Vite (usually http://localhost:5173).

The demo works with sample product data and does not require PostgreSQL to show the website.
The API currently uses sample data so the first version is easy to run. `docker-compose.yml`
and the database environment variables are included as a starting point for the next step.

## DevOps learning checklist
- [ ] Push the project to a GitHub repository.
- [ ] Create a feature branch and open a pull request.
- [ ] Confirm GitHub Actions runs the build and tests.
- [ ] Add a deliberately failing test and capture the failed run, then revert/fix it.
- [ ] Add Terraform configuration for the chosen target environment.
- [ ] Add a deployment job that runs only after checks pass.

This is a demonstration project, not a real pharmacy or medical service. Product data is illustrative.
Do not use it for real medicine sales, prescriptions, payments, or patient data.
