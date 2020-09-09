import pygame
import random
import math
import time

pygame.init()
#constant Variables && Intialising the variables 
H= 500
W = 500
score = 0
white = (255,255,255)
red = (255,0,0)
little_red = (100,0,0)
green = (0,255,0)
blue = (0,0,255)
black = (0,0,0)


##Intialising
clock = pygame.time.Clock()
surface = pygame.display.set_mode((H,W))
        
pygame.display.set_caption('Snake')


def tex_object(text,font):
	textSurface = font.render(text,True,black)
	return textSurface,textSurface.get_rect()

def message_display(text):
	largeText = pygame.font.Font('freesansbold.ttf',50)
	TextSurf,TextRect = tex_object(text, largeText)
	TextRect.center = ((surface.get_height()/2,surface.get_width()/2))
	surface.blit(TextSurf,TextRect)
	pygame.display.update()

def crash():
	surface.fill(white)
	message_display("You've Crashed")
	time.sleep(1.5)
	surface.fill(white)
	message_display("Score:"+ str(score))
	time.sleep(2)
	surface.fill(white)


def game_loop():
	global score 
	snake_position = [[125,125]]
	crashed = False
	y_change = 0
	x_change = 0
	x = 125
	y = 125
	X = 250
	Y = 250
	score = Score = 0
	change = 3
	foodPosition = (X,Y)

	while not crashed:

		surface.fill(white)
		for i in range(1,len(snake_position)):
			pygame.draw.circle(surface, red, snake_position[i], 10)
		pygame.draw.circle(surface, black, snake_position[0], 10)
		pygame.draw.circle(surface,blue,foodPosition,10)
		pygame.display.update()

		for event in pygame.event.get():
			if event.type == pygame.QUIT:
				pygame.quit()
				quit()
			if event.type == pygame.KEYDOWN:
				key = event.key
				if key == pygame.K_LEFT and not x_change == change:
					x_change = -change
					y_change = 0
				elif key == pygame.K_RIGHT and not x_change == -change:
					x_change = change
					y_change = 0
				elif key == pygame.K_UP and not y_change == change:
					y_change = -change
					x_change = 0
				elif key == pygame.K_DOWN and not y_change == -change:
					y_change = change
					x_change = 0	

			#print(event)

		x = x + x_change
		y = y + y_change
		if x>surface.get_width() or x<0 or y>surface.get_height() or y<0: #or OhCrap(snake_position):
			crashed = True
			crash()
		if math.sqrt(((x-X)**2)+((y -Y)**2)) <= 15  :
			X = random.randrange(10,495,10)
			Y = random.randrange(10,495,10)
			Score+=1
			score = Score 
			snake_position.append([snake_position[-1][0] - change,snake_position[-1][1] - change])
			while ((X>surface.get_width()-10 or X<10) or (Y>surface.get_height()-10 or Y<10)) and ([X,Y] not in snake_position) :
				 X = random.randrange(10,495,10)
				 Y = random.randrange(10,495,10)

		a = (x,y)
		for i in range(0,Score+1):
			b = snake_position[i]
			snake_position[i] = a
			try:
				a = b
			except:
				pass

		foodPosition = (X,Y)
		clock.tick(60)


def game_start():
	intro = True

	while intro :
		for event in pygame.event.get():
			if event.type == pygame.QUIT:
				pygame.quit()
				quit()
			if event.type == pygame.MOUSEBUTTONDOWN:
				x_down,y_down = event.pos
				if 300>x_down>200 and 300>y_down>250:
					game_loop()
			#print(event)

		surface.fill(white)
		largeText = pygame.font.Font("freesansbold.ttf", 50)
		TextSurf, TextRect = tex_object("Snoopy Snake", largeText)
		TextRect.center = ((surface.get_height()/2), (surface.get_width()/3))
		surface.blit(TextSurf,TextRect)
		mouse = pygame.mouse.get_pos()

		if 300>mouse[0]>200 and 300>mouse[1]>250:
			pygame.draw.rect(surface,green,(200,250,100,50))
	
		else:
			pygame.draw.rect(surface, red, (200,250,100,50))
		

		smallText = pygame.font.Font("freesansbold.ttf", 20)
		textSurf, TextRect = tex_object("Play",smallText)
		TextRect.center = (245,275)
		surface.blit(textSurf,TextRect)

		pygame.display.update()

game_start()

