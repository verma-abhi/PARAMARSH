
/**
 * Variables
 */

const chatRoom = document.querySelector('#room_uuid').textContent.replaceAll('"', '')

let chatSocket = null


/**
 * Elements
 */

const chatLogElement = document.querySelector('#chat_log')
const chatInputElement = document.querySelector('#chat_message_input')
const chatSubmitElement = document.querySelector('#chat_message_submit')

/**
 * Web socket
 */

chatSocket = new WebSocket(`ws://${window.location.host}/ws/${chatRoom}/`)

chatSocket.onmessage = function(e) {
    console.log('on message')

    
}

chatSocket.onopen = function(e) {
    console.log('on open')
}

chatSocket.onclose = function(e) {
    console.log('chat socket closed unexpectadly')
}
