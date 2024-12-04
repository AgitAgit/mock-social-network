# **Mock Social Network Project Requirements**

# Mobile First - Instagram Inspired

## **1. Project Description**

Build a mock social network application where users can:

3. add comments to individual posts.
4. Create new posts.

## **2. Functional Requirements**

### **Frontend Features**

- **Session Simulation**:
  - Persist the "logged-in" user data in localStorage for session simulation.
  - On app reload, restore the user session from localStorage.

2. **Logout**:
   - Provide a “Logout” button to clear user data from localStorage and redirect to the login page.
3. **Homepage**:
   - Show the logged-in user’s display name in the navigation bar.
   - Provide a “Create Post” button to navigate to the post creation form.
4. **Post Details Page**:
   - Allow users to add comments.
5. **Create Post Page**:
   - Provide a form for creating a new post.
   - Ensure only a logged-in user can create posts (checked on the frontend).

---

### **Backend Features**

## **3. Technical Requirements**

### **Frontend**

1. **React**:
   - Routes for `/signup`, `/login`, `/`, `/post/:postId`, `/add-post`.
   - Simulate session persistence using localStorage.
2. **State Management**:
   - Use `useState` or `useContext` to manage user state and app data.
3. **Validation**:
   - Validate user input (e.g., non-empty display name and email format) before sending data to the backend.

### **Backend**

1. **Fake Authentication**:
   - No password or session management.
   - Simply store and retrieve user data from the database.
2. **Data Handling**:
   - Handle basic CRUD operations for users, posts, and comments using Mongoose.
3. **API Endpoints**:
   - Users:
     - POST `/users/signup`: Save new user data to MongoDB.
     - POST `/users/login`: Find a user by email and return their data.
   - Posts:
     - GET `/posts`: Retrieve all posts from MongoDB.
     - GET `/posts/:postId`: Retrieve a single post and populate its comments.
     - POST `/posts`: Add a new post to MongoDB.
   - Comments:
     - GET `/comments/post/:postId`: Retrieve comments for a specific post.
     - POST `/comments`: Add a new comment to MongoDB.

---

## **4. Functional Routes**

### **Frontend Routes**

1. **Public Routes**:
   - `/signup`: Signup page.
   - `/login`: Login page.
2. **General Routes**:
   - `/`: Homepage (list of posts).
   - `/post/:postId`: Post details page.
   - `/add-post`: Create post page.

### **Backend API Endpoints**

1. **Users**:
   - POST `/users/signup`: Register a new user with a display name and email.
   - POST `/users/login`: Retrieve user data by email.
2. **Posts**:
   - GET `/posts`: Retrieve all posts.
   - GET `/posts/:postId`: Retrieve a single post and its comments.
   - POST `/posts`: Add a new post.
3. **Comments**:
   - GET `/comments/post/:postId`: Retrieve all comments for a specific post.
   - POST `/comments`: Add a new comment.

---

## **5. Deliverables**

1. **Frontend**:
   - A React app with:
     - Mock signup and login functionality.
     - LocalStorage-based session simulation.
     - Features for viewing, adding, and interacting with posts and comments.
2. **Backend**:
   - A Node.js backend with:
     - RESTful APIs for users, posts, and comments.
     - Data persistence using MongoDB.

---

## **6. Stretch Goals**

1. **User Profile**:
   - Add a page showing the user’s posts and comments.
2. **Search Functionality**:
   - Add a search bar to filter posts by title or content.

## **[27/11/2024]**

## **7. Manage Full User Object in Redux**

### **Objective**: Use Redux to manage the entire logged-in user's object, including properties like `displayName` and `email`. This will replace any local state or `localStorage` dependency.

### **Steps to Implement**:

1. **Directory and File Organization**:
   - Create a `store` or `redux` directory at the root level.
   - Inside, create a `slices` subdirectory for managing different pieces of state.
   - Create a `userSlice.js` file in `slices` to manage user-related state.
