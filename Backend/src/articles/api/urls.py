from .views import ArticleViewSet,FacebookLogin
from rest_framework.routers import DefaultRouter
from django.urls import path

router = DefaultRouter()
router.register(r'', ArticleViewSet, basename='articles')
urlpatterns = router.urls

urlpatterns += [
  path('rest-auth/facebook/',FacebookLogin.as_view()),
]

# from django.urls import path
# from .views import ArticleListView,ArticleDetailView,ArticleCreateView,ArticleUpdateView,ArticleDeleteView


# urlpatterns = [
#   path('',ArticleListView.as_view()),
#   path('create/',ArticleCreateView.as_view()),
#   path('<pk>/update/',ArticleUpdateView.as_view()),
#   path('<pk>/delete/',ArticleDeleteView.as_view()),
#   path('<pk>/',ArticleDetailView.as_view()),
# ]