-- create orders table
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE TYPE mood AS ENUM ('active', 'complete');

CREATE TABLE orders(
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
    product_id uuid,
    quantity INTEGER DEFAULT 1,
    user_id uuid,
    status mood NOT NULL,

    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE
);