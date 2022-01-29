from rest_framework import routers
from .views import PrimtodoViewset

router =  routers.DefaultRouter()
router.register('primtodo', PrimtodoViewset)