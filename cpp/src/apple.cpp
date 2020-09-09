#include <SDL2/SDL.h>
#include "headers/apple.h"
#include "headers/const.h"
#include <stdlib.h>


// Initialize apple position to fix value, need to be random
Apple::Apple()
{
    position.x = 100;
    position.y = 100;
}
// Assigns new position to apple
void Apple::newPosition(Snake snake)
{
    position.x = rand()%H;
    position.y = rand()%W;
}

// Returns current position of apple 
XY Apple::getPosition()
{
    return position;    
}

// Draws apple, need renderer as argument
void Apple::draw(SDL_Renderer *renderer)
{
    SDL_SetRenderDrawColor( renderer, 0, 255, 255, 255);
    // Renders on screen
    SDL_Rect rectangle = { position.x, position.y, BLOCK_SIZE, BLOCK_SIZE};
    SDL_RenderFillRect( renderer, &rectangle );
    SDL_RenderPresent( renderer );
}