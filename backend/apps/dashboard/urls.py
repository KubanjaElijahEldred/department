from django.urls import path
from .views import AnalyticsView, ProductsAdminView, UsersAdminView

urlpatterns = [
    path("analytics/", AnalyticsView.as_view(), name="analytics"),
    path("users/", UsersAdminView.as_view(), name="dashboard-users"),
    path("products/", ProductsAdminView.as_view(), name="dashboard-products"),
]
