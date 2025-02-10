# Blog Website

## Overview
This is a blog website built using **React** for the frontend and **Appwrite** for the backend. The website allows users to sign up, log in, create posts, edit posts, and view all posts.

## Features
- User Authentication (Sign Up & Login)
- Create, Edit, and Delete Posts
- View All Posts
- View Individual Posts
- View User's Own Posts

## Tech Stack
- **Frontend**: React, Redux Toolkit, React Router DOM, Tailwind CSS
- **Backend**: Appwrite
- **State Management**: Redux Toolkit
- **Form Handling**: React Hook Form
- **Rich Text Editor**: TinyMCE

## Screenshots
![Login](/public/images/login.png) 
![Home](/public/images/homepage.png)
![Signup](/public/images/post.png)
![My Posts](/public/images/post-dark.png) 
![Add Post](/public/images/addpost.png)
![Edit Post](/public/images/editpost.png) 

## Installation

### Prerequisites
Ensure you have the following installed:
- **Node.js** (Latest LTS recommended)
- **Appwrite** (Self-hosted or cloud account)

### Clone the repository
```sh
git clone https://github.com/ateendra24/blog.git
cd blog
```

### Install dependencies
```sh
npm install
```

### Set up environment variables
Create a `.env` file in the root directory and add your Appwrite credentials:
```env
VITE_APPWRITE_ENDPOINT=your_appwrite_endpoint
VITE_APPWRITE_PROJECT_ID=your_project_id
VITE_APPWRITE_DATABASE_ID=your_database_id
VITE_APPWRITE_COLLECTION_ID=your_collection_id
VITE_APPWRITE_BUCKET_ID=your_bucket_id
VITE_TINYMCE_API_KEY=your_tinymce_api_key
```

### Run the development server
```sh
npm run dev
```

## Project Structure
```
blog/
│── src/
│   ├── components/        # Reusable UI components
│   ├── pages/             # Different page components
│   ├── store/             # Redux store
│   ├── App.jsx            # Main App component
│   ├── index.js           # Entry point
│── public/                # Static assets
│── package.json           # Project metadata
│── vite.config.js         # Vite configuration
```

## Routing Structure
The application uses `react-router-dom` for client-side routing. Below are the available routes:
| Route         | Component      | Authentication |
|--------------|---------------|----------------|
| `/`          | Home          | Yes            |
| `/login`     | Login         | No             |
| `/signup`    | Signup        | No             |
| `/my-posts`  | AllPosts      | Yes            |
| `/add-post`  | AddPost       | Yes            |
| `/edit-post/:slug` | EditPost | Yes           |
| `/post/:slug` | Post         | Yes             |

## Contributing
Contributions are welcome! Feel free to submit a PR with improvements or bug fixes.

## License
This project is licensed under the **MIT License**.

## Contact
For any queries or suggestions, reach out to [Contact Me](https://ateendra.vercel.app/contact-me).
