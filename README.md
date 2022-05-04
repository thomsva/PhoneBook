# PhoneBook
[![CI/CD pipeline](https://github.com/thomsva/PhoneBook/actions/workflows/ci-cd-pipeline.yml/badge.svg)](https://github.com/thomsva/PhoneBook/actions/workflows/ci-cd-pipeline.yml)

## Running the app locally
- Run `npm install` in the root directory and frontend directory
- Build frontend with `npm run build:frontend`. This command also copies the build directory to /build to be served by express. 
- Create a .env file and provide values for MONGODB_URI and PORT.
- Start in development mode with `npm run watch` or in production mode with `npm start`.

