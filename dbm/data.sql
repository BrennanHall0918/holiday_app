--Genre
INSERT INTO genre (genre)
VALUES
('holiday'),
('action'),
('animation'),
('comedy'),
('drama'),
('family'),
('fantasy'),
('musical'),
('rom-com'),
('satire'),
('adventure'),
('thriller'),
('horror'),
('tragedy'),
('war');

--Production
INSERT INTO production (production)
VALUES
('New Line Cinema'),
('MGM'),
('20th Century Fox'),
('Warner Bros.'),
('Castle Rock Entertainment'),
('Walt Disney'),
('Liberty Films'),
('Rankin/Bass Productions'),
('George Minter Productions'),
('Paramount Pictures'),
('Lee Mendelson Film Productions'),
('TriStar Pictures'),
('Hallmark Entertainment'),
('Universal Picutres'),
('Columbia Pictures');

--Director
INSERT INTO director (first_name, last_name)
VALUES
('Jon','Favreau'),
('Chuck','Jones'),
('Ben','Washam'),
('Chris','Columbus'),
('John','McTiernan'),
('Joe','Dante'),
('Robert','Zemeckis'),
('Henry','Selick'),
('Frank','Capra'),
('Larry','Roemer'),
('Bob','Clark'),
('Brian','Desmond Hurst'),
('Tim','Burton'),
('John','Landis'),
('George','Seaton'),
('Richard','Donner'),
('Bill','Melendez'),
('John','Pasquin'),
('Clea','DuVall'),
('Rodney','Gibbons'),
('Richard','Curtis'),
('Jules','Bass'),
('Arthur','Rankin Jr.'),
('Micheal','Dowse'),
('Ernst','Lubitsch'),
('Jonathan','Levine'),
('Setch','Kearsley');

--Streaming
INSERT INTO streaming_platform (streaming_platform)
VALUES
('Prime Video'),
('HBO Max'),
('Disney+'),
('Hulu'),
('Netflix'),
('Peacock'),
('AMC+'),
('Tubi'),
('Paramount+'),
('Apple TV');

