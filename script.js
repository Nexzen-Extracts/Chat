const helpBtn = document.getElementById("helpBtn");
const chatBox = document.getElementById("chatBox");
const closeChat = document.getElementById("closeChat");
const sendBtn = document.getElementById("sendBtn");
const userInput = document.getElementById("userInput");
const chatMessages = document.getElementById("chatMessages");

helpBtn.addEventListener("click", () => {
  chatBox.style.display = "flex";
});

closeChat.addEventListener("click", () => {
  chatBox.style.display = "none";
});

sendBtn.addEventListener("click", sendMessage);
userInput.addEventListener("keypress", function(e) {
  if (e.key === "Enter") sendMessage();
});
function sendMessage() {
  const message = userInput.value.trim();
  if (!message) return;

  const userMsg = document.createElement("p");
  userMsg.innerHTML = `<strong>You:</strong> ${message}`;
  chatMessages.appendChild(userMsg);
  userInput.value = "";
  chatMessages.scrollTop = chatMessages.scrollHeight;

  setTimeout(() => {
    const botMsg = document.createElement("p");
    botMsg.innerHTML = `<strong>Support:</strong> ${getBotReply(message)}`;
    chatMessages.appendChild(botMsg);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }, 800);
}


function getBotReply(input) {
  input = input.toLowerCase();
  if (input.includes("hello") || input.includes("hi")) {
    return "Hello!  How can I assist you today?";
  } else if (input.includes("problem") || input.includes("error")) {
    return "I'm sorry to hear that  Please describe the problem in detail.";
  } else if (input.includes("install")) {
    return "To install, please follow the guide on our support page.";
  } else if (input.includes("contact")) {
    return "You can contact us at support@yourdomain.com.";
  } else if (input.includes("thank")) {
    return "You're welcome! ";
  } else {
    return "Our support team will assist you shortly. Please wait...";
  }
}
