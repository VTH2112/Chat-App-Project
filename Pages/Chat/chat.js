// class chat {
//     container = document.createElement("div")
//     contentDiv = document.createElement("div")
//     avatarChat = document.createElement("div")
//     avatarImg = document.createElement("img")
//     contentChatBox = document.createElement("div")
//     nameChat = document.createElement("h4")
//     chatText = document.createElement("p")
//     pingChat = document.createElement("div")
//     pingChatText = document.createElement("span")

//     constructor(){
//         this.container.appendChild(this.contentDiv)
//         this.contentDiv.setAttribute("class", "row chat_box")

//         this.contentDiv.appendChild(this.avatarChat)
//         this.contentDiv.appendChild(this.contentChatBox)
//         this.contentDiv.appendChild(this.pingChat)

//         this.avatarChat.setAttribute("class", "col-lg-3 avatar_chat_box")
//         this.avatarChat.appendChild(this.avatarImg)
//         this.avatarImg.setAttribute("class", "rounded-circle mx-auto d-block")
//         this.avatarImg.setAttribute("width", "45")
//         this.avatarImg.setAttribute("height", "45")

//         this.contentChatBox.setAttribute("class","col-lg-7 content_chat_box")
//         this.contentChatBox.appendChild(this.nameChat)
//         this.contentChatBox.appendChild(this.chatText)

//         this.pingChat.setAttribute("class","col-lg-2 ping_chat_box")
//         this.pingChat.appendChild(this.pingChatText)

        
//         db.collection("conversations").onSnapshot((snapshot) => {
//             snapshot.docChanges().forEach((change) => {
//               if (change.type === "added") {
//                     this.nameChat.innerHTML = change.doc.data().users
//                     this.chatText.innerHTML = change.doc.data().name
//                     console.log(change.doc.id);
//               }

//               if (change.type === "modified") {
          
//               }
//               if (change.type === "removed") {
               
//               }
//             });
//           });

//     }

// }
// export{chat}

import { ConversationList } from "./conversationList.js";

class Chat {
  container = document.createElement("div");

  conversationList = new ConversationList();

  constructor() {
    this.container.appendChild(this.conversationList.container);
    this.container.setAttribute("class", "col-lg-2")
    this.subscribeConversation()
    // this.container.innerHTML = "Chat";

    // this.btnLogout.innerHTML = "Log out";
    // this.btnLogout.addEventListener("click", this.handleLogout);

    // this.container.appendChild(this.btnLogout);
  }
    subscribeConversation = () => {
      db.collection("conversations").onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
          if (change.type === "added") {
            // console.log("new conversation: ", change.doc.data());
          }
          if (change.type === "modified") {
            console.log("Modified conversation: ", change.doc.data());
          }
          if (change.type === "removed") {
            console.log("Removed conversation: ", change.doc.data());
          }
        });
      });
    }

//   handleLogout = (e) => {
//     firebase
//       .auth()
//       .signOut()
//       .then(() => {
//         // Sign-out successful.
//         console.log("Sign out successful");
//       })
//       .catch((error) => {
//         // An error happened.
//         console.log(error.message);
//       });
//   };
}

export { Chat };