2. **Define the Initial State**:
   - The initial state in the `userSlice` should include:
     - `loggedInUser`: Initially `null`, representing no user logged in.
   - The structure of the user object could be:
     ```json
     {
       "_id": "user123",
       "displayName": "John Doe",
       "email": "john.doe@example.com"
     }
     ```
3. **Define Actions**:
   - **`setLoggedInUser`**:
     - Updates the `loggedInUser` with the full user object retrieved after signup or login.
   - **`logout`**:
     - Clears the `loggedInUser` object, resetting it to `null`.
4. **Reducer Implementation**:
   - Write reducers for `setLoggedInUser` and `logout` to handle state updates based on dispatched actions.
   - Ensure that these reducers can handle partial or complete updates to the user object.
5. **Connect Redux Store**:
   - Configure the Redux store in a `store/index.js` file and combine slices if needed (e.g., a `userSlice` and other future slices).
   - Wrap the app in the `Provider` component in `index.js` to make the Redux state available globally.
6. **Session Restoration**:
   - During app initialization (e.g., in `App.js` or a root-level component), check `localStorage` for saved user data.
   - If found, dispatch the `setLoggedInUser` action to restore the session to Redux.
7. **Middleware Consideration**:
   - For persisting changes, you can add middleware to synchronize the `loggedInUser` state with `localStorage` on updates (optional but useful for clean state management).

---

## **8. Dynamically Display User Information in the Navbar**

### **Objective**: Dynamically show the user's display name or the "Login/Signup" links in the navbar based on the `loggedInUser` state from Redux.

### **Steps to Implement**:

1. **Navbar Component Setup**:
   - Create a `components/Navbar.js` file.
   - Design the navbar to include space for:
     - The app name or logo.
     - A section to display:
       - The user’s `displayName` and a "Logout" button if logged in.
       - "Login" and "Signup" links if no user is logged in.
2. **Connect Redux State**:
   - Use the `useSelector` hook to access the `loggedInUser` object from Redux.
   - Dynamically render components or links based on whether `loggedInUser` is `null` or populated.
3. **Logout Handling**:
   - Add a logout button that:
     - Dispatches the `logout` action to reset `loggedInUser` to `null`.
     - Clears the `localStorage` user session.
4. **Testing and Validation**:
   - Log in as a user to see the name appear in the navbar.
   - Log out and verify that the UI updates correctly to show "Login/Signup."
   - Ensure the app correctly handles:
     - Initial state with no user logged in.
     - A restored session where the user is already logged in.

### **[28/11/2024]**

---

### **9. MongoDB & Mongoose Integration**

### **Learning Objectives**

- Understand how to define schemas in Mongoose.
- Learn to interact with MongoDB using Mongoose (CRUD operations).

### **Tasks**

1. **Setup MongoDB and Mongoose**:
   - Connect to MongoDB using Mongoose.
   - Create a `models` directory for schema definitions.
2. **Define User Schema**:
   - Create a schema with fields for `displayName`, `email`, and `password`.
   - Ensure `email` is unique.
3. **Define Post Schema**:
   - Include fields for `title`, `content`, and `authorId`.
4. **Define Comment Schema**:
   - Include fields for `postId`, `text`, and `authorId`.
5. **Test CRUD Operations**:
   - Create and manipulate sample data using Mongoose methods.

---

### **10. Password Management with Bcrypt**

### **Learning Objectives**

- Understand why passwords must be hashed.
- Learn how to use bcrypt for hashing and verification.

### **Tasks**

1. **Install Bcrypt**:
   - Add bcrypt to the project for password security.
2. **Modify Signup Endpoint**:
   - Hash the password before saving user data.
3. **Modify Login Endpoint**:
   - Verify the hashed password during login.

---

### **11. JWT Authentication**

### **Learning Objectives**

- Understand JWTs for stateless authentication.
- Learn how to generate and verify JWTs.

### **Tasks**

1. **Install JWT**:
   - Add JSON Web Token support to the project.
2. **Generate JWT on Login**:
   - Issue a token for authenticated users.
3. **Store JWT in Cookies**:
   - Use secure HTTP-only cookies to store the JWT.

---

### **12. Middleware for Protected Routes**

