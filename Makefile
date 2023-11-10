.PHONY: frontend backend

all: clean frontend backend

clean:
	rm -f --  ~/.config/openplayground/models.json

install:
	cd app && npm install
	cd server && pip3 install -r requirements.txt

frontend:
	cd app && npx parcel watch src/index.html --no-cache 

backend:
	python3 -m server.app