--Actor
INSERT INTO actor (first_name, last_name)
VALUES
('Will','Farrell'),
('James','Caan'),
('Bob','Newhart'),
('Edward','Asner'),
('Mary','Steenburgen'),
('Boris','Karloff'),
('Thurl','Ravenscroft'),
('June','Foray'),
('Dal','McKennon'),
('Macaulay','Culkin'),
('Joe','Pesci'),
('Daniel','Stern'),
('John','Heard'),
('Roberts','Blossom'),
('Bruce','Willis'),
('Bonnie','Bedelia'),
('Reginald','VeJohnson'),
('Paul','Gleason'),
('Devoreaux','White'),
('Hoyt','Axton'),
('John','Louie'),
('Keye','Luke'),
('Don','Steele'),
('Susan','Burgess'),
('Tom','Hanks'),
('Chris','Coppola'),
('Michael','Jeter'),
('Leslie','Zemeckis'),
('Eddie','Deezen'),
('Danny','Elfman'),
('Cris','Sarandon'),
('Catherine',"O'Hara"),
('William','Hickey'),
('Glenn','Shadix'),
('James','Stewart'),
('Donna','Reed'),
('Lionel','Barrymore'),
('Thomas','Mitchell'),
('Henry','Travers'),
('Billie','Richards'),
('Burl','Ives'),
('Larry','Mann'),
('Paul','Soles'),
('Stan','Francis'),
('Peter','Billingsley'),
('Melinda','Dillon'),
('Darren','McGavin'),
('Scott','Schwartz'),
('Jean','Shepherd'),
('Alastair','Sim'),
('Jack','Warner'),
('Kathleen','Harrison'),
('Mervyn','Johns'),
('Hermione','Baddeley'),
('Johnny','Depp'),
('Winona','Ryder'),
('Dianne','Wiest'),
('Anthony','Hall'),
('Kathy','Baker'),
('Eddie','Murphy'),
('Dan','Aykroyd'),
('Ralph','Bellamy'),
('Danholm','Elliot'),
('Maurice','Woods'),
('Edward','Gwenn'),
('Maureen',"O'Hara"),
('John','Payne'),
('Gene','Lockhart'),
('Natalie','Wood'),
('Bill','Murray'),
('Karen','Allen'),
('John','Forsythe'),
('John','Glover'),
('Bobcat','Goldthwait'),
('Ann','Altieri'),
('Chris','Doran'),
('Sally','Dryer'),
('Bill','Melendez'),
('Karen','Mendelson'),
('Tim','Allen'),
('Judge','Reinhold'),
('Wendy','Crewson'),
('Eric','Lloyd'),
('David','Krumholtz'),
('Kristen','Stewart'),
('Mackenzie','Davis'),
('Victor','Garber'),
('Alison','Brie'),
('Linda','Hamilton'),
('Matthew','Harbour'),
('Romano','Orazi'),
('Alain','Goulem'),
('Michael','Elkin'),
('Hugh','Grant'),
('Martine','McCutcheon'),
('Liam','Neeson'),
('Bill','Nighy'),
('Gregor','Fisher'),
('Jackie','Vernon'),
('Billy','Wolfe'),
('Jimmy','Durante'),
('Paul','Frees'),
('Winslow','Fegley'),
('Neil','Patrick Harris'),
('Steve','Zahn'),
('June','Raphael'),
('Ballaluna','Resnick'),
('Margaret','Sullavan'),
('James','Stewart'),
('Frank','Morgan'),
('Joseph','Schildkraut'),
('Sara','Haden'),
('Joseph','Gordon-Levitt'),
('Seth','Rogen'),
('Jillian','Bell'),
('Anthony','Mackie'),
('Lizzy','Caplan'),
('Adam','Sandler'),
('Roberts','Schneider'),
('Jackie','Sandler'),
('Austin','Stout'),
('Kevin','Nealon');

--Movies
INSERT INTO program (title, program_type, rating, runtime, nationality, yr_released, production_id, showing, poster, format, critic_score)
VALUES
('elf', 'movie', 'pg', '1:37:00', 'USA', 2003, 1, 'theater', NULL, 'live-action', '7.1'),
('how to grinch stole christmas', 'movie', 'g', '0:26:00', 'USA', 1966, 2, 'direct-to-tv', NULL, 'animation', '8.3'),
('home alone', 'movie', 'pg', '1:43:00', 'USA', 1990, 3, 'theater', NULL, 'live-action', '7.7'),
('die hard', 'movie', 'r', '2:12:00', 'USA', 1988, 3, 'theater', NULL, 'live-action', '8.2'),
('gremlins', 'movie', 'pg', '1:46:00', 'USA', 1984, 4, 'theater', NULL, 'live-action', '7.3'),
('the polar express', 'movie', 'g', '1:40:00', 'USA', 2004, 5, 'theater', NULL, 'animation', '6.6'),
('the nightmare before christmas', 'movie', 'pg', '1:16:00', 'USA', 1993, 6, 'theater', NULL, 'stop-motion', '7.9'),
("it's a wonderful life", 'movie', 'pg', '2:10:00', 'USA', 1946, 7, 'theater', NULL, 'live-action', '8.6'),
('rudolph the red-nosed reindeer', 'tv', 'NR', '0:47:00', 'USA', 1964, 8, 'direct-to-tv', NULL, 'stop-motion', '8'),
('a christmas story', 'movie', 'pg', '1:33:00', 'USA', 1983, 2, 'theater', NULL, 'live-action', '7.6'),
('a christmas carol', 'movie', 'NR', '1:26:00', 'USA', 1951, 9, 'theater', NULL, 'live-action', '8.1'),
('edward scissorhands', 'movie', 'pg-13', '1:45:00', 'USA', 1990, 3, 'theater', NULL, 'live-action', '7.8'),
('trading places', 'movie', 'r', '1:56:00', 'USA', 1983, 10, 'theater', NULL, 'live-action', '7.5'),
('miracle on 34th street', 'movie', 'NR', '1:38:00', 'USA', 1947, 3, 'theater', NULL, 'live-action', '7.9'),
('scrooged', 'movie', 'pg-13', '1:41:00', 'USA', 1988, 10, 'theater', NULL, 'live-action', '6.9'),
('a charlie brown christmas', 'tv', 'tv-g', '0:25:00', 'USA', 1965, 11, 'direct-to-tv', NULL, 'animation', '8.3'),
('the santa clause', 'movie', 'pg', '1:37:00', 'CAN', 1994, 6, 'theater', NULL, 'live-action', '6.6'),
('happiest season', 'movie', 'pg-13', '1:42:00', 'CAN', 2020, 12, 'theater', NULL, 'live-action', '6.6'),
('silent night', 'tv', 'tv-pg', '1:40:00', 'CAN', 2002, 13, 'direct-to-tv', NULL, 'live-action', '7.5'),
('love actually', 'movie', 'r', '2:15:00', 'UK', 2003, 14, 'theater', NULL, 'live-action', '7.5'),
('frosty the snowman', 'tv', 'NR', '0:25:00', 'JPN', 1969, 8, 'direct-to-tv', NULL, 'animation', '7.3'),
('8-bit christmas', 'movie', 'pg', '1:37:00', 'USA', 2021, 4, 'theater', NULL, 'live-action', '6.7'),
('the shop around the corner', 'movie', 'NR', '1:39:00', 'USA', 1940, 2, 'theater', NULL, 'live-action', '8'),
('the night before', 'movie', 'r', '1:41:00', 'USA', 2015, 15, 'theater', NULL, 'live-action', '6.4'),
('eight crazy nights', 'movie', 'pg-13', '1:16:00', 'USA', 2002, 15, 'theater', NULL, 'animation', '5.3');

