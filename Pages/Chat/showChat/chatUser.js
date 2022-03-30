class ChatUser {
    nameArr = []

    container = document.createElement("div")
        contentDiv = document.createElement("div")
        avatarChat = document.createElement("div")
        avatarImg = document.createElement("img")
        contentChatBox = document.createElement("div")
        nameChat = document.createElement("h4")
        chatText = document.createElement("p")
        pingChat = document.createElement("div")
        pingChatText = document.createElement("span")
    
        constructor(){

            this.container.appendChild(this.contentDiv)
            this.contentDiv.setAttribute("class", "row chat_box")
    
            this.contentDiv.appendChild(this.avatarChat)
            this.contentDiv.appendChild(this.contentChatBox)
            this.contentDiv.appendChild(this.pingChat)
    
            this.avatarChat.setAttribute("class", "col-lg-3 avatar_chat_box")
            this.avatarChat.appendChild(this.avatarImg)
            this.avatarImg.setAttribute("class", "rounded-circle mx-auto d-block")
            this.avatarImg.setAttribute("width", "45")
            this.avatarImg.setAttribute("height", "45")
    
            this.contentChatBox.setAttribute("class","col-lg-7 content_chat_box")
            this.contentChatBox.appendChild(this.nameChat)
            this.contentChatBox.appendChild(this.chatText)
    
            this.pingChat.setAttribute("class","col-lg-2 ping_chat_box")
            this.pingChat.appendChild(this.pingChatText)
    
            
            db.collection("conversations").onSnapshot((snapshot) => {
                snapshot.docChanges().forEach((change) => {
                  if (change.type === "added") {
                        this.nameArr = change.doc.data().name
                        this.nameChat.innerHTML = change.doc.data().users
                        this.chatText.innerHTML = change.doc.data().name
                        console.log(this.nameArr);
                  }
    
                  if (change.type === "modified") {
              
                  }
                  if (change.type === "removed") {
                   
                  }
                });
              });
    
        }

}

export{ChatUser}