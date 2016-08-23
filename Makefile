BIN = ./node_modules/.bin
BUILD_DIR = ./build

all: clean build start

cleanall: 
	-@rm -rf node_modules

install:
	-@npm install

update:		
	-@npm update

build:
	$(BIN)/webpack --config webpack.config.js

clean:
	-rm build/*

.PHONY: all build update clean install all cleanall


start:
	-@$(BIN)/webpack-dev-server
