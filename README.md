# Evora Beauty Website

A modern single-page beauty business website built with React, Vite, CSS, and Docker.

## Local Development

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

## Production Build

```bash
npm run build
```

## Docker Build

```bash
docker build -t beauty-website .
```

## Docker Run

```bash
docker run -d -p 3000:3000 --name beauty-website beauty-website
```

Open:

```text
http://localhost:3000
```

## Check Running Containers

```bash
docker ps
```

## Check Logs

```bash
docker logs beauty-website
```

## Stop Container

```bash
docker stop beauty-website
```

## Remove Container

```bash
docker rm beauty-website
```
