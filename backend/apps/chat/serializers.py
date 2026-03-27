from rest_framework import serializers
from .models import ChatThread, Message


class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = ["id", "thread", "sender", "content", "created_at"]


class ChatThreadSerializer(serializers.ModelSerializer):
    messages = MessageSerializer(many=True, read_only=True)

    class Meta:
        model = ChatThread
        fields = ["id", "buyer", "seller", "product", "created_at", "messages"]