--Program Description Column (Because I forgot)
ALTER TABLE program
ADD COLUMN description TEXT AFTER critic_score;

--Adding Program Descriptions
UPDATE program
SET description = "Raised as an oversized elf, Buddy travels from the North Pole to New York City to meet his biological father, Walter Hobbs, who doesn't know he exists and is in desperate need of some Christmas spirit."
WHERE program_id = 1;

UPDATE program
SET description = "A grumpy hermit hatches a plan to steal Christmas from the Whos of Whoville."
WHERE program_id = 2;

UPDATE program
SET description = "An eight-year-old troublemaker, mistakenly left home alone, must defend his home against a pair of burglars on Christmas Eve."
WHERE program_id = 3;

UPDATE program
SET description = "A New York City cop, John McClane, tries to save his estranged wife and several others taken hostage by terrorists during a Christmas Eve party at the Nakatomi Plaza Skyscraper in Los Angeles, California."
WHERE program_id = 4;

UPDATE program
SET description = "After receiving an exotic small animal as a Christmas gift, a young man inadvertently breaks three important rules concerning his new pet, which unleashes a horde of malevolently mischievous creatures on a small town."
WHERE program_id = 5;

UPDATE program
SET description = "On Christmas Eve, a young boy embarks on a magical adventure to the North Pole on the Polar Express, while learning about friendship, bravery, and the spirit of Christmas."
WHERE program_id = 6;

UPDATE program
SET description = "Jack Skellington, king of Halloween Town, discovers Christmas Town, but his attempts to bring Christmas to his home causes confusion."
WHERE program_id = 7;

UPDATE program
SET description = "An angel is sent from Heaven to help a desperately frustrated businessman see the value of his own life."
WHERE program_id = 8;

UPDATE program
SET description = "A young reindeer Rudolph lives at the North Pole. His father is one of Santa's reindeer and it is expected that Rudolph will eventually be one too. However, he has a feature which is a setback and causes him to be ostracized: his red nose."
WHERE program_id = 9;

