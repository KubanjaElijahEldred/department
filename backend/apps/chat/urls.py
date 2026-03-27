from rest_framework.routers import DefaultRouter
from .views import ChatThreadViewSet, MessageViewSet

router = DefaultRouter()
router.register(r"threads", ChatThreadViewSet, basename="chat-threads")
router.register(r"messages", MessageViewSet, basename="chat-messages")

urlpatterns = router.urls
