import {ConversationList} from "./conversationList.js";
class ChatUser {
    nameArr = []

    container = document.createElement("div")
        conversationList = new ConversationList()
        constructor(){
            this.container.appendChild(this.conversationList.container);
           
            this.subcribeConversation();
    
        }
        
  subcribeConversation = () => {
    db.collection("conversations").onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          console.log("New conversation: ", change.doc.data());

          this.conversationList.handleCreateConversationAdded(
            change.doc.id,
            change.doc.data().name,
            change.doc.data().users
          );
        }
        if (change.type === "modified") {
          console.log("Modified conversation: ", change.doc.data());
        }
        if (change.type === "removed") {
          console.log("Removed conversation: ", change.doc.data());
          this.conversationList.removedItem(change.doc.id);
        }
      });
    });
  };

}

export{ChatUser}