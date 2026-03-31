# Bugema Marketplace,

A modern, responsive full-stack marketplace starter built with:

- Frontend: React + Vite
- Backend: Django REST Framework
- Database: PostgreSQL
- Authentication: JWT
- Image storage: Cloud storage placeholder

## Pages Included

- Home Page
- Login Page
- Register Page
- Product Listing Page
- Product Details Page
- User Dashboard
- Upload Product Page
- Chat Page
- Admin Panel

## Folder Structure

```text
miniwebsite-fullstack/
├── frontend/
│   ├── package.json
│   ├── vite.config.js
│   ├── index.html
│   └── src/
│       ├── main.jsx
│       ├── App.jsx
│       ├── styles.css
│       ├── data/mockData.js
│       ├── components/
│       │   ├── Layout.jsx
│       │   ├── Navbar.jsx
│       │   └── ProductCard.jsx
│       └── pages/
│           ├── HomePage.jsx
│           ├── LoginPage.jsx
│           ├── RegisterPage.jsx
│           ├── ProductListingPage.jsx
│           ├── ProductDetailsPage.jsx
│           ├── DashboardPage.jsx
│           ├── UploadProductPage.jsx
│           ├── ChatPage.jsx
│           └── AdminPage.jsx
└── backend/
    ├── requirements.txt
    ├── manage.py
    ├── config/
    │   ├── __init__.py
    │   ├── settings.py
    │   ├── urls.py
    │   └── wsgi.py
    └── apps/
        ├── __init__.py
        ├── accounts/
        │   ├── __init__.py
        │   ├── models.py
        │   ├── serializers.py
        │   ├── views.py
        │   └── urls.py
        ├── products/
        │   ├── __init__.py
        │   ├── models.py
        │   ├── serializers.py
        │   ├── views.py
        │   └── urls.py
        ├── chat/
        │   ├── __init__.py
        │   ├── models.py
        │   ├── serializers.py
        │   ├── views.py
        │   └── urls.py
        └── dashboard/
            ├── __init__.py
            ├── views.py
            └── urls.py
```

## API Endpoints

### Authentication

- `POST /api/auth/register/`
- `POST /api/auth/login/`
- `POST /api/auth/token/refresh/`
- `POST /api/auth/logout/`
- `POST /api/auth/password-reset/`
- `GET /api/auth/profile/`

### Products

- `GET /api/products/`
- `POST /api/products/`
- `GET /api/products/{id}/`
- `PUT /api/products/{id}/`
- `DELETE /api/products/{id}/`
- `POST /api/products/{id}/favorite/`
- `POST /api/products/{id}/reviews/`

### Chat

- `GET /api/chat/threads/`
- `POST /api/chat/threads/`
- `GET /api/chat/threads/{id}/messages/`
- `POST /api/chat/threads/{id}/messages/`

### Admin Dashboard

- `GET /api/dashboard/analytics/`
- `GET /api/dashboard/users/`
- `GET /api/dashboard/products/`

## Database Models

### User

- `full_name`
- `email`
- `password`
- `role`
- `avatar`
- `bio`
- `phone_number`

### Product

- `owner`
- `title`
- `description`
- `category`
- `price`
- `rating`
- `status`
- `created_at`

### ProductImage

- `product`
- `view_type` (`front`, `side`, `back`, `extra`)
- `image_url`

### Review

- `product`
- `author`
- `rating`
- `comment`

### Favorite

- `user`
- `product`

### ChatThread

- `buyer`
- `seller`
- `product`

### Message

- `thread`
- `sender`
- `content`

## Setup Instructions

### Frontend

1. Open a terminal in `miniwebsite-fullstack/frontend`
2. Run `npm install`
3. Run `npm run dev`

### Backend

1. Open a terminal in `miniwebsite-fullstack/backend`
2. Create a virtual environment
3. Install dependencies with `pip install -r requirements.txt`
4. Create a PostgreSQL database
5. Update environment variables for DB, JWT secret, and storage
6. Run migrations:
   - `python manage.py makemigrations`
   - `python manage.py migrate`
7. Start the server with `python manage.py runserver`

## Notes

- This is a starter scaffold, not a fully installed app.
- Cloud storage can be connected through Cloudinary, Firebase Storage, or AWS S3.
- JWT is configured conceptually through `djangorestframework-simplejwt`.
