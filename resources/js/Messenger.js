var replyMessage = document.getElementById("message");
var sendButton = document.querySelector(".send");
var container = document.querySelector(".main");

class MessageFunction {
    constructor(messenger) {
        this.reply(messenger);
    }
    answer(Answer) {
        let comment = document.createElement("div");
        comment.classList.add("comment");

        let i = document.createElement("i");
        i.classList.add("user");
        i.classList.add("fas");
        i.classList.add("fa-user-circle");

        let message = document.createElement("div");
        message.classList.add("message");
        message.classList.add("answer");
        message.addEventListener("click", () => {
            date.classList.add("shown");
            setTimeout(() => {
                date.classList.remove("shown");
            }, 2000);
        });

        let span = document.createElement("span");
        span.textContent = Answer;

        let date = document.createElement("i");
        date.classList.add("date");
        const today = new Date();
        const time1 = today.toLocaleTimeString();
        const time2 = today.toDateString();
        date.textContent = time1 + ', ' + time2;

        container.appendChild(comment);
        comment.appendChild(i);
        comment.appendChild(message);
        message.appendChild(span);
        message.appendChild(date);
    }
    reply(messenger) {
        let comment = document.createElement("div");
        comment.classList.add("comment");
        comment.classList.add("reply");

        let message = document.createElement("div");
        message.classList.add("message");
        message.classList.add("reply");
        message.addEventListener("click", () => {
            date.classList.add("shown");
            setTimeout(() => {
                date.classList.remove("shown");
            }, 2000);
        });

        let span = document.createElement("span");
        span.textContent = messenger;

        let date = document.createElement("i");
        date.classList.add("date");
        const today = new Date();
        const time1 = today.toLocaleTimeString();
        const time2 = today.toDateString();
        date.textContent = time1 + ', ' + time2;

        container.appendChild(comment);
        comment.appendChild(message);
        message.appendChild(span);
        message.appendChild(date);

        if (messenger.includes("hello") || messenger.includes("Hello") || messenger.includes("Hi") || messenger.includes("Hii")) {
            this.answer("Hii there! How are you?");
        }
        else if (messenger.includes("fine") || messenger.includes("Fine")) {
            this.answer("Good. It's nice to see you.");
        }
        else if (messenger.includes("Thanks") || messenger.includes("Thank you")) {
            this.answer("So, what are you doing now?");
        }
        else if (messenger.includes("help") || messenger.includes("Help")) {
            this.answer("Sure. How can I help You?");
        }
        else if (messenger.includes("how are you?") || messenger.includes("How are you?")) {
            this.answer("I am fine. What about you?");
        }
        else if (messenger.includes("here do you live?")) {
            this.answer("I live in Dhaka, Bangladesh. May I know where do you live in?");
        }
        else if (messenger.includes("you have girlfriend?")) {
            this.answer("I have couple of friends but still I am single. What about your stat?");
        }
        else if (messenger.includes("Can I ask something?")) {
            this.answer("Sure.");
        }
        else if (messenger.includes("I want you ")) {
            this.answer("Ok.");
        }
        else if (messenger.includes(".")) {
            this.answer("Great.");
        }
        // Syntax:
        // if (messenger.includes('/*your text*/')) {
        //     this.answer('/*the preset answer*/');
        // }
    }
}

sendButton.addEventListener("click", () => {
    if (replyMessage.value != "") {
        new MessageFunction(replyMessage.value);
        replyMessage.value = "";
    }
    if (sendButton.classList.contains("fas")) {
        let comment = document.createElement("div");
        comment.classList.add("comment");
        comment.classList.add("reply");

        let message = document.createElement("div");
        message.classList.add("message");
        message.classList.add("reply");
        message.addEventListener("click", () => {
            date.classList.add("shown");
            setTimeout(() => {
                date.classList.remove("shown");
            }, 2000);
        });

        let like = document.createElement("i");
        like.classList.add("like");
        like.classList.add("fas");
        like.classList.add("fa-thumbs-up");

        let date = document.createElement("i");
        date.classList.add("date");
        const today = new Date();
        const time1 = today.toLocaleTimeString();
        const time2 = today.toDateString();
        date.textContent = time1 + ', ' + time2;

        container.appendChild(comment);
        comment.appendChild(message);
        message.appendChild(like);
        message.appendChild(date);

        container.scrollBy(0, 1000);
    }
});

window.addEventListener("keyup", (e) => {
    if (replyMessage.value != "") {
        sendButton.style.transform = "rotate(90deg)";
        sendButton.classList.add("fab");
        sendButton.classList.add("fa-atlassian");
        sendButton.classList.remove("fas");
        sendButton.classList.remove("fa-thumbs-up");
    }

    if (replyMessage.value == "") {
        sendButton.style.transform = "rotate(0deg)";
        sendButton.classList.remove("fab");
        sendButton.classList.remove("fa-atlassian");
        sendButton.classList.add("fas");
        sendButton.classList.add("fa-thumbs-up");
    }
    if (e.keyCode == 13) {
        if (replyMessage.value != "") {
            new MessageFunction(replyMessage.value);
            replyMessage.value = "";
            // Scroll to bottom:
            container.scrollBy(0, 1000);
        }
    }
});
