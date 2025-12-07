DROP DATABASE IF EXISTS holidayprogramdb;
CREATE DATABASE holidayprogramdb;
USE holidayprogramdb;

CREATE TABLE genre (
    genre_id TINYINT UNSIGNED AUTO_INCREMENT NOT NULL,
    genre VARCHAR(30),
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT pk_genre PRIMARY KEY (genre_id)
);

CREATE TABLE production (
    production_id TINYINT UNSIGNED AUTO_INCREMENT NOT NULL,
    production VARCHAR (60),
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT pk_production PRIMARY KEY (production_id)
);

CREATE TABLE director (
    director_id TINYINT UNSIGNED AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT pk_director PRIMARY KEY (director_id)
);

CREATE TABLE streaming_platform (
    streaming_platform_id TINYINT UNSIGNED AUTO_INCREMENT NOT NULL,
    streaming_platform VARCHAR(30),
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT pk_streaming PRIMARY KEY (streaming_platform_id)
);

CREATE TABLE actor (
    actor_id SMALLINT UNSIGNED AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    constraint pk_actor PRIMARY KEY (actor_id)
);

CREATE TABLE program (
    program_id MEDIUMINT UNSIGNED AUTO_INCREMENT NOT NULL,
    title VARCHAR(50) NOT NULL,
    program_type ENUM('movie', 'tv') DEFAULT 'movie',
    rating VARCHAR(5) NOT NULL,
    runtime TIME,
    nationality VARCHAR(3) NOT NULL,
    yr_released YEAR,
    production_id TINYINT UNSIGNED NOT NULL,
    showing ENUM('theater', 'direct-to-tv') DEFAULT 'theater',
    poster BLOB,
    format ENUM('live-action', 'animation', 'stop-motion') DEFAULT 'live-action',
    critic_score VARCHAR(5) NOT NULL,
    decription TEXT,
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT pk_movie PRIMARY KEY (program_id),
    CONSTRAINT fk_production FOREIGN KEY (production_id) REFERENCES production (production_id)
);

CREATE TABLE program_to_streaming (
    program_id MEDIUMINT UNSIGNED NOT NULL,
    streaming_platform_id TINYINT UNSIGNED NOT NULL,
    CONSTRAINT fk_prog_str FOREIGN KEY (program_id) REFERENCES program (program_id),
    CONSTRAINT fk_str_mov FOREIGN KEY (streaming_platform_id) REFERENCES streaming_platform (streaming_platform_id)
); 

CREATE TABLE program_to_actor (
    program_id MEDIUMINT UNSIGNED NOT NULL,
    actor_id SMALLINT UNSIGNED NOT NULL,
    CONSTRAINT fk_prog_act FOREIGN KEY (program_id) REFERENCES program (program_id),
    CONSTRAINT fk_act_mov FOREIGN KEY (actor_id) REFERENCES actor (actor_id)
);

CREATE TABLE program_to_genre (
    program_id MEDIUMINT UNSIGNED NOT NULL,
    genre_id TINYINT UNSIGNED NOT NULL,
    CONSTRAINT fk_prog_gen FOREIGN KEY (program_id) REFERENCES program (program_id),
    CONSTRAINT fk_gen_mov FOREIGN KEY (genre_id) REFERENCES genre (genre_id)
);

CREATE TABLE program_to_director (
    program_id MEDIUMINT UNSIGNED NOT NULL,
    director_id TINYINT UNSIGNED NOT NULL,
    CONSTRAINT fk_prog_dir FOREIGN KEY (program_id) REFERENCES program (program_id),
    CONSTRAINT fk_dir_mov FOREIGN KEY (director_id) REFERENCES director (director_id)
);


