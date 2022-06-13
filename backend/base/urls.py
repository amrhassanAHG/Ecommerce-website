from django.urls import path
from .views import productsView, productView

urlpatterns = [
    path('products/', productsView, name='products'),
    path('products/<str:pk>', productView, name='product'),
]
