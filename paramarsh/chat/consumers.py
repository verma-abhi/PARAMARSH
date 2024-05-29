import json                  # used in working with data in and out

from asgiref.sync import sync_to_async                   #to talk to database
from channels.generic.websocket import AsyncWebsocketConsumer   #consumer or websocket 

from django.utils.timesince import timesince

from account.models import User

from .models import Room, Message
from .templatetags.chatextras import initials



class ChatConsumer(AsyncWebsocketConsumer):
    async def connect(self):                                  
        self.room_name = self.scope['url_route']['kwargs']['room_name']   
        self.room_group_name =f'chat_{self.room_name}'

       # Join room group
        await self.get_room()
        await self.channel_layer.group_add(self.room_group_name, self.channel_name)  #channel_layer is in settings
        await self.accept()
        


    async def disconnect(self, close_code):     
        # Leave room group
        await self.channel_layer.group_discard(self.room_group_name, self.channel_name)

    async def recieve(self, text_data):
        #recieve message form websocket (front end)
        text_data_json = json.loads(text_data)
        type = text_data_json['type']
        message = text_data_json['message']
        name = text_data_json['name']
        mentor = text_data_json.get('mentor', '')

        print('Recieve:', type)

        if type == 'message':
            new_message = await self.create_message(name, message, mentor)

            #Send message to group/room
            await self.channel_layer.group_send(
                self.room_group_name,{
                    'type' : 'chat_message',
                    'message' : message,
                    'name' : name,
                    'mentor' : mentor,
                    'initials': initials(name),
                    'created_at' : '' , #timesince(new_message.created_at),

                }
                
                )

    async def chat_message(self, event):
        #Send Message to Websocket (from end)

        await self.send(text_data=json.dumps({
            'type': event['type'],
            'message': event['message'],
            'name' : event['name'], 
            'mentor': event['mentor'],
            'initials': event['initials'],
            'created_at' : event['created_at'],

        }))
    
    @sync_to_async
    def get_room(self):
        self.room = Room.objects.get(uuid=self.room_name)

        
    @sync_to_async
    def create_message(self, sent_by, message, mentor):
        message = Message.objects.create(body=message, sent_by=sent_by)

        if mentor:
            message.created_by = User.objects.get(pk=agent)
            message.save()
        
        self.room.messages.add(message)

        return message


