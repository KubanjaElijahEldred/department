from rest_framework import permissions, viewsets
from .models import ChatThread, Message
from .serializers import ChatThreadSerializer, MessageSerializer


class ChatThreadViewSet(viewsets.ModelViewSet):
    queryset = ChatThread.objects.all().order_by("-created_at")
    serializer_class = ChatThreadSerializer
    permission_classes = [permissions.IsAuthenticated]


class MessageViewSet(viewsets.ModelViewSet):
    queryset = Message.objects.all().order_by("created_at")
    serializer_class = MessageSerializer
    permission_classes = [permissions.IsAuthenticated]
