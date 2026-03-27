from rest_framework.permissions import IsAdminUser
from rest_framework.response import Response
from rest_framework.views import APIView


class AnalyticsView(APIView):
    permission_classes = [IsAdminUser]

    def get(self, request):
        return Response(
            {
                "total_users": 1240,
                "total_products": 386,
                "open_chats": 54,
                "favorite_actions": 218,
            }
        )


class UsersAdminView(APIView):
    permission_classes = [IsAdminUser]

    def get(self, request):
        return Response({"detail": "Admin user list endpoint."})


class ProductsAdminView(APIView):
    permission_classes = [IsAdminUser]

    def get(self, request):
        return Response({"detail": "Admin product moderation endpoint."})
