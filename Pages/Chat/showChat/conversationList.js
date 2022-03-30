import { ConversationItem } from "./conversationItem.js";

class ConversationList {
  container = document.createElement("div");


  constructor() {

  }


  handleCreateConversationAdded = (id, name, users) => {
    const conversation = new ConversationItem(id, name, users);
 

    this.container.appendChild(conversation.container);
  };





}

export { ConversationList };
