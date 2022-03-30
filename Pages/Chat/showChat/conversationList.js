import { ConversationItem } from "./conversationItem.js";

class ConversationList {
  container = document.createElement("div");
  onConversationItemClick;
  conversations = [];

  constructor() {

  }

  setOnConversationItemClick = (listener) => {
    // this.onConversationItemClick = () => {};
    this.onConversationItemClick = listener;
  };

  handleCreateConversationAdded = (id, name, users) => {
    const conversation = new ConversationItem(id, name, users);
    conversation.setOnClick((id, name, users) => {
        // Get conversation information
        console.log(id, name, users);
  
        this.onConversationItemClick({
          id: id,
          name: name,
          users: users,
        });
      });
 
      this.conversations.push(conversation);
    this.container.appendChild(conversation.container);
  };


  setStyleActiveConversation = (conversation) => {
    this.conversations.forEach((item) => {
      if (item.id === conversation.id) {
        item.setActiveHighlight(true);
      } else {
        item.setActiveHighlight(false);
      }
    });
  };


}

export { ConversationList };
