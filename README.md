Um die unzuverlässige API vor den Endanwendern zu verschleiern habe ich die nodejs Anwendung mittels eines NGINX Proxyserver gehostet.

Es werden zwei Dockerimages benötigt.

- Das offizielle NGINX Image
- Ein lokal erstelltas Nodejs Image

## Installation 

1. Repo clonen
2. Rootverzeichnis des Repos im Terminal öffnen
3. sudo docker pull nginx:latest
4. cd nodejs
5. sudo docker build -t /example/nodejs .
6. cd ..
7. sudo ./scripts/nodejs.sh
8. sudo ./scripts/nginx.sh

Die Anwendung sollte nun unter http://localhost:8080 erreichbar sein.



