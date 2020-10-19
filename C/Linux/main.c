#include"snake.h"
#include<stdbool.h>
#include<stdio.h>
#include<time.h>
#include<SDL2/SDL.h>
// Init, close and update SDL pre-functions
bool init_game();
void update_game(struct Game* my_game);
void draw_game(struct Game* my_game);
void input_handler(struct Snake* player);

// Game constants
const int SCREEN_SIZE = 500;
const int SQUARE_SIZE = SCREEN_SIZE / GRID_SIZE;
const int UPDATE_FPS = 10;
const int TICKS_PER_FRAME = 1000 / UPDATE_FPS;
// Window variables
SDL_Window* window = NULL;
SDL_Renderer* w_renderer = NULL;
bool game_running = true;
SDL_Event e;

// Main function lol
int main() {
	srand(time(NULL));
	// Init Game
	if(!init_game())
		return 1;
	struct Game game;
	create_game(&game);

	// Timer
	Uint32 capTimer;
	while(game_running) {
		// Ticks per frame
		capTimer = SDL_GetTicks();
		// Game logic
		input_handler(&(game.player));
		update_game(&game);
		draw_game(&game);
		// Frame cap
		int frameTicks = SDL_GetTicks() - capTimer;
		if(frameTicks < TICKS_PER_FRAME) {
			SDL_Delay(TICKS_PER_FRAME - frameTicks);
		}
	}
	// End game and destroy the window
	SDL_DestroyWindow(window);
	SDL_DestroyRenderer(w_renderer);
	SDL_Quit();
    return 0;
}

// Init SDL
bool init_game() {
	// Sucess flag
	bool sucess = false;
	if(SDL_Init(SDL_INIT_VIDEO) < 0) {
		printf("SDL could not initialize! ERROR: %s\n", SDL_GetError());
	}
	else {
		// Create window
		window = SDL_CreateWindow(
			"Snake in C", 
			SDL_WINDOWPOS_CENTERED, 
			SDL_WINDOWPOS_CENTERED,
			SCREEN_SIZE,
			SCREEN_SIZE,
			SDL_WINDOW_SHOWN
		);
		if(window == NULL) {
			printf("Window could not be created! ERROR: %s", SDL_GetError());
		}
		else {
			// Create window surface
			w_renderer = SDL_CreateRenderer(window, -1, SDL_RENDERER_ACCELERATED);
			if(w_renderer == NULL){
				printf("SDL could not create a renderer! ERROR: %s", SDL_GetError());
			}
			else {
				SDL_SetRenderDrawColor(w_renderer, 0x00, 0x00, 0x00, SDL_ALPHA_OPAQUE);
				SDL_RenderPresent(w_renderer);
				// Sucess!!
				sucess = true;
			}
		}
	}
	return sucess;
}

// Handle inputs
void input_handler(struct Snake* player) {
	while (SDL_PollEvent(&e) != 0) {
		if(e.type == SDL_QUIT)
			game_running = false;
	}
	const Uint8* current_keys = SDL_GetKeyboardState(NULL);
	if(current_keys[SDL_SCANCODE_W] && (player->y_dir == 0)) {
		player->x_dir = 0;
		player->y_dir = -1;
	}
	else if(current_keys[SDL_SCANCODE_S] && (player->y_dir == 0)) {
		player->x_dir = 0;
		player->y_dir = 1;
	}
	else if(current_keys[SDL_SCANCODE_A] && (player->x_dir == 0)) {
		player->x_dir = -1;
		player->y_dir = 0;
	}
	else if(current_keys[SDL_SCANCODE_D] && (player->x_dir == 0)) {
		player->x_dir = 1;
		player->y_dir = 0;
	}
}

// Update game values
void update_game(struct Game* my_game) {
	// Move the snake tail unless the head
	for(int i = (my_game->player.lenght - 1); i > 0; i--) {
		my_game->player.tailPos[i][0] = 
			my_game->player.tailPos[i - 1][0];
		my_game->player.tailPos[i][1] = 
			my_game->player.tailPos[i - 1][1];
	};
	// Update player position
	my_game->player.tailPos[0][0] += my_game->player.x_dir;
	my_game->player.tailPos[0][1] += my_game->player.y_dir;
	// If the player is on the border of the screen
	if(my_game->player.tailPos[0][0] < 0) {
		my_game->player.tailPos[0][0] = GRID_SIZE - 1; 
	}
	else if(my_game->player.tailPos[0][0] >= GRID_SIZE){
		my_game->player.tailPos[0][0] = 0;
	}
	if(my_game->player.tailPos[0][1] < 0) {
		my_game->player.tailPos[0][1] = GRID_SIZE - 1; 
	}
	else if(my_game->player.tailPos[0][1] >= GRID_SIZE) {
		my_game->player.tailPos[0][1] = 0;
	}
	// Check if the player is on the apple
	if(my_game->player.tailPos[0][0] == my_game->apple_pos[0]){
		if(my_game->player.tailPos[0][1] == my_game->apple_pos[1]){
			my_game->player.lenght++;
			my_game->apple_pos[0] = rand() % 20;
			my_game->apple_pos[1] = rand() % 20;
		}
	}
	for(int i = 1; i < my_game->player.lenght; i++) {
		if(my_game->player.tailPos[i][0] == my_game->player.tailPos[0][0]){
			if(my_game->player.tailPos[i][1] == my_game->player.tailPos[0][1]){
				create_game(&(*my_game));
			}
		}
	};
}

// Draw all game
void draw_game(struct Game* my_game) {
	SDL_Rect apple = {
		my_game->apple_pos[0] * SQUARE_SIZE, 
		my_game->apple_pos[1] * SQUARE_SIZE, 
		SQUARE_SIZE, SQUARE_SIZE
	};
	
	// Clear screen
	SDL_SetRenderDrawColor(w_renderer, 0x00, 0x00, 0x00, SDL_ALPHA_OPAQUE);
	SDL_RenderClear(w_renderer);
	// Draw snake
	SDL_SetRenderDrawColor(w_renderer, 0x00, 0xFF, 0x00, SDL_ALPHA_OPAQUE);
	for(int i = 0; i < (my_game->player.lenght); i++){
		SDL_Rect snake_part = {
			my_game->player.tailPos[i][0] * SQUARE_SIZE,
			my_game->player.tailPos[i][1] * SQUARE_SIZE,
			SQUARE_SIZE, SQUARE_SIZE
		};
		SDL_RenderFillRect(w_renderer, &snake_part);
	}
	// Draw apple
	SDL_SetRenderDrawColor(w_renderer, 0xFF, 0x00, 0x00, SDL_ALPHA_OPAQUE);
	SDL_RenderFillRect(w_renderer, &apple);
	// Draw on screen
	SDL_RenderPresent(w_renderer);
}
