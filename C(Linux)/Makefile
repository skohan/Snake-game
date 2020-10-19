# Program file name and output name
OBJS = main.c
OBJS_OUTPUT = snake.out

# Compiler, and falgs
CC = gcc
CC_FLAGS = -g
# Linker flags
CC_LINKER = -lSDL2


all: $(OBJS)
	$(CC) $(OBJS) $(CC_FLAGS) $(CC_LINKER) -o $(OBJS_OUTPUT)

clear: 
	rm *.out
