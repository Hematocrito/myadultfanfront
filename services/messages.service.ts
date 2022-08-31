import { fetchWrapper } from "utils";

const END_POINT = "/messages";

async function getConversations() {
  return fetchWrapper.get(`/conversations`);
}

async function getMessagesInConversation(
  conversationId: String,
  query?: { limit?: Number; offset?: Number }
) {
  return fetchWrapper.get(
    `${END_POINT}/conversations/${conversationId}`,
    query
  );
}

async function postReadMessages(objProp: {
  conversationId: String;
  recipientId: String;
}) {
  return fetchWrapper.post(`${END_POINT}/read-all`, objProp);
}

async function postSendMessage(
  conversationId: String,
  objProp: {
    text: String;
  }
) {
  return fetchWrapper.post(
    `${END_POINT}/conversations/${conversationId}`,
    objProp
  );
}

async function postSendPhoto(objProp: {
  conversationId: String;
  recipientId: String;
  text: String;
  recipientType: String;
  "message-photo": any;
}) {
  return fetchWrapper.post(`${END_POINT}/private/file`, objProp);
}

export const messagesService = {
  getConversations,
  getMessagesInConversation,
  postReadMessages,
  postSendMessage,
  postSendPhoto,
};
