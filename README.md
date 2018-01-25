# foods
Food logger using MySQL, Node, Express, Handlebars and a homemade ORM

## Use
### Add a food

* Add a food at the bottom, along with its allergens.
* Automatically added as uneaten food

### Devour/Remake food

* You can eat or remake a food and move it from one table to another.

### Delete food

* Remove a food from the database.

## Project
### Design

* Bootstrap for design
* Uses handlebars in the view

### MVC

* Uses MVC controls to call SQL queries based on your actions.

### Heroku deployment

* Heroku link here: https://dashboard.heroku.com/apps/guarded-beyond-52728
* Page: https://guarded-beyond-52728.herokuapp.com/
* Uses JawsDB MySQL

### npm packages used:

* body-parser
* express
* express-handlebars
* method-override
* mysql

## To Do:

### Basics:

[x] Set up basic file structure
[x] Set up sql data making files (schema and seeds)
[x] Set up server
[x] Set up view
[x] Set up controller
[x] Set up Model
[x] QA testing

### Additional:

[x] Picture on page
[x] Deleting foods on table
[ ] Modifying foods on table
[ ] Allergens - Uneaten foods can be selected by allergens
[ ] Allergens as buttons (including adding new ones)
[ ] Search via API for pictures that match the food name
[ ] Use Nutrition analysis and Recipe API for a tooltip when hovering over each item (find out if it is best to store data or call it each time) https://developer.edamam.com/
[ ] Sort by various nutrition analysis
[ ] Analysis of API response gives allergies, so users do not need to type them in
[ ] Switch between output formats/views with button click