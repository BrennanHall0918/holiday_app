--Join Program Table with Production Table
SELECT
    p.*,
    pr.production
From program p
JOIN production pr
ON p.production_id = pr.production_id
ORDER BY p.program_id;

--Joins All Tables(Production, Actors, Directors, Streaming, and Genres) With Program
SELECT
    p.program_id,
    p.title,
    p.program_type,
    p.rating,
    p.runtime,
    p.nationality,
    p.yr_released,
    p.showing,
    p.format,
    p.critic_score,
    pr.production AS production_company,
    GROUP_CONCAT(DISTINCT g.genre  ORDER BY g.genre SEPARATOR ', ') AS genres,
    GROUP_CONCAT(DISTINCT CONCAT(a.first_name, ' ', a.last_name)
                 ORDER BY a.last_name, a.first_name SEPARATOR ', ') AS actors,
    GROUP_CONCAT(DISTINCT CONCAT(d.first_name, ' ', d.last_name)
                 ORDER BY d.last_name, d.first_name SEPARATOR ', ') AS directors,
    GROUP_CONCAT(DISTINCT sp.streaming_platform
                 ORDER BY sp.streaming_platform SEPARATOR ', ') AS streaming_platforms

FROM program p

LEFT JOIN production pr
    ON p.production_id = pr.production_id

LEFT JOIN program_to_genre pg
    ON p.program_id = pg.program_id
LEFT JOIN genre g
    ON pg.genre_id = g.genre_id

LEFT JOIN program_to_actor pa
    ON p.program_id = pa.program_id
LEFT JOIN actor a
    ON pa.actor_id = a.actor_id

LEFT JOIN program_to_director pd
    ON p.program_id = pd.program_id
LEFT JOIN director d
    ON pd.director_id = d.director_id

LEFT JOIN program_to_streaming ps
    ON p.program_id = ps.program_id
LEFT JOIN streaming_platform sp
    ON ps.streaming_platform_id = sp.streaming_platform_id

GROUP BY
    p.program_id
ORDER BY p.program_id ASC;

-- Filter by Genre (Program)
SELECT 
    p.title,
    p.yr_released,
    p.poster_url
FROM program p
INNER JOIN program_to_genre pg
ON p.program_id = pg.program_id
WHERE pg.genre_id = ?
ORDER BY p.title;

-- Appears In (Actor)
SELECT
    p.program_id,
    p.title
FROM program p
INNER JOIN program_to_actor pa
on p.program_id = pa.program_id
WHERE pa.actor_id = ?
ORDER BY p.title;

-- Most Prolific (Actor)
    SELECT
        COUNT(pa.actor_id) AS movie_count, 
        a.first_name,
        a.last_name
    FROM actor a
    INNER JOIN program_to_actor pa
    ON a.actor_id = pa.actor_id
    GROUP BY a.first_name, a.last_name
    ORDER BY movie_count, a.last_name;

-- Directed (Director)
    SELECT
        p.title,
        d.first_name,
        d.last_name
    FROM director d
    INNER JOIN program_to_director pd
    ON d.director_id = pd.program_id
    INNER JOIN program p
    ON p.program_id = pd.program_id
    WHERE d.director_id = ?
    ORDER BY p.title;

-- Favorite Genre (Director)
    SELECT
        COUNT(pg.program_id) AS genre_count,
        d.first_name,
        d.last_name
    FROM director d
    INNER JOIN program_to_director pd
    ON d.director_id = pd.program_id
    INNER JOIN program_to_genre pg
    ON pd.program_id = pg.program_id
    WHERE d.director_id = 1
    ORDER BY genre_count DESC;

-- Most Used (Genre)
    SELECT
        COUNT(pg.genre_id) AS most_used,
        g.genre
    FROM genre g
    INNER JOIN program_to_genre pg
    ON g.genre_id = pg.genre_id
    GROUP BY g.genre
    ORDER BY most_used DESC;

-- Find Program By Genre (Genre)
    SELECT 
        p.title,
        p.rating,
        p.runtime,
        p.yr_released
    FROM program p
    LEFT JOIN program_to_genre pg
    ON p.program_id = pg.program_id
    WHERE pg.genre_id = ?;

-- Find Program By Production (Production)
    SELECT
        pr.production,
        p.title,
        p.rating,
        p.runtime,
        p.yr_released
    FROM program p
    INNER JOIN production pr
    ON p.production_id = pr.production_id
    WHERE pr.production_id = ?;

--Production Movies Made (Production)
    SELECT
        COUNT(p.program_id) AS total_programs,
        pr.production_id,
        pr.production AS production_company
    FROM production pr
    LEFT JOIN program p
    ON pr.production_id = p.production_id
    GROUP BY pr.production_id
    ORDER BY total_programs DESC; 

--Find Programs on Sreaming Platforms (Streaming)
    SELECT
        p.title,
        p.rating,
        p.runtime,
        p.yr_released
    FROM program p
    INNER JOIN program_to_streaming ps
    ON p.program_id = ps.program_id
    WHERE ps.streaming_platform_id = ?;

--Find Platform Usage Stats (Streaming)
    SELECT
        COUNT(ps.program_id) AS total_programs,
        s.streaming_platform_id,
        s.streaming_platform
    FROM streaming_platform s
    LEFT JOIN program_to_streaming ps
    ON s.streaming_platform_id = ps.streaming_platform_id
    GROUP BY s.streaming_platform_id
    ORDER BY total_programs DESC;



--Fixing AutoIncrememnt(dunno why but it broke)
ALTER TABLE program_to_streaming DROP FOREIGN KEY fk_prog_str;
ALTER TABLE program_to_actor DROP FOREIGN KEY fk_prog_act;
ALTER TABLE program_to_genre DROP FOREIGN KEY fk_prog_gen;
ALTER TABLE program_to_director DROP FOREIGN KEY fk_prog_dir;

ALTER TABLE program
MODIFY program_id MEDIUMINT UNSIGNED NOT NULL AUTO_INCREMENT;

ALTER TABLE program_to_streaming
ADD CONSTRAINT fk_prog_str FOREIGN KEY (program_id) REFERENCES program(program_id);

ALTER TABLE program_to_actor
ADD CONSTRAINT fk_prog_act FOREIGN KEY (program_id) REFERENCES program(program_id);

ALTER TABLE program_to_genre
ADD CONSTRAINT fk_prog_gen FOREIGN KEY (program_id) REFERENCES program(program_id);

ALTER TABLE program_to_director
ADD CONSTRAINT fk_prog_dir FOREIGN KEY (program_id) REFERENCES program(program_id);