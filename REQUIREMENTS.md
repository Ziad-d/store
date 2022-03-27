# API Requirements

The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application.

## API Endpoints

#### Products

- Index `'products/' [GET]`
- Show `'products/:id' [GET]`
- Create [token required] `'products/' [POST]`
- [OPTIONAL] Top 5 most popular products
- [OPTIONAL] Products by category (args: product category)

#### Users

- Index [token required]: `'users/' [GET] (token)`
- Show [token required]: `'users/:id' [GET] (token)`
- Create (args: User)[token required]: `'users/' [POST] (token)`
- [ADDED] Delete [token required]: `'users/:id' [DELETE] (token)`

#### Orders

- Current Order by user (args: user id)[token required] `'orders/current/:user_id' [GET] (token)`
- [OPTIONAL] Completed Orders by user (args: user id)[token required]

## Data Shapes

#### Product

- id
- name
- price
- [OPTIONAL] category

```
products (id:uuid[primary key], name:varchar(50)[not null], price:integer[not null])

#### User

- id
- firstName
- lastName
- password

```

Table: users (id:uuid[primary key], email:varchar(50), user_name:varchar(50) [not null], first_name:varchar(50)[not null], lasl_name:varchar(50)[not null], password:varchar(255)[not null])

#### Orders

- id
- id of each product in the order
- quantity of each product in the order
- user_id
- status of order (active or complete)

```
Table: Orders (id:uuid[primary key], product_id:uuid(foreign key to products table), quantity:integer[default 1], user_id:uuid(foreign key to users table), status:enum(active, complete)[not null])
```