### **Learning Objectives**

- Learn to use middleware to secure routes with JWTs.

### **13. Frontend Routing Precision for Auth Page**

### **1. Dedicated `/auth` Page**

- The `/auth` route will display a single **Auth Page** component.
- This component will include two child components:
  - **Sign In Component**: For existing users to log in.
  - **Sign Up Component**: For new users to register.
- Use a state variable within the Auth Page to toggle between **Sign In** and **Sign Up** views.

---

### **Proposed Routing Structure**

### **Public Routes**

- **`/auth`**: Authentication page (Sign In or Sign Up).

### **Protected Routes**

- Routes such as `/`, `/add-post`, `/post/:postId`, etc., are protected by middleware that ensures the user is authenticated.

---

### **Flow for `/auth`**

1. **Components**:
   - **AuthPage**: The parent component managing the toggle state.
   - **SignInForm**: The component with the login form.
   - **SignUpForm**: The component with the registration form.
2. **State Management**:
   - The toggle state is managed within the **AuthPage**.
   - A simple state variable (e.g., `isSignUp`) determines which form to display.
3. **UI Details**:
   - The AuthPage has buttons or links to toggle between **Sign In** and **Sign Up**.
   - Example:
     - "Don't have an account? Sign Up" (shows the Sign Up form).
     - "Already have an account? Sign In" (shows the Sign In form).

---

### **Frontend Route Configuration Example**

| Route       | Component        | Access    | Description                                          |
| ----------- | ---------------- | --------- | ---------------------------------------------------- |
| `/auth`     | `AuthPage`       | Public    | Displays the Sign In or Sign Up form based on state. |
| `/`         | `HomePage`       | Protected | Displays the list of posts (requires auth).          |
| `/add-post` | `CreatePostPage` | Protected | Form to create a new post (requires auth).           |
| `/post/:id` | `PostDetails`    | Protected | Displays a post and its comments (requires auth).    |

---

### **Expected Component Behavior**

1. **SignInForm**:
   - Accepts email and password.
   - Sends data to `/users/login`.
   - On success:
     - Stores the JWT or token securely.
     - Redirects to the protected homepage (`/`).
2. **SignUpForm**:
   - Accepts display name, email, and password.
   - Sends data to `/users/signup`.
   - On success:
     - Logs the user in automatically or prompts them to log in.
3. **AuthPage**:
   - Displays either the **SignInForm** or **SignUpForm** based on the toggle state.
   - Includes toggle links/buttons to switch between forms.

---

### **Session Flow**

- **Logged-In State**: Check JWT in localStorage or Redux state.
- **Not Logged In**:
  - Redirect the user to `/auth` for authentication.

---

### **Stretch Goal**

Add animations or transitions when toggling between the Sign In and

### **Tasks**

1. **Create Authentication Middleware**:
   - Implement middleware to verify the JWT and extract user information.
2. **Protect the `POST /posts` Endpoint**:
   - Restrict post creation to authenticated users.
3. **Protect the `POST /comments` Endpoint**:
   - Ensure only authenticated users can add comments.

---

[Build and Deploy a Full Stack MERN Social Media App with Auth, Pagination, Comments | MERN Course](https://www.youtube.com/watch?app=desktop&v=VsUzmlZfYNg&t=12191s)

[MERN Stack Social Media App Tutorial | React Node.js full Course for Beginners](https://www.youtube.com/watch?v=WWhgssiyfwY)

---

### **Stretch Goals**

1. **Logout Functionality**:
   - Implement a feature to clear the JWT cookie on logout.
2. **Custom Error Handling**:
   - Add middleware for centralized error handling.

---

### **Expected Outcomes**

By the end of the session, students will:

- Set up MongoDB and Mongoose for data persistence.
- Use bcrypt for secure password management.
- Implement JWT-based authentication for secure, stateless sessions.
- Protect sensitive routes with middleware.

---

This setup emphasizes simplicity while providing opportunities for students to practice CRUD operations and basic frontend-backend communication. Let me know if you need further tweaks!

חלוקת צוותים