UPDATE program
SET description = "In the 1940s, a young boy named Ralphie Parker attempts to convince his parents, teacher, and Santa Claus that a Red Ryder Range 200 Shot BB gun really is the perfect Christmas gift."
WHERE program_id = 10;

UPDATE program
SET description = "Ebenezer Scrooge, a curmudgeonly, miserly businessman, has no time for sentimentality and largely views Christmas as a waste of time. However, this Christmas Eve, he will be visited by three spirits who will show him the error of his ways."
WHERE program_id = 11;

UPDATE program
SET description = "The solitary life of an artificial man with scissors for hands is upended when he is taken in by a suburban family."
WHERE program_id = 12;

UPDATE program
SET description = "A snobbish Wall Street commodities broker and a wily street hustler find their positions reversed as part of a bet by two callous millionaire brothers who run a brokerage house."
WHERE program_id = 13;

UPDATE program
SET description = "After a divorced New York mother hires a nice old man to play Santa Claus at Macy's, she is startled by his claim to be the genuine article. When his sanity is questioned, a lawyer defends him in court by arguing that he's not mistaken."
WHERE program_id = 14;

UPDATE program
SET description = "A selfish, cynical television executive is haunted by three spirits bearing lessons on Christmas Eve."
WHERE program_id = 15;

UPDATE program
SET description = "Depressed at the commercialism he sees around him, Charlie Brown tries to find a deeper meaning to Christmas."
WHERE program_id = 16;

UPDATE program
SET description = "When a man inadvertently makes Santa fall off his roof on Christmas Eve, he finds himself magically recruited to take his place."
WHERE program_id = 17;

UPDATE program
SET description = "A holiday romantic comedy that captures the range of emotions tied to wanting your family's acceptance, being true to yourself, and trying not to ruin Christmas."
WHERE program_id = 18;

UPDATE program
SET description = "In a cabin on a World War II front, a German mom with a young son mediates a truce between three German and three American soldiers so they can all celebrate Christmas Eve 1944 together."
WHERE program_id = 19;

UPDATE program
SET description = "Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England."
WHERE program_id = 20;

UPDATE program
SET description = "A living snowman and a little girl struggle to elude a greedy magician who is after the snowman's magic hat."
WHERE program_id = 21;

UPDATE program
SET description = "In 1980s Chicago, a 10-year-old sets out on a quest to get the Christmas gift of his generation: the latest and greatest video-game system."
WHERE program_id = 22;

UPDATE program
SET description = "Two employees at a gift shop can barely stand each other, without realizing that they are falling in love through the post as each other's anonymous pen pal."
WHERE program_id = 23;

UPDATE program
SET description = "On Christmas Eve, three lifelong friends spend the night in New York City looking for the Holy Grail of Christmas parties."
WHERE program_id = 24;

UPDATE program
SET description = "Davey Stone, an alcoholic with a criminal record, is sentenced to community service under the supervision of an elderly referee. Davey is then faced with trying to reform and abandon his bad habits."
WHERE program_id = 25;

UPDATE program
SET description = "A miserable conman and his partner pose as Santa and his Little Helper to rob department stores on Christmas Eve. But they run into problems when the conman befriends a troubled kid."
WHERE program_id = 26;


--Movie to Genre Pivot
INSERT INTO program_to_genre (program_id, genre_id)
VALUES
(1, 1), (1, 9), (1, 11),
(2, 1), (2, 6), (2, 4),
(3, 1), (3, 4), (3, 2),
(4, 4), (4, 2), (4, 12),
(5, 4), (5, 13), (5, 7),
(6, 1), (6, 3), (6, 2),
(7, 1), (7, 3), (7, 13),
(8, 1), (8, 9), (8, 5),
(9, 1), (9, 6), (9, 5),
(10, 1), (10, 4), (10, 6),
(11, 1), (11, 6), (11, 5),
(12, 7), (12, 14), (12, 5),
(13, 4),
(14, 1), (14, 4), (14, 5),
(15, 1), (15, 10), (15, 4),
(16, 1), (16, 3), (16, 4),
(17, 1), (17, 4), (17, 5),
(18, 1), (18, 9), (18, 5),
(19, 1), (19, 15),
(20, 1), (20, 9), (20, 10),
(21, 1), (21, 3), (21, 6),
(22, 1), (22, 4), (22, 6),
(23, 1), (23, 9), (23, 5),
(24, 1), (24, 4), (24, 10),
(25, 1), (25, 3), (25, 4);

