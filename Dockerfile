FROM balenalib/rpi-node:8-stretch

RUN [ "cross-build-start" ]

ADD . /
WORKDIR /
RUN apt-get update && apt-get upgrade -y && apt-get install python build-essential libudev-dev libbluetooth-dev bluez -y && npm install bluebird debug noble underscore && apt-get clean && npm cache clean --force
CMD ["/usr/local/bin/node", "august-server.js"]

RUN [ "cross-build-end" ]

