Hello,

Thank you for the chance to take the test. This was a fun experience and I enjoyed completing it. 


1.) The app uses a PHP backend that consumes JSON and allows the user to CREATE, READ, UPDATE and DELETE users.

2.) The fields inside the rows are editable, allowing you to edit the data in each row. Simply update the field value and click 
the Edit button and an update will complete.

3.) I used HTML5, JavaScript, PHP and CSS for this app.

4.)I did use two libraries. I used the MDBootstrap library because it's responsive, mobile friendly and has a clean interface.
it also works very well with tables and grids. I like using libraries such as Bootstrap because it allows me to focus
more on backend functionality without the need to worry about tweaking CSS. I don't use Bootstrap in all cases, if a client wants a custom theme
then I usually write my own CSS and HTML, but for simple one page applications I believe Bootstrap to be a good candidate. 


I had to use one jquery function as I couldn't figure out how to access the data for the table row being updated, 
using jquery I was able to use the "this" keyword to retrieve the data from the DOM nodes of the row I was trying to update. Jquery is very useful to
manipulate and access DOM objects with fewer lines of code than vanilla JavaScript.

5) Additional Features:
Added Password hashing when creating a new user. 
Password is also non-editable.

Added an alert for error or success when editing a user record.



Here are the steps to get this app running.

1.) Please update dbconf.php with your MySQL credentials.
2.) Execute database.sql to create the user table for the application.
5.) If you have php > 5.4, you should be able to run the project with: php -S localhost:8000
6.) Please feel free to reach out to josephsortino@hotmail.com for any questions.


Thanks,
Joseph Sortino

