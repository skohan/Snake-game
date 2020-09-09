#include "headers/game.h"


int main( void )
{
    Game game;
    if (game.init())
        game.run();
    return 0;
}




























// int main( void )
// {
//     // Initializing the video stream for the program
//     if ( SDL_Init( SDL_INIT_VIDEO ) < 0)
//     {
//         cout << "Error has occured: SDL_GetError(): " << SDL_GetError() << "\n";
//         return -1;
//     }

//     // For creating a window and a renderer to draw things
//     SDL_Window* window;
//     SDL_Renderer* renderer;

//     //Creating the window
//     window = SDL_CreateWindow("Learnig SDL", 
//                                 position_x, 
//                                 position_y, 
//                                 W, 
//                                 H, 
//                                 0
//                                 );
//     if ( window == NULL )
//     {
//         cout << "Error creating the window: SDL_GetError(): " << SDL_GetError() << "\n";
//         return -1; 
//     }

//     //Creating a renderer to draw things
//     renderer = SDL_CreateRenderer(window, -1, SDL_RENDERER_ACCELERATED | SDL_RENDERER_PRESENTVSYNC);
//     if ( renderer == NULL )
//     {
//         cout << "Error creating renderer: SDL_GetError(): " << SDL_GetError() << "\n";
//         return -1;
//     }

//     bool running = true;
//     SDL_Event event;

//     //Properties of rectangle
//     int x_position = 100;
//     int y_position = 100;
//     int height = 100;
//     int width = 100;
//     int speed = 10;

//     //Event loop
//     while( running )
//     {
//         // Checking for any event 
//         while( SDL_PollEvent( &event ) )
//         {
//             switch ( event.type )
//             {
//             case SDL_WINDOWEVENT_CLOSE:
//                 SDL_DestroyWindow( window );
//                 window = NULL;
//                 running = false;
//                 break;
//             case SDL_QUIT:
//                 running = false;
//                 break;
//             case SDL_KEYDOWN:
//                 {
//                     switch( event.key.keysym.sym ){
//                         case SDLK_ESCAPE:
//                             running = false;
//                             break;
//                         case SDLK_UP: //Up
//                             y_position -= speed;
//                             break;
//                         case SDLK_RIGHT:
//                             x_position += speed;
//                             break;
//                         case SDLK_DOWN:
//                             y_position += speed;
//                             break;
//                         case SDLK_LEFT:
//                             x_position -= speed;
//                         default:
//                             break;
//                     }
//                 }
//                 break;
//             default:
//                 break;
//             }
//         }

//         //Set the color of the renderer drawing to a color 
//         SDL_SetRenderDrawColor(renderer, 0, 0, 255, 255 );

//         //Clear the screen 
//         SDL_RenderClear( renderer );

//         SDL_Rect rectangle = { x_position, y_position, height, width };
        
//         //Set the color of the renderer drawing to a color 
//         SDL_SetRenderDrawColor(renderer, 0, 255, 255, 255 );
//         //Draw rectangle 
//         SDL_RenderFillRect( renderer, &rectangle );

//         //To show what we have rendered 
//         SDL_RenderPresent( renderer );

//         //Delay 0.05 secs
//         // SDL_Delay(50);
//     }

//     //All this to be done before closing the program 
//     SDL_DestroyWindow( window );
//     window = NULL;
//     SDL_DestroyRenderer( renderer );
//     // Closing all the SDL functionalities
//     SDL_Quit();

//     return 0;
// }