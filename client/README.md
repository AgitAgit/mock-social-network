## **API Documentation**

## **Users**

### **POST /users**

- **Description**: Creates a new user with the specified details.

- **Route**: `/users`

- **Method**: `POST`

- **Request Body**:

  - `displayName` (string, required): The display name of the user.
  - `username` (string, required): The username of the user.
  - `password` (string, required): The password of the user.
  - `email` (string, required): The email address of the user.
  - `role` (string, optional): The role of the user (e.g., "admin", "user").
  - `imageUrl` (string, optional): The URL of the user's profile image.

- **Response**:

  - **201 Created**: Returns the created user.
  - **500 Internal Server Error**: If an error occurs during the process.

- **Example Request**:

```
  POST /users
  Content-Type: application/json
  Body:
  {
    "displayName": "John Doe",
    "username": "john_doe",
    "password": "password123",
    "email": "john.doe@example.com",
    "role": "user",
    "imageUrl": "http://example.com/john.jpg"
  }
```

- **Example Response**:

```
  {
    "mongoMessage": {
      "displayName": "John Doe",
      "username": "john_doe",
      "email": "john.doe@example.com",
      "_id": "67446d8e8c9edc19b0f4b1df",
      "__v": 0
    }
  }
```

---

### **POST /users/login**

- **Description**: Authenticates a user and generates a JWT token.

- **Route**: `/users/login`

- **Method**: `POST`

- **Request Body**:

  - `username` (string, required): The username of the user.
  - `password` (string, required): The password of the user.

- **Response**:

  - **200 OK**: Returns the authentication token and a success message.
  - **400 Bad Request**: If the username or password is invalid.

- **Example Request**:

```
 POST /users/login
  Content-Type: application/json
  Body:
  {
    "username": "john_doe",
    "password": "password123"
  }
```

- **Example Response**:

```
 {
    "message": "User john_doe logged in successfully.",
    "token": "<JWT token>"
 }
```

---

### **GET /users**

- **Description**: Retrieves all users from the database.

- **Route**: `/users`

- **Method**: `GET`

- **Authentication**: Requires Bearer token authentication.

- **Response**:

  - **200 OK**: Returns an array of users.
  - **401 Unauthorized**: If the user is not authenticated.

- **Example Request**:

```
 GET /users
  Authorization: Bearer <token>
```

- **Example Response**:

```
{
  "_id": "67446d8e8c9edc19b0f4b1df",
  "displayName": "John Doe",
  "username": "john_doe",
  "email": "john.doe@example.com",
  "__v": 0
}
```

---

### **GET /users/data/self**

- **Description**: Retrieves details of the logged user.

- **Route**: `/users/data/self`

- **Method**: `GET`

- **Authentication**: Requires Bearer token authentication.

- **Response**:

  - **200 OK**: Returns the user details.
  - **404 Not Found**: If the user does not exist.

- **Example Request**:

```
  GET /users/data/self
```

- **Example Response**:

```
{
    "user": {
        "_id": "674f281b4049311283ecde14",
        "displayName": "Pauline Torphy",
        "username": "Keagan_K",
        "password": "iAW7qvU5ePJzqjU",
        "email": "Antonietta61@hotmail.com",
        "role": "Member",
        "profilePic": "https://picsum.photos/seed/dM1bUHY/500/500",
        "savedPosts": [],
        "__v": 0,
        "createdAt": "2024-12-03T15:47:39.868Z",
        "updatedAt": "2024-12-03T15:47:39.868Z"
    },
    "Posts": [
        {
            "id": "674f281c4049311283ecde22",
            "image": "https://loremflickr.com/500/500?lock=5848338517748551"
        },
        {
            "id": "674f281c4049311283ecde33",
            "image": "https://loremflickr.com/500/500?lock=7445529010233412"
        }
    ],
    "followers": 5,
    "following": 4
}
```

---

### **GET /users/data/:id**

- **Description**: Retrieves details of a single user by ID.

- **Route**: `/users/data/:id`

- **Method**: `GET`

- **Path Parameters**:

  - `id` (string, required): MongoDB Object ID of the user.

- **Response**:

  - **200 OK**: Returns the user details.
  - **404 Not Found**: If the user does not exist.

- **Example Request**:

```
  GET /users/data/67446d8e8c9edc19b0f4b1df
```

