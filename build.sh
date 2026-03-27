#!/bin/bash

# Exit on error
set -e

echo "Installing frontend dependencies..."
cd frontend
npm install
npm run build
cd ..

echo "Installing backend dependencies..."
cd backend
pip install -r ../requirements-deploy.txt
python manage.py collectstatic --noinput
cd ..

echo "Build completed successfully!"
