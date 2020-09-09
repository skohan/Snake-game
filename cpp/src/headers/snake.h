#include<bits/stdc++.h>
#include<SDL2/SDL.h>
#include "xy.h"
#include "const.h"

#ifndef SNAKE_H
    #define SNAKE_H

class Snake
{
    private:
        XY speed;
        std::vector<XY> snake_blocks;
        move current_move;

    public:
        Snake();
        // move snake up
        void moveUP();
        // Move snake down
        void moveDown();
        // Move snake left
        void moveLeft();
        // Move snake right
        void moveRight();
        // Updating the position of snake_block 
        void update(); 
        // Check if snake has collided the wall or itself
        bool checkCollision(); 
        // Draws snake on screen
        void show(SDL_Renderer *renderer); 
        // Get snake head position
        XY getHead();
        // Adds new block when snake eats apple
        void addNewBlock();
};

#endif