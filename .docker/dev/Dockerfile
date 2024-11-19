# Ambil dari docker-registry node versi 22 alpine
FROM node:22.10.0-alpine3.20 AS node
# Install bash
RUN apk add --no-cache bash
# Buat folder di container untuk menyimpan node_modules
WORKDIR /cache
# copy semua package*.json dari folder ini 
COPY package*.json .
# install node_module
RUN npm install --silent
# Buat folder app di container untuk menyimpan semua file project
WORKDIR /app
# Buat variable dalam container 
ENV PATH=/app/node_modules/.bin:$PATH
# Copy semua file yang ada di sini ke dalam path
COPY . .