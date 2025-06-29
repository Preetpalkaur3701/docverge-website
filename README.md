# Release on Github

```bash
docker build -t docverge . --no-cache
docker container rm docverge-container
docker create --name docverge-container docverge:latest
rm -rf docs # very important
docker cp docverge-container:/usr/share/nginx/html ./docs
echo "doc-verge.com" > docs/CNAME
```

# Run production

```bash
docker build -t docverge .
docker container rm docverge && docker run -it -p 8090:80 --name docverge docverge:latest
```

# Run dev mode

```bash
docker build -t docverge  -f Dockerfile.dev .
docker container rm docverge && docker run -it -p 8090:5173 --name docverge -v /Users/ambu/Downloads/tmp/docverge-website/src:/app/src  docverge:latest
```
opens http://localhost:8090
