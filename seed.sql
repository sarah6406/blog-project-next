CREATE TABLE posts (
id SERIAL PRIMARY KEY,
username TEXT,
message TEXT
);

CREATE TABLE comments (
id SERIAL PRIMARY KEY,
post_id INT,
username TEXT,
comment TEXT 
);

INSERT INTO posts(username, message) VALUES
('Bob', 'I am Bob and I like to party'),
('Stacey', 'This blog is really cool!'),
('Steve', 'Is there anyone here who could help me with the allotment?');

INSERT INTO comments(post_id, username, comment) VALUES 
(1, 'sarah6406', 'Are you not a bit too old for partying?'),
(2, 'Harriet', 'That is what I thought!'),
(1, 'John', 'Have you been to Ibiza?'),
(3, 'Freddie', 'I love gardening, what do you have growing?'),
(3, 'githubfan', 'When would you like help?');