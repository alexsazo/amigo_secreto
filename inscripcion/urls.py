__author__ = 'Alex'
from django.conf.urls import patterns, include, url
from django.contrib import admin

urlpatterns = patterns('inscripcion.views',
                       url(r'^$', 'index', name='index'),
                       url(r'^/about$', 'about', name='about'),
                       url(r'^/register$', 'register', name='register')
                       )