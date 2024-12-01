ROUTES
USERS
-add user /api/users/signup
expects body: { displayName, username, password, email, role, imageUrl }
displayName: not unique
username: unique
password: not unique
email: unique
role: not unique
imageUrl: not unique

-log in /api/users/login
expects body: { username, password }

POSTS
-get all posts /api/posts/

-add post

COMMENTS
