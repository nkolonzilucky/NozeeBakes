-- product: id, name, portion, size, price, imageURL,kalories, category, tag
-- tag: vegan, low kal,  new, none
-- category: Salads & Bowls, Pasta & Gnocchi,   


CREATE TYPE product_category AS ENUM (
  'Salads & Bowls',
  'Pasta & Gnocchi',
  'Pizzas',
  'Other'
);

CREATE TYPE product_tag AS ENUM (
  'Vegan',
  'Low kcal',
  'New',
  'None'
);

create table product (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    name text NOT NULL,
    portion integer NOT NULL check (portion >= 1),
    size integer NOT NULL check (size > 0 ),
    price float NOT NULL check (price > 0),
    imageURL text,
    kalories integer,
    category product_category not null default 'Other'::product_category,
    tag product_tag not null default 'None'::product_tag,
    created_at timestamptz NOT NULL DEFAULT now()
)


-- Seed data for product table

insert into product (name, portion, size, price, imageURL, kalories,category, tag)
values
  ('Cheezy Vegetables',  1, 350, 9.49, 'nozeebakes/assets/images/food/cheddar_cheese.jpeg', 480,'Pizzas', 'New'),
  ('Grated Cheese',  1, 350, 9.49, 'nozeebakes/assets/images/food/grated.jpeg', 480,'Pasta & Gnocchi', 'New'),
  ('Mushrooms',  1, 350, 9.49, 'nozeebakes/assets/images/food/mushrooms.jpeg', 480,'Salads & Bowls', 'None'),
  