from django.conf.urls import patterns, url

urlpatterns = patterns('',
    url(r'^$', 'visualize.views.home'),
    url(r'^generate$', 'visualize.views.generate'),
    url(r'^index$', 'visualize.views.index'),
)
