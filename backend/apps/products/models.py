from django.conf import settings
from django.db import models


class Product(models.Model):
    CATEGORY_CHOICES = (
        ("electronics", "Electronics"),
        ("fashion", "Fashion"),
        ("books", "Books"),
        ("furniture", "Furniture"),
    )

    owner = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    description = models.TextField()
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES)
    price = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    rating = models.DecimalField(max_digits=3, decimal_places=2, default=0)
    created_at = models.DateTimeField(auto_now_add=True)


class ProductImage(models.Model):
    VIEW_TYPES = (
        ("front", "Front"),
        ("side", "Side"),
        ("back", "Back"),
        ("extra", "Extra"),
    )

    product = models.ForeignKey(Product, related_name="images", on_delete=models.CASCADE)
    view_type = models.CharField(max_length=20, choices=VIEW_TYPES)
    image_url = models.URLField()


class Review(models.Model):
    product = models.ForeignKey(Product, related_name="reviews", on_delete=models.CASCADE)
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    rating = models.PositiveSmallIntegerField()
    comment = models.TextField()


class Favorite(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)

    class Meta:
        unique_together = ("user", "product")
