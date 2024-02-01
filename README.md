# Phase-4 Project Ruby on Rails
By: Corey Sawin

This is a Video Game Library application built with a React frontend and a Rails backend. This application allows a user to log in or sign up for an account and then view a profile page that will show all the video games they have added to the library. The user is able to view all the video games in the database and have the ability to add a new game. From here the user can view the details of each game in the database that will show the game cover art, release date, what platfrom the game is on, and what genre the game on. In addition, the user has the ability to create, read, update and delete any note they left for the movie they created. There are two links on the game detail page which allows the user to see all the games associated with the platform and all the games associated with the genre. 

## Technology Stack

### Frontend
- React
- Javascript
- React-Router-Dom
- CSS
- Axios
- Formik
- Recoil 
- React Boostrap

## Backend
- Ruby version 3.0.0
- Rails

### Database
- SQLite 

### GitHub Repository

- https://github.com/sawincp/video_game_library_app


## Setup/Installation Requirements
- Clone the GitHub repository from https://github.com/sawincp/video_game_library_app
- Open the video_game_library_app project file
- In terminal run bundle install --prefix client
- In terminal run rails db:migrate db:seed
- In terminal run rails s to start Rails server
- In terminal run npm start --prefix client to run local application

## Application Description 

On page load, if the user hasn't already logged in, they will be directed to a login page or be given the option to sign up.


![Log In](/Images/Log_in.png)

![Sing Up](/Images/Sign_up.png)

After the user is successfully logged in, they will be looking at their profile page. Their profile will display a list of all the games they've added to the library along with two navigation links. On link will direct them to their profile page and the second will direct them to the game library. 

![Profile](/Images/profile.png)

When the user clicks on the Game Library link, it will show all the games in the library along with a button to add a new game. 

![Library](/Images/library.png)

![New Game](/Images/new_game.png)

To add a new game the user will fill out a new game form which includes the game title, cover_art which takes a URL, the release date, the console, genre and notes for the game. If a user tries to add a game that is already in the library they will get an error stating "Title Already Exsist". 

The user will be able to click on any of the games in the library to bring them to the game details page. 

![Game Details](/Images/game_details.png)

The game detail page will show the user all of the relevent information for that game: title, cover art, release date, console, genre and notes. The user will be able to update their notes for their game by clicking on the pencile button and updating the note. The user can delete their note by clicking on the trash can button. If the logged in user tries to update or delete a note from someone else's game, they will get an "Unauthroized" message. 

If the user wants to view all the games for a certain console, they can click the link on the game details page. If the user want to view all the games for a certain genre, they can click on the second link. 

![Consoles](/Images/platforms.png)

This will list all the games associated with that particular console. 

![Genres](/Images/genres.png)



