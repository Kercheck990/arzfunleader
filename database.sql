CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT,
  nickname TEXT,
  password TEXT,
  org TEXT,
  role TEXT,
  warns INTEGER DEFAULT 0
);
