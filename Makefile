.PHONY: frontend backend

all: frontend backend

install:
	cd app && npm install
	cd server && pip3 install -r requirements.txt

frontend:
	cd app && npx parcel watch src/index.html --no-cache

backend:
	python3 -m server.app

