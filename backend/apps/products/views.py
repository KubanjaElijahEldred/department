from rest_framework import permissions, viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Product
from .serializers import ProductSerializer


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all().order_by("-created_at")
    serializer_class = ProductSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    @action(detail=True, methods=["post"])
    def favorite(self, request, pk=None):
        return Response({"detail": f"Favorite toggle for product {pk}."})

    @action(detail=True, methods=["post"])
    def reviews(self, request, pk=None):
        return Response({"detail": f"Create review for product {pk}."})
