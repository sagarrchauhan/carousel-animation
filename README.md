# Carousel Animation

Demo project for the assignment

## Steps to install

### Start Lando

`lando start`

### Install dependencies with composer

`lando composer install`

### Add the database

`lando db-import <path_to_db_file.sql.gz>`

## FE tasks

### Change directory to the custom theme

`cd web/themes/custom/conference`

### After installation run the following:

`lando npm install`

### Compile js, css and svg

`lando gulp`

### Local development with watch

`lando gulp watch`

## Assumptions for the project

- Have created a home page where the component needs to be displayed.
- Have used the same data as given in designs.
- Font weights used in the design do not match with the actual fonts. Hence I have used the font-weights according to how it should looks in the design image.
- Similarly there is quite an ambuiguity with line-height and actual height of the text. Hence I have used my descretion to maintain the spacing.

## Assets for the project

- DB for the project can be found in `testing_assets/db`
- Images used for the project can be found in `testings_assets/images`
