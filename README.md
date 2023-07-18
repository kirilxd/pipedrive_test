## Description

Pipedrive DevOps position test task

## Running the app

Add your API_KEY to .env file

```bash
# build docker image
$ docker build --tag pipedrive-test .

# run the app on port 3000
$ docker run -d -p 3000:3000 pipedrive-test
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Development steps

1. Developing application using NestJS and Typescript. For accessing Pipedrive API and forwarding requests to it `@nestjs/axios` is used.
2. Creating `Dockerfile` to provide ability to run application in a container.
3. Adding logging using defalt nestjs logger.
4. Adding `/metrics` endpoint using nestjs-prometheus library.
5. Setting up CI/CD using Github Actions. Testing flows by creating separate branch, PR and merging it.

## License

Nest is [MIT licensed](LICENSE).
