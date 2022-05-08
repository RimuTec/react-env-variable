# Creating Container Images for Deployment

The following commands must be executed **at the root** of the repository and **outside of the dev container**

## Build
To build the container image:

```bash
docker-compose -f ./infra/docker-compose.prod.yml build
```

## Start
To start a container based on the image:

```bash
docker-compose -f ./infra/docker-compose.prod.yml up -d
```

## Stop
To stop the container

```bash
docker-compose -f ./infra/docker-compose.prod.yml down
```

