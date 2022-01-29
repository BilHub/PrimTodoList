from rest_framework.viewsets import ModelViewSet
from .models import Primtodo    
from .serializers import PrimtodoSerializer

class PrimtodoViewset(ModelViewSet):
    queryset = Primtodo.objects.all()
    serializer_class = PrimtodoSerializer