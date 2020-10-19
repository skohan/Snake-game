#ifndef __SNAKE_GAME__
#define __SNAKE_GAME__

#include<stdbool.h>
#include<stdlib.h>

#define GRID_SIZE 20

// Snake structure
struct Snake {
	int lenght;
	// The snake moving direction in X and Y, so just one value can be 1 or -1
	int x_dir;
	int y_dir;
	int tailPos[GRID_SIZE * GRID_SIZE][2]; 
};

/* The whole game, that only contains 
	the player and the apple */
struct Game {
	struct Snake player;
	int apple_pos[2];
};

// Init game adding the snake and the apple
void create_game(struct Game* my_game){
	// Init apple position
	my_game->apple_pos[0] = 10;
	my_game->apple_pos[1] = 10;
	// Init player
	my_game->player.lenght = 1;
	my_game->player.x_dir = 1;
	my_game->player.y_dir = 0;
	my_game->player.tailPos[0][0] = 0;
	my_game->player.tailPos[0][1] = 0;
};

#endif
