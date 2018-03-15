# node-egitim-movie-api
Node.JS Eğitim Seti - Movie API test

# Movies

| Route | HTTP Verb | POST body | Description |
| --- | --- | --- | --- |
| /api/movies/ | `GET` | Empty | List all movies. |
| /api/movies/ | `POST` | {`title`:`foo`, `category`:`bar`, `country`: `Italy` |
| /api/movies/:movie_id | `GET` | Empty | Get a movie. |