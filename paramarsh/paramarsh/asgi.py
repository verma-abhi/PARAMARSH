"""
ASGI config for Paramarsh project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/4.0/howto/deployment/asgi/
"""

import os

from channels.auth import AuthMiddlewareStack
from channels.routing import ProtocolTypeRouter, URLRouter
from channels.security.websocket import AllowedHostsOriginValidator
from django.core.asgi import get_asgi_application

from chat import routing

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'paramarsh.settings')
# Initialize Django ASGI application early to ensure the AppRegistry
# is populated before importing code that may import ORM models.

from chat import routing

django_asgi_application = get_asgi_application()

application = ProtocolTypeRouter(
    {
     # Django's ASGI application to handle traditional HTTP requests
        "http": django_asgi_application,

                 # WebSocket chat handler
        "websocket": AllowedHostsOriginValidator(
            AuthMiddlewareStack(URLRouter(routing.websocket_urlpatterns))
        )
    }
)