.PHONY: frontend backend

all: clean frontend backend

clean:
	rm -f --  ~/.config/openplayground/models.json

install: install-frontend install-backend

install-frontend:
	cd app && npm install

frontend:
	cd app && npx parcel watch src/index.html --no-cache 

install-backend:
	cd server && pip3.10 install -r requirements.txt

backend:
	python3 -m server.app --port 5555
	