--Movie to Director Pivot
INSERT INTO program_to_director (program_id, director_id)
VALUES
(1, 1),
(2, 2), (2, 3),
(3, 4),
(4, 5),
(5, 6),
(6, 7),
(7, 8),
(8, 9),
(9, 10),
(10, 11),
(11, 12),
(12, 13),
(13, 14),
(14, 15),
(15, 16),
(16, 17),
(17, 18),
(18, 19),
(19, 20),
(21, 22), (21, 23),
(22, 24),
(23, 25),
(24, 26),
(25, 27);

--Movie to Streaming Pivot
INSERT INTO program_to_streaming (program_id, streaming_platform_id)
VALUES
(1, 2), (1, 6),
(2, 6),
(3, 3), (3, 4),
(4, 3), (4, 4), (4, 1), (4, 6),
(5, 4), (5, 3), (5, 7), (5, 2),
(6, 2),
(7, 3),
(8, 1),
(10, 4), (10, 2),
(11, 8),
(12, 3), (12, 4), (12, 2),
(13, 9), (13, 7), (13, 6),
(14, 9), (14, 3), (14, 4), (14, 1), (14, 6),
(15, 9), (15, 1),
(16, 10),
(17, 3),
(18, 4),
(19, 1), (19, 8),
(20, 1), (20, 6),
(21, 4), (21, 6),
(22, 2),
(23, 2),
(24, 6), (24, 8),
(25, 9);

--Movie to Actor Pivot
INSERT INTO program_to_actor (program_id, actor_id)
VALUES
(1, 1), (1, 2), (1, 3), (1, 4), (1, 5),
(2, 6), (2, 7), (2, 8), (2, 9),
(3, 10), (3, 11), (3, 12), (3, 13), (3, 14),
(4, 15), (4, 16), (4, 17), (4, 18), (4, 19), 
(5, 20), (5, 21), (5, 22), (5, 23), (5, 24),
(6, 25), (6, 26), (6, 27), (6, 28), (6, 29),
(7, 30), (7, 31), (7, 32), (7, 33), (7, 34),
(8, 35), (8, 36), (8, 37), (8, 38), (8, 39),
(9, 40), (9, 41), (9, 42), (9, 43), (9, 44),
(10, 45), (10, 46), (10, 47), (10, 48), (10, 49),
(11, 50), (11, 51), (11, 52), (11, 53), (11, 54),
(12, 55), (12, 56), (12, 57), (12, 58), (12, 59),
(13, 60), (13, 61), (13, 62), (13, 63), (13, 64),
(14, 65), (14, 66), (14, 67), (14, 68), (14, 69),
(15, 70), (15, 71), (15, 72), (15, 73), (15, 74),
(16, 75), (16, 76), (16, 77), (16, 78), (16, 79),
(17, 80), (17, 81), (17, 82), (17, 83), (17, 84),
(18, 5), (18, 85), (18, 86), (18, 87), (18, 88),
(19, 89), (19, 90), (19, 91), (19, 92), (19, 93),
(20, 94), (20, 95), (20, 96), (20, 97), (20, 98),
(21, 99), (21, 100), (21, 101), (21, 102), (21, 8),
(22, 103), (22, 104), (22, 105), (22, 106), (22, 107),
(23, 108), (23, 109), (23, 110), (23, 111), (23, 112),
(24, 113), (24, 114), (24, 115), (24, 116), (24, 117),
(25, 118), (25, 119), (25, 120), (25, 121), (25, 122); 


































