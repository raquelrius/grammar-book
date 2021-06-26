#!/bin/sh
sudo docker exec -it db_mongo_1 \
  mongo -u admin -p admin1234 --authenticationDatabase admin grammarbook