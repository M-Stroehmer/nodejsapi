FROM debian

# Install libraries
RUN apt-get update && apt-get install -y \
	curl \
	python \
	make \
	g++

# Get the latest node.js and npm versions and install
RUN curl -sL https://deb.nodesource.com/setup_12.x | bash -
RUN apt-get update && apt-get install -y \
	nodejs

# Copy source code
COPY ./src /var/www/api

# Install dependencies
WORKDIR /var/www/api
RUN npm install

EXPOSE 5000
CMD PORT=5000 DEBUG=news-app:* npm start
