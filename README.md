# PhoneBook
[![CI/CD pipeline](https://github.com/thomsva/PhoneBook/actions/workflows/ci-cd-pipeline.yml/badge.svg)](https://github.com/thomsva/PhoneBook/actions/workflows/ci-cd-pipeline.yml) [![Healthcheck](https://github.com/thomsva/PhoneBook/actions/workflows/healthcheck.yml/badge.svg)](https://github.com/thomsva/PhoneBook/actions/workflows/healthcheck.yml)

## Running the app locally
- Run `npm install` in the root directory and frontend directory
- Build frontend with `npm run build:frontend`. This command also copies the build directory to /build to be served by express. 
- Create a .env file and provide values for MONGODB_URI and PORT.
- Start in development mode with `npm run watch` or in production mode with `npm start`.

## Build pipeline
The application is built using GitHub Action and deployed to [heroku](https://phonebook911.herokuapp.com/). 
### Some troubles during the journey
During the build, a production version of the frontend is created, and then moved to a directory called build. But the build directory appeared to be missing on Heroku. I added an ls command to the GitHub action to check if the build folder is there. It was. Then I used `heroku ps:exec -a phonebook911` to see what's on the server. The build folder was missing. On the Heroku server I went ahead and installed frontend dependencies, built the frontend and copied the build folder to the correct location. After this the application worked. But after pushing a new version it will again have no build folder... 

After trying many different things, the solution was to remove the build from gitignore. It seems like .gitignore is obeyed when GH Action pushes the files to Heroku. 

## Healthcheck
The Healthcheck action is scheduled to run every day but can also be triggered manually to run at any time. 