- **Example Response**:

```
{
    "user": {
        "_id": "674f281b4049311283ecde14",
        "displayName": "Pauline Torphy",
        "username": "Keagan_K",
        "password": "iAW7qvU5ePJzqjU",
        "email": "Antonietta61@hotmail.com",
        "role": "Member",
        "profilePic": "https://picsum.photos/seed/dM1bUHY/500/500",
        "savedPosts": [],
        "__v": 0,
        "createdAt": "2024-12-03T15:47:39.868Z",
        "updatedAt": "2024-12-03T15:47:39.868Z"
    },
    "Posts": [
        {
            "id": "674f281c4049311283ecde22",
            "image": "https://loremflickr.com/500/500?lock=5848338517748551"
        },
        {
            "id": "674f281c4049311283ecde33",
            "image": "https://loremflickr.com/500/500?lock=7445529010233412"
        }
    ],
    "followers": 5,
    "following": 4
}
```

---

### **GET /users/logout**

- **Description**: Logs the user out by clearing the JWT token from the cookie.

- **Route**: `/users/logout`

- **Method**: `GET`

- **Authentication**: No authentication required.

- **Response**:

  - **200 OK**: Logs the user out by clearing the token cookie.
  - **500 Internal Server Error**: If an error occurs during the process.

- **Example Request**:

```
 GET /users/logout
```

- **Example Response**:

```
  {
    "message": "User logged out successfully."
  }
```

## **Posts**

### **GET /posts**

- **Description**: Retrieves all posts with their comments and author details.

- **Route**: `/posts`

- **Method**: `GET`

- **Authentication**: Requires Bearer token authentication (`authUser` middleware).

- **Response**:

  - **200 OK**: Returns an array of posts with nested author and comment details.
  - **401 Unauthorized**: If the user is not authenticated.

- **Example Request**:

```

GET /posts
Authorization: Bearer <token>

```

- **Example Response**:

```

`[
{
"id": "64d0f2c81b8e8c635f5b4d8e",
"title": "Post Title 1",
"content": "This is the content of the first post.",
"postImageUrl": "http://example.com/post1.jpg",
"authorId": {
"displayName": "John Doe",
"profilePic": "http://example.com/johndoe.jpg"
},
"commentIds": [
{
"content": "Great post!",
"authorId": {
"displayName": "Jane Doe",
"profilePic": "http://example.com/janedoe.jpg"
}
}
]
}
]

```

---

### **POST /posts**

- **Description**: Creates a new post.

- **Route**: `/posts`

- **Method**: `POST`

- **Authentication**: Requires Bearer token authentication.

- **Request Body**:

  - `title` (string, required): The title of the post.
  - `content` (string, required): The content of the post.
  - `postImageUrl` (string, optional): URL of the post's image.

- **Response**:

  - **200 OK**: The newly created post.
  - **500 Internal Server Error**: If an error occurs during the process.

- **Example Request**:

```

`POST /posts
Authorization: Bearer <token>
Content-Type: application/json
Body:
{
  "title": "Post title",
  "content": "Post content",
  "postImageUrl": "http://example.com/image.jpg"
}`

```

- **Example Response**:

```

`{
  "message": {
    "title": "test",
    "content": "test2",
    "authorId": "674ee2983c78591a416d640e",
    "commentIds": [],
    "_id": "674ee8b1a668e59df3fe70d2",
    "createdAt": "2024-12-03T11:17:05.921Z",
    "updatedAt": "2024-12-03T11:17:05.921Z",
    "__v": 0
  }
}`

```

---

### **GET /posts/:postId**

- **Description**: Retrieves details of a single post by ID, including its author and comments.

- **Route**: `/posts/:postId`

- **Method**: `GET`

- **Authentication**: Requires Bearer token authentication.

- **Path Parameters**:

  - `postId` (string, required): MongoDB Object ID of the post.

- **Response**:

  - **200 OK**: The post details, including author and comments.
  - **404 Not Found**: If the post does not exist.

- **Example Request**:

```

GET /posts/64d0f2c81b8e8c635f5b4d8e
Authorization: Bearer <token>`

```

- **Example Response**:

