#include <SDL2/SDL.h>
// #include <SDL2/SDL_ttf.h>
#include "snake.h"
#include "apple.h"

#ifndef GAME_H
    #define GAME_H

class Game
{
private:
    SDL_Window* window;
    SDL_Renderer* renderer;
    SDL_Event event;
    Snake snake;
    Apple apple;
    int score;
    bool running = true;
public:
    bool init(); // Initialize SDL
    void run();
    void clear();
    void checkEvents();
    void showScore();
    bool checkSnakeCollisionWithApple();
    ~Game();
};

#endif