# Binge-it
*A web application where users can post, comment on and favorite TV shows they are currently binge watching.*

## Technologies Used
* Node.js & Express.js. For the HTTP backend server.
* React.js. For the front-end/client interface of our app.
* PostgreSQL. As our relation database management system.
* pg-promise. For interfacing with our database in our backend code.
* CSS3. 

## Database Schema
![database schema diagram](./assets/schema_diagram.png)

## API Endpoints
- **Users**

  | Method | Endpoint     | Description           | Properties sent in JSON body |
  | ------ | ------------ | --------------------- | ---------------------------- |
  | GET    | `/users`     | Get all users         | n/a                          |
  | GET    | `/users/:id` | Get single user by id | n/a                          |
  | POST   | `/users`     | Add new user          | `avatar_url`, `username`     |

- **Genres**

  | Method | Endpoint  | Description    | Properties sent in JSON body |
  | ------ | --------- | -------------- | ---------------------------- |
  | GET    | `/genres` | Get all genres | n/a                          |
  | POST   | `/genres` | Add new genre  | `genre_name`                 |

- **Shows**

  | Method | Endpoint                 | Description                         | Properties sent in JSON body              |
  | ------ | ------------------------ | ----------------------------------- | ----------------------------------------- |
  | GET    | `/shows`                 | Get all shows                       | n/a                                       |
  | GET    | `/shows/:id`             | Get single show by id               | n/a                                       |
  | POST   | `/shows`                 | Add new show                        | `title`, `img_url`, `user_id`, `genre_id` |
  | GET    | `/shows/genre/:genre_id` | Get all shows for specific genre_id | n/a                                       |
  | GET    | `/shows/user/:user_id`   | Get all shows for specific user_id  | n/a                                       |

- **Comments**

  | Method | Endpoint                  | Description                           | Properties sent in JSON body         |
  | ------ | ------------------------- | ------------------------------------- | ------------------------------------ |
  | GET    | `/comments/show/:show_id` | Get all comments for specific show_id | n/a                                  |
  | POST   | `/comments`               | Add new comment                       | `comment_body`, `user_id`, `show_id` |
  
  
