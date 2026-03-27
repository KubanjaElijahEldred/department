from django.urls import include, path

urlpatterns = [
    path("api/auth/", include("apps.accounts.urls")),
    path("api/products/", include("apps.products.urls")),
    path("api/chat/", include("apps.chat.urls")),
    path("api/dashboard/", include("apps.dashboard.urls")),
]