```

`{
 "post": {
   "title": "Post title",
   "content": "Post content",
   "authorId": {
     "displayName": "Author Display Name",
     "profilePic": "http://example.com/author.jpg"
   },
   "commentIds": [
     {
       "authorId": {
         "displayName": "Commenter Display Name",
         "profilePic": "http://example.com/commenter.jpg"
       },
       "content": "Comment content"
     }
   ]
 }
}`

```

---

### **POST /posts/:postId/like**

- **Description**: Likes a specific post.

- **Route**: `/posts/:postId/like`

- **Method**: `POST`

- **Authentication**: Requires Bearer token authentication.

- **Path Parameters**:

  - `postId` (string, required): MongoDB Object ID of the post.

- **Response**:

  - **200 OK**: Post liked successfully.
  - **404 Not Found**: If the post does not exist.
  - **400 Bad Request**: If the user has already liked the post.

- **Example Request**:

```

`POST: /posts/64d0f2c81b8e8c635f5b4d8e/like

Authorization: Bearer <token>`

```

- **Example Response**:

```

`{
  "message": "Post liked successfully",
  "post": {
    "_id": "64d0f2c81b8e8c635f5b4d8e",
    "likedBy": ["userId"]
  }
}`

```

---

### **POST /posts/:postId/save**

- **Description**: Saves a specific post to the user's saved posts list.

- **Route**: `/posts/:postId/save`

- **Method**: `POST`

- **Authentication**: Requires Bearer token authentication.

- **Path Parameters**:

  - `postId` (string, required): MongoDB Object ID of the post.

- **Response**:

  - **200 OK**: Post saved successfully.
  - **404 Not Found**: If the post does not exist.
  - **400 Bad Request**: If the user has already saved the post.

- **Example Request**:

```

POST /posts/64d0f2c81b8e8c635f5b4d8e/save
Authorization: Bearer <token>

```

- **Example Response**:

```
{
"message": "Post saved successfully",
"user": {
"_id": "userId",
"savedPosts": ["64d0f2c81b8e8c635f5b4d8e"]
  }
}
```

## **Comments**

### **GET /api/comments/:postId**

- **Description**: Retrieves all comments for a specific post by its ID.

- **Route**: `/api/comments/:postId`

- **Method**: `GET`

- **Authentication**: No authentication required.

- **Path Parameters**:

  - `postId` (string, required): MongoDB Object ID of the post.

- **Response**:

  - **200 OK**: An array of comments for the specified post.

- **Example Request**:

```
 GET /api/comments/674444e4810707ebc8505bb2
```

- **Example Response**:

```
 {
    "postId": "674444e4810707ebc8505bb2",
    "comments": [
      {
        "_id": "674466c3ab88a86725c6c0a8",
        "parentPostId": "674444e4810707ebc8505bb2",
        "commentContent": "This is a comment",
        "authorId": "67432e35d9cabb6b21047e40",
        "createdAt": "2024-12-03T11:17:05.921Z",
        "updatedAt": "2024-12-03T11:17:05.921Z",
        "__v": 0
      },
      ...
    ]
  }
```

---

### **POST /api/comments/:postId**

- **Description**: Adds a new comment to a specific post.

- **Route**: `/api/comments/:postId`

- **Method**: `POST`

- **Authentication**: Requires authentication (user must be logged in).

- **Path Parameters**:

  - `postId` (string, required): MongoDB Object ID of the post.

- **Request Body**:

  - `content` (string, required): The content of the comment.

- **Response**:

  - **200 OK**: The newly created comment and the updated post.
  - **500 Internal Server Error**: If an error occurs during the process.

- **Example Request**:

```
 POST /api/comments/674444e4810707ebc8505bb2
  Authorization: Bearer <token>
  Content-Type: application/json
  Body:
  {
    "content": "This is a new comment"
  }
```

- **Example Response**:

```
 {
    "yourComment": {
      "parentPostId": "674444e4810707ebc8505bb2",
      "commentContent": "This is a new comment",
      "authorId": "67432e35d9cabb6b21047e40",
      "_id": "674466c3ab88a86725c6c0a8",
      "__v": 0
    },
    "parentPost": {
      "_id": "674444e4810707ebc8505bb2",
      "title": "Post Title",
      "content": "Post Content",
      "commentIds": [
        "674466c3ab88a86725c6c0a8"
      ],
      "__v": 0
    }
  }
```
