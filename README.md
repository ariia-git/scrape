# scrape
## Quickly scrape emails and save to a MySQL Database while browsing. 

### 1 Embed the js file into a webpage (Greasemonkey etc)

### 2 Host the php file somewhere (Preferably with https to prevent browser warnings and conflicts)
#### Update with DB Credentials

### 3 Update the js file 
#### with your ip/domain where the url shows "0.0.0.0", to where the hosted php file is.

### 4 Change the z key 
#### In the js & php files
##### (or dont, its really basic and not really secure.) 

### 5 Create DB table 
#### With the db.sql file.

### 6 Enable the embedded script
#### Then browse to a website.

### If the website contains any email addresses
#### You can now capture them in the database by
##### a. clicking the GO button
or
##### b. CTRL + \ 

---
#### The script will then alert how many unique emails have been stored successfully.
