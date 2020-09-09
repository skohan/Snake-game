#OBJS specifies which files to compile as part of the project
OBJS = const.h xy.h xy.cpp game.h game.cpp start.cpp snake.h snake.cpp apple.h apple.cpp 

#CC specifies which compiler we're using
CC = g++

#COMPILER_FLAGS specifies the additional compilation options we're using
# -w suppresses all warnings
COMPILER_FLAGS = -w

#LINKER_FLAGS specifies the libraries we're linking against
LINKER_FLAGS = -lSDL2 

#OBJ_NAME specifies the name of our exectuable
OBJ_NAME = start

#This is the target that compiles our executable
all : $(OBJS)
	$(CC) $(OBJS) $(COMPILER_FLAGS) $(LINKER_FLAGS) `pkg-config --cflags --libs sdl2` -o $(OBJ_NAME) 

