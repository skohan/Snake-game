#include <SDL2/SDL.h>
#include "xy.h"
#include "snake.h"
#ifndef APPLE_H
    #define APPLE_H
class Apple
{
    private:
        XY position;        
    public:
        Apple();
        void newPosition(Snake snake);
        void draw(SDL_Renderer *renderer);
        XY getPosition();
};

#endif