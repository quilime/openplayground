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
	cd server && pip install -r requirements.txt

backend:
	python -m server.app --port 5555 --debug

backend-dev:
	nodemon -e py --exec $(MAKE) backend
	
