.PHONY: frontend backend

all: frontend backend

frontend:
	cd app && npm install && npx parcel watch src/index.html --no-cache

backend:
	python3 -m server.app

