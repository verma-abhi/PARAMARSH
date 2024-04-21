
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

    return false
}