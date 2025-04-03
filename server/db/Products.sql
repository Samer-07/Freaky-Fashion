CREATE TABLE products(
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    price REAL,
    introduction TEXT,
    isliked INTEGER DEFAULT 0,
    featuredImage BLOB,
    full_description TEXT,
    slug TEXT
    
);
INSERT INTO products(
    title, 
    price, 
    introduction, 
    isliked, 
    featuredImage,
    full_description,
    slug
) VALUES (
    'Svart T-Shirt', 
    199,   
    'Levis', 
    0,
'/images/4.jpg',     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    'Svart T-shirt'
);
INSERT INTO products(
    title, 
    price, 
    introduction, 
    isliked, 
    featuredImage,
    full_description,
    slug
) VALUES (
    'Vit T-Shirt', 
    199,   
    'Levis', 
    0,
'/images/4.jpg',     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    'vit T-shirt'
);
INSERT INTO products(
    title, 
    price, 
    introduction, 
    isliked, 
    featuredImage,
    full_description,
    slug
) VALUES (
    'Gul T-Shirt', 
    199,   
    'Levis', 
    0,
'/images/4.jpg',     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    'Gul T-shirt'
);
INSERT INTO products(
    title, 
    price, 
    introduction, 
    isliked, 
    featuredImage,
    full_description,
    slug
) VALUES (
    'Röd T-Shirt', 
    199,   
    'Levis', 
    0,
'/images/4.jpg',     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    'Röd T-shirt'
);
INSERT INTO products(
    title, 
    price, 
    introduction, 
    isliked, 
    featuredImage,
    full_description,
    slug
) VALUES (
    'Rosa T-Shirt', 
    199,   
    'Levis', 
    0,
'/images/4.jpg',     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    'Rosa T-shirt'
);
INSERT INTO products(
    title, 
    price, 
    introduction, 
    isliked, 
    featuredImage,
    full_description,
    slug
) VALUES (
    'Blå T-Shirt', 
    199,   
    'Levis', 
    0,
'/images/4.jpg',     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    'Blå T-shirt'
);
INSERT INTO products(
    title, 
    price, 
    introduction, 
    isliked, 
    featuredImage,
    full_description,
    slug
) VALUES (
    'Brun T-Shirt', 
    199,   
    'Levis', 
    0,
'/images/4.jpg',     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    'Brun T-shirt'
);
INSERT INTO products(
    title, 
    price, 
    introduction, 
    isliked, 
    featuredImage,
    full_description,
    slug
) VALUES (
    'Lilla T-Shirt', 
    199,   
    'Levis', 
    0,
'/images/4.jpg',     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    'Lilla T-shirt'
);