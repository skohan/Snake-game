
#ifndef CONST_H
    #define CONST_H
// Typical constants of window properties
const int H                 = 540; // Height of window
const int W                 = 540; // Width of window
const int WINDOW_POSITION_X = 100;
const int WINDOW_POSITION_Y = 100;

// For deciding how much time to skip in game loop to unburden cpu
const int SLEEP_TIME        = 200; 

// Size of snake block
const int BLOCK_SIZE        = 25;
// Speed of snake
const int BLOCK_SPEED       = 25;

// Collision values
const int APLLE_COLLISION   = 1;
const int WALL_COLLISION    = 2;

// Players move values
enum move {left, right, up, down};

#endif