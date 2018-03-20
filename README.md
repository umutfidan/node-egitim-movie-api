# node-egitim-movie-api
Node.JS Eğitim Seti - Movie API test

# Movies

| Route | HTTP Verb | POST body | Description |
| --- | --- | --- | --- |
| /api/movies/ | `GET` | Empty | List all movies. |
| /api/movies/ | `POST` | {`title`:`foo`, `category`:`bar`, `country`: `Turkey`,year:1990,director:`id`,imdb_score:9.5 | Create a new movie |
| /api/movies/:movie_id | `GET` | Empty | Get a movie. |
| /api/movies/:movie_id | `PUT` | {`name`:`foo`,`surname`:`bar`} | Update a movie with new info. |
| /api/movies/:movie_id | `DELETE` | Empty | Delete a movie. |
| /api/movies/top10 | `GET` | Empty | Get the top 10 movies. |
| /api/movies/between/:start_year/:end_year | `GET` | Empty | Movies between two years. |

# Directors

| Route | HTTP Verb | POST body | Description |
| --- | --- | --- | --- |
| /api/directors/ | `GET` | Empty | List all directors. |
| /api/directors/ | `POST` | {name:`foo`,surname:`bar`,bio:`lorem ipsum`} | Create a new director. |
| /api/directors/:director_id | GET | Empty | Get a director
| /api/directors/:director_id | PUT | {'name':'foo','surname':'bar'} | Update a director with new info.
| /api/directors/:director_id | DELETE | Empty | Delete a director
| /api/directors/:best10movie | GET | Empty | The director's top 10 films.

# Users

|Route | HTTP Verb | Post body | Description |
| --- | --- | --- | --- |
| /register | POST | POST body | Description

