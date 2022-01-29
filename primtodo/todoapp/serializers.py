from rest_framework import serializers
from .models import Primtodo

class PrimtodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Primtodo
        fields = ('id', 'task', 'detail', 'isCompleted')
