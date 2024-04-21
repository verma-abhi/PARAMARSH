
/**
 * Variables
 */

let chatName = ''
let chatSocket = null
let chatWindowurl = window.location.href
let chatRoomUuid = Math.random().toString(36).slice(2,12)



/**
 * Elements
 */

const chatElement = document.querySelector('#chat')
const chatIconElement = document.querySelector('#chat_icon')
const chatOpenElement = document.querySelector('#chat_open')
const chatWelcomeElement = document.querySelector('#chat_welcome')
const chatJoinElement = document.querySelector('#chat_join')
const chatRoomElement = document.querySelector('#chat_room')
const chatNameElement = document.querySelector('#chat_name')
const chatLogElement = document.querySelector('#chat_log')
const chatInputElement = document.querySelector('#chat_message_input')
const chatSubmitElement = document.querySelector('#chat_message_submit')



/**
 * Functions
 
 */

 function getCookie(name)
 {
   var cookieValue = null

   if(document.cookie && document.cookie !='')
   {
    var cookies = document.cookie.split(';')

    for(var i=0;i<cookies.length;i++)
    {
        var cookie=cookies[i].trim()
        
        if(cookie.substring(0,name.length+1) === (name + '='))
        {
            cookieValue = decodeURIComponent(cookie.substring(name.length + 1))

            break
        }
    }
   }
   return cookieValue
 }


function JoinChatRoom(){

    console.log('Join Chat Room')
    chatName= chatNameElement.value

    console.log('Join as :',chatName)
    console.log('Room uuid:',chatRoomUuid)

    const data=new FormData()
    data.append('name',chatName)
    data.append('url',chatWindowurl)

    fetch('/api/create-room/${chatRoomUuid}/',{
        method: 'POST',
        headers : {
            'X-CSRF Token':getCookie('csrftoken')
        },
        body : data
    })

    .then(function(res){
        return res.json()
    })

    .then(function(data){
        console.log('data',data)
    }) 

}


/**
 * Event Listeners
 */

chatOpenElement.onclick = function(e){
    e.preventDefault()

    chatIconElement.classList.add('hidden')
    chatWelcomeElement.classList.remove('hidden')

    return false
}

chatJoinElement.onclick = function(e){
    e.preventDefault()

    chatWelcomeElement.classList.add('hidden')
    chatRoomElement.classList.remove('hidden')

    JoinChatRoom()

    return false
}

