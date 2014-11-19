from django.conf.urls import patterns, include, url
from django.contrib import admin

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'amigo_secreto.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
    url(r'^amigosecreto/', include('inscripcion.urls')),
    url(r'^inscripcion/', include('inscripcion.urls')),
)
