--Join Program Table with Production Table
SELECT
    p.*,
    pr.production
From program p
JOIN production pr
ON p.production_id = pr.production_id
ORDER BY p.program_id;

--The Everything Query(Production, Actors, Directs, Streaming, and Genres)
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