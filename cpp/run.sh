#!/bin/bash
echo Compiling...
# make && echo Running && ./start

time( g++ src/headers/*.h src/*.cpp -lSDL2 -o start && echo Finished

echo Compiled successfully!!
echo Now run ./start to start the game 

)
# For debuggingg uncomment this
# echo Running
# ./start
