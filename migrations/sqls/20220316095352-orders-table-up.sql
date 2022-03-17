-- create orders table
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE orders(
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
    product_id uuid,
    quantity INTEGER DEFAULT 1,
    user_id uuid,

    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE 
);