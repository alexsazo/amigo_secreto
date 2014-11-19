__author__ = 'Alex'
from django.conf.urls import patterns, include, url
from django.contrib import admin

urlpatterns = patterns('inscripcion.views',
                       url(r'^$', 'index', name='index'),
                       url(r'^about$', 'about', name='about'),
                       url(r'^register$', 'register', name='register'),
                       url(r'^friends$', 'friends', name='friends'),
                       url(r'^muro$', 'muro', name='muro'),
                       url(r'^post$', 'post_message', name='post_message'),
                       url(r'^retiro', 'retiro', name='retiro'),
                       )