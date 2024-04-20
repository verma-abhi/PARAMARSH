import json                  # used in working with data in and out

from asgiref.sync import sync_to_async                   #to talk to database
from channels.generic.websocket import AsyncWebsocketConsumer   #consumer or websocket 

class ChatConsumer(AsyncWebsocketConsumer):
    async def connect(self):                                  
        self.room_name = self.scope['url_route']['kwargs']['room_name']   
        self.room_group_name =f'chat_{self.room_name}'

       # Join room group
        
        await self.channel_layer.group_add(self.room_group_name, self.channel_name)  #channel_layer is in settings
        await self.accept()
        


    async def disconnect(self, close_code):     
        # Leave room group
        await self.channel_layer.group_discard(self.room_group_name, self.channel_name)

        