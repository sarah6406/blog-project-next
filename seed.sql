CREATE TABLE posts (
id SERIAL PRIMARY KEY,
username TEXT,
title TEXT,
message TEXT
);

CREATE TABLE comments (
id SERIAL PRIMARY KEY,
post_id INT,
username TEXT,
comment TEXT 
);

INSERT INTO posts(username, title, message) VALUES
('GreenThumb21', 'How Did I Start My Allotment Gardening Journey?', 'Curious about how I got started with allotment gardening? Follow along as I share the story of my journey from dreamer to proud allotment gardener.'),
('UrbanGardenista', 'Struggling with Small Spaces? Here Are Allotment Gardening Tips!','Living in a small space but dreaming of having your own allotment garden? Learn some ingenious tips and tricks to make the most out of your tiny plot.'),
('GrowWithGrace', 'Why Growing Your Own Food is So Fulfilling!', 'Ever wondered why growing your own food feels so satisfying? Join me as I delve into the joys and benefits of allotment gardening and homegrown produce.'),
('PlotToPlate', 'Looking for Delicious Recipes? Try These Allotment Gardening Recipes!', 'Tired of the same old recipes? Explore a world of delicious possibilities with these mouth-watering recipes made from homegrown allotment produce.'),
('AllotmentAdventures', 'What Goes on in My Allotment Diary?', 'Ever wondered what a day in the life of an allotment gardener looks like? Join me as I share my seasonal adventures, triumphs, and challenges.'),
('OrganicPlot', 'Why Go Organic in Your Allotment Garden?', 'Discover the magic of organic allotment gardening! Find out why I choose to cultivate my plot using natural methods and how it benefits both me and the environment.');

INSERT INTO comments(post_id, username, comment) VALUES 
(1, 'GardenGal123', 'Your journey is so inspiring! I have been thinking about starting my own allotment garden, and your story gives me hope that I can do it too.'),
(2, 'CityGardener87', 'These tips are a game-changer! I never thought I could have an allotment garden in my tiny apartment, but now I am feeling motivated to give it a try.'),
(3, 'HealthyEater99', 'Could not agree more! There is something magical about eating food you have grown yourself. It just tastes better and feels more nourishing.'),
(4, 'FoodieForLife', 'These recipes look amazing! Cannot wait to try them out with fresh produce from my garden. Thanks for sharing!'),
(5, 'GardenExplorer55', 'Love following your allotment journey! It is so interesting to see how you navigate each season and overcome challenges along the way.'),
(6, 'NatureLover123', 'Thank you for advocating for organic gardening! It is not only better for our health but also for the planet. Let us keep it green!');

