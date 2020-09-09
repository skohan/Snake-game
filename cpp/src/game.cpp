#include "headers/const.h"
#include "headers/game.h"
#include <iostream>

// Initailize some requirements befor game loop start
bool Game::init()
{
    score = 0;
    // Initialize SDL
    // Initializing the video stream for the program
    if (SDL_Init(SDL_INIT_VIDEO) < 0)
    {
        std::cout << "Error has occured: SDL_GetError(): " << SDL_GetError() << "\n";
        return false;
    }

    //Creating the window
    window = SDL_CreateWindow("Snoopy Snake",
                              WINDOW_POSITION_X,
                              WINDOW_POSITION_Y,
                              W,
                              H,
                              0);
    if (window == NULL)
    {
        std::cout << "Error creating the window: SDL_GetError(): " << SDL_GetError() << "\n";
        return false;
    }

    //Creating a renderer to draw things
    renderer = SDL_CreateRenderer(window, -1, SDL_RENDERER_ACCELERATED | SDL_RENDERER_PRESENTVSYNC);
    if (renderer == NULL)
    {
        std::cout << "Error creating renderer: SDL_GetError(): " << SDL_GetError() << "\n";
        return false;
    }

    // if (TTF_Init() == -1)
    //     return false;
    return true;
}

// Main game loop
void Game::run()
{

    while (running)
    {
        clear();
        checkEvents();
        snake.update();
        snake.show(renderer);
        running = snake.checkCollision();
        apple.draw(renderer);
        if (checkSnakeCollisionWithApple())
        {
            // Snake ate apple
            apple.newPosition(snake);
            snake.addNewBlock();
            score++;
        }
        //Delay SLEEP_TIME secs
        SDL_Delay(SLEEP_TIME);
    }

    showScore();
}

// Clear the surface for drawing updated objects
void Game::clear()
{
    SDL_SetRenderDrawColor(renderer, 0, 0, 255, 255);
    //Clear the screen
    SDL_RenderClear(renderer);
}

// Checks if snake ate apple or not
bool Game::checkSnakeCollisionWithApple()
{
    XY snakeHead = snake.getHead();
    XY applePosition = apple.getPosition();

    if ((snakeHead.x - applePosition.x) < BLOCK_SIZE &&
        (snakeHead.x - applePosition.x) > -BLOCK_SIZE &&
        (snakeHead.y - applePosition.y) < BLOCK_SIZE &&
        (snakeHead.y - applePosition.y) > -BLOCK_SIZE)
    {

        std::cout << "Collision!!" << std::endl;
        return true;
    }

    return false;
}

// Listens for events to happen
void Game::checkEvents()
{
    if (SDL_PollEvent(&event))
    {
        switch (event.type)
        {
        case SDL_WINDOWEVENT_CLOSE:
            SDL_DestroyWindow(window);
            window = NULL;
            running = false;
            break;
        case SDL_QUIT:
            running = false;
            break;
        case SDL_KEYDOWN:
        {
            switch (event.key.keysym.sym)
            {
            case SDLK_ESCAPE:
                running = false;
                break;
            case SDLK_UP: //Up
                std::cout << "UP" << std::endl;
                snake.moveUP();

                break;
            case SDLK_RIGHT:
                std::cout << "RIGHT" << std::endl;
                snake.moveRight();
                break;
            case SDLK_DOWN:
                std::cout << "DOWN" << std::endl;
                snake.moveDown();
                break;
            case SDLK_LEFT:
                std::cout << "LEFT" << std::endl;
                snake.moveLeft();
                break;
            default:
                break;
            }
        }
        break;
        default:
            break;
        }
    }
}

// Showing score at the end
void Game::showScore()
{
    // clear(); // Clears the previous screen first
    // TTF_Font *font = TTF_OpenFont("arial.ttf", 25);
    // SDL_Color color = {255, 255, 255};
    // SDL_Surface *surface = TTF_RenderText_Solid(font,
    //                                             "Welcome to Gigi Labs", color);
    // SDL_Texture *texture = SDL_CreateTextureFromSurface(renderer, surface);
    // SDL_RenderCopy(renderer, texture, NULL, NULL);
    // SDL_RenderPresent(renderer);
    // SDL_DestroyTexture(texture);
    // SDL_FreeSurface(surface);
    // TTF_CloseFont(font);
    std::cout << "YOUR SCORE IS: " << score << std::endl;
}

Game::~Game()
{
    //All this to be done before closing the program
    SDL_DestroyWindow(window);
    window = NULL;
    SDL_DestroyRenderer(renderer);
    // TTF_Quit();
    // Closing all the SDL functionalities
    SDL_Quit();
}
