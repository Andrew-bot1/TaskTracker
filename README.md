# Task Tracker

## How to Run

After downloading the code, use XAMPP to load the website.

1. Unzip the project folder into `C:\xampp\htdocs\`.
2. Start XAMPP.
3. Start Apache and MySQL.
4. Open the website at `http://localhost/TaskTracker-main1/root/`.

## Database Setup

This project uses a MySQL database with XAMPP/phpMyAdmin.

### 1. Create the Local Database

1. Start XAMPP.
2. Start Apache and MySQL.
3. Open phpMyAdmin at `http://localhost/phpmyadmin`.
4. Click **New** on the left side.
5. Create a database named `taskmanager`.

### 2. Run the Migration

The migration file creates the database tables.

1. In phpMyAdmin, click the `taskmanager` database.
2. Click the **SQL** tab.
3. Open the `migration.sql` file from the project.
4. Copy and paste the contents into the SQL box.
5. Click **Go**.

This should create these tables:

- users
- categories
- statuses
- tasks
- time_logs

### 3. Run the Seed Script

The seed file adds test data to the database.

1. Stay inside the `taskmanager` database in phpMyAdmin.
2. Click the **SQL** tab.
3. Open the `seed.sql` file from the project.
4. Copy and paste the contents into the SQL box.
5. Click **Go**.

This adds sample users, categories, statuses, tasks, and time logs.

### 4. Check the Database Connection

Make sure `php-rest-api/db.php` has the correct local database settings:

```php
$host = 'localhost';
$dbname = 'taskmanager';
$username = 'root';
$password = '';
```

### 5. Start the Server and Verify

Start Apache and MySQL in XAMPP, then open:

http://localhost/TaskTracker-main1/root/

To verify the API connection, open this URL:

http://localhost/TaskTracker-main1/php-rest-api/index.php?resource=tasks

If the database is connected correctly, it should show task data in JSON format.

You can also test categories with:

http://localhost/TaskTracker-main1/php-rest-api/index.php?resource=categories

## View Inventory

The new task and edit categories buttons at the top expand a modal to allow the user to add, edit, and view items. The completed tasks button at the bottom allows the user to see a log of completed tasks.
