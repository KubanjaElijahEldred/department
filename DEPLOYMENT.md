# Deployment Guide - Render

This guide walks you through deploying the Bugema Marketplace to **Render**.

## Prerequisites

1. **GitHub Account** - Push your code to GitHub
2. **Render Account** - Sign up at https://render.com
3. **Node.js** (v18+) - For building frontend

## Step 1: Push Code to GitHub

```bash
git init
git add .
git commit -m "Initial commit - ready for deployment"
git remote add origin https://github.com/YOUR_USERNAME/bugema-marketplace.git
git branch -M main
git push -u origin main
```

## Step 2: Create PostgreSQL Database on Render

1. Go to https://dashboard.render.com
2. Click **New +** → **PostgreSQL**
3. Fill in:
   - **Name**: `bugema-marketplace-db`
   - **Database**: `bugema_marketplace`
   - **User**: `postgres`
   - **Region**: Choose closest to you
   - **Plan**: Free (for testing)
4. Click **Create Database**
5. Copy the **Internal Database URL** (you'll need it in Step 3)

## Step 3: Deploy Backend (Django API)

1. Go to https://dashboard.render.com
2. Click **New +** → **Web Service**
3. Select your GitHub repository
4. Fill in:
   - **Name**: `bugema-marketplace-api`
   - **Runtime**: Python 3
   - **Build Command**: 
     ```
     pip install -r backend/requirements-deploy.txt && cd backend && python manage.py collectstatic --noinput
     ```
   - **Start Command**:
     ```
     cd backend && gunicorn config.wsgi:application
     ```
5. Click **Advanced** and add **Environment Variables**:
   ```
   DEBUG=False
   SECRET_KEY=your-very-secure-random-key-here
   ALLOWED_HOSTS=bugema-marketplace-api.onrender.com,localhost
   DATABASE_URL=<paste the database URL from Step 2>
   CORS_ALLOWED_ORIGINS=https://bugema-marketplace-frontend.onrender.com
   ```
6. Click **Create Web Service**
7. Wait for deployment (5-10 minutes)
8. Copy your backend URL (e.g., `https://bugema-marketplace-api.onrender.com`)

## Step 4: Deploy Frontend (React)

1. Go to https://dashboard.render.com
2. Click **New +** → **Static Site**
3. Select your GitHub repository
4. Fill in:
   - **Name**: `bugema-marketplace-frontend`
   - **Build Command**:
     ```
     cd frontend && npm install && npm run build
     ```
   - **Publish Directory**: `frontend/dist`
5. Click **Advanced** and add **Environment Variable**:
   ```
   VITE_API_URL=https://bugema-marketplace-api.onrender.com
   ```
6. Click **Create Static Site**
7. Wait for deployment (3-5 minutes)

## Step 5: Update Frontend API URL

Edit [frontend/src/main.jsx](frontend/src/main.jsx) or create an API config file:

```javascript
// frontend/src/config/api.js
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';
export default API_BASE_URL;
```

Update your API calls to use this URL instead of hardcoded localhost.

## Step 6: Database Migrations

After first deployment:
1. Go to your backend service on Render dashboard
2. Click **Shell** (top right)
3. Run:
   ```bash
   cd backend
   python manage.py migrate
   python manage.py createsuperuser
   ```

## Step 7: Verify Deployment

1. Visit your frontend URL: `https://bugema-marketplace-frontend.onrender.com`
2. Test API: `https://bugema-marketplace-api.onrender.com/api/products/`
3. Admin panel: `https://bugema-marketplace-api.onrender.com/admin/`

## Important Security Notes

- **Never commit `.env` file** - Use environment variables only on Render
- Change `SECRET_KEY` to a strong random string
- Set `DEBUG=False` in production
- Use HTTPS only (Render does this automatically)
- Review CORS settings before going live

## Troubleshooting

**Build fails?**
- Check build logs in Render dashboard
- Ensure `requirements-deploy.txt` is in backend folder

**Database connection error?**
- Verify DATABASE_URL is correctly set
- Check database is in the same region (if possible)

**Frontend can't reach API?**
- Update VITE_API_URL environment variable
- Check CORS_ALLOWED_ORIGINS includes frontend URL
- Verify backend is running (check Render dashboard)

**Static files not loading?**
- Run `python manage.py collectstatic` on Render shell
- Verify STATIC_ROOT is configured

## Free Tier Limitations

- Free databases spin down after 15 mins of inactivity
- Free web services spin down after 15 mins of inactivity
- Restart by visiting your URL again
- For production, upgrade to Paid tier
