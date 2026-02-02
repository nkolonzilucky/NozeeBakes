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
    id uuid primary key default gen_random_uuid(),
    name text not null,
    portion integer not null check (portion >= 1),
    weight integer not null check (weight > 0),
    in_stock integer not null default 0 check (in_stock >= 0),
    price numeric(10,2) not null check (price > 0),
    image_url text,
    calories integer check (calories >= 0),
    category product_category not null default 'Other',
    tag product_tag not null default 'None',
    created_at timestamptz not null default now()
);

create index product_in_stock_idx
on product (in_stock)
where in_stock > 0;


create type order_status as enum (
  'pending',
  'paid',
  'cancelled',
  'fulfilled'
);

create table "order" (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id),
  cart_id uuid not null references cart(id),
  status order_status not null default 'pending',
  total_amount numeric(10,2) not null,
  created_at timestamptz not null default now()
);


create type cart_status as enum (
  'active',
  'checked_out',
  'abandoned'
);

create table cart (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  status cart_status not null default 'active',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table cart_item (
  id uuid primary key default gen_random_uuid(),
  cart_id uuid not null references cart(id) on delete cascade,
  product_id uuid not null references product(id),
  quantity integer not null check (quantity > 0),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (cart_id, product_id)
);

create unique index one_active_cart_per_user
on cart (user_id)
where status = 'active';




-- Seed data for product table

insert into product (name, portion, size, price, imageURL, kalories,category, tag)
values
  ('Cheezy Vegetables',  1, 350, 9.49, 'nozeebakes/assets/images/food/cheddar_cheese.jpeg', 480,'Pizzas', 'New'),
  ('Grated Cheese',  1, 350, 9.49, 'nozeebakes/assets/images/food/grated.jpeg', 480,'Pasta & Gnocchi', 'New'),
  ('Mushrooms',  1, 350, 9.49, 'nozeebakes/assets/images/food/mushrooms.jpeg', 480,'Salads & Bowls', 'None'),