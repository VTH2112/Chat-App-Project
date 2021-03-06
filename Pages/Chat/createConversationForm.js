import { InputCommon } from "./inputCommon.js";
import { Modal } from "./modal.js";

class CreateConversationForm {
  container = document.createElement("div");

  modal = new Modal();

  form = document.createElement("form");
  conversationNameInput = new InputCommon(
    "text",
    "Enter your conversation name",
    "conversationName"
  );

  constructor() {
    this.container.appendChild(this.modal.container);
    this.modal.setBody(this.form);
    this.modal.setOnclickCreate(this.handleCreateConversation);
    this.form.appendChild(this.conversationNameInput.container);
  }

  handleCreateConversation = () => {
    const name = this.conversationNameInput.getValue();
    db.collection("conversations").add({
      name: name,
      users: [firebase.auth().currentUser.email],
      updateDate: firebase.firestore.FieldValue.serverTimestamp()
    });


    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Create Success',
      showConfirmButton: false,
      timer: 1500
    })
  };
  

}

export { CreateConversationForm };
