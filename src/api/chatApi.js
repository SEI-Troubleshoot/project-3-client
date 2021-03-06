import apiUrl from '../apiConfig'
import axios from 'axios'

// Request to Create a chat message
export const sendChat = (chat, user) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/chatmsg',
    headers: {
      'Authorization': `Token token=${user.token}`
    },
    data: {
      chat: {
        content: chat.content
      }
    }
  })
}

// request to find all chat messages
export const getChats = (user) => {
  return axios({
    method: 'GET',
    url: apiUrl + '/chatmsg',
    headers: {
      'Authorization': `Token token=${user.token}`
    }
  })
}

// Delete a chat message
export const delChat = (user, id) => {
  return axios({
    method: 'DELETE',
    url: apiUrl + `/chatmsg/${id}`,
    headers: {
      'Authorization': `Token token=${user.token}`
    }
  })
}

// Edit a chat message
export const editChat = (user, chat, id) => {
  return axios({
    method: 'PATCH',
    url: apiUrl + `/chatmsg/${id}`,
    headers: {
      'Authorization': `Token token=${user.token}`
    },
    data: {
      chat: {
        content: chat
      }
    }
  })
}
