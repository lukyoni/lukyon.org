# Lukyon's Website
Hello! I'm lukyon. This website was inspired by https://pea.moe. There is currently nothing on it but it will become very important in the future. 

![Screenshot](./images/lukyon_website.png)

## Build & Serve locally

1. Build docker image `dockers/lukyon.org-nginx.dockerfile`
    ```
    $ docker build                               \
        -f ./dockers/lukyon.org-nginx.dockerfile \
        -t lukyon.org:latest                     \
        .
    ```
2. Run docker
    ```
    docker run                          \
        --detach                        \
        --name lukyon.org               \
        --publish 127.0.0.1:4000:80/tcp \
        --restart always                \
        lukyon.org:latest
    ```
3. Visit `http://localhost:4000` in your browser

## Author
lukyon (C) 2025
