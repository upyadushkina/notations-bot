-- If DB already exists, run this once in D1 Console:
ALTER TABLE users ADD COLUMN is_admin INTEGER NOT NULL DEFAULT 0;
