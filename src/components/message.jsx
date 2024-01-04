import { useState } from "react";

function Message() {
  let [message, setMessage] = useState([
    { id: 1, content: "Hello ", author: "admin", side: "right" },
    { id: 2, content: "Hi ", author: "Ali", side: "left" },
    { id: 3, content: "How are you ", author: "admin", side: "right" },
    { id: 4, content: "i am fine  ", author: "Ali", side: "left" },
    { id: 5, content: "How are you ", author: "admin", side: "right" },
    { id: 6, content: "i am fine  ", author: "Ali", side: "left" },
  ]);
  const deleteMes = (id) => {
    setMessage(
      message.filter((item) => {
        if (item.id === id) {
          return false;
        } else {
          return true;
        }
      })
    );
  };

  return (
    <div className="flex">
      <div className="container">
        {message.map((message) => {
          return (
            <div
              className={`row ${
                message.side === "right" ? "justify-content-end" : ""
              } `}
            >
              <div className="col-3">
                <div className={message.side}>
                  <button
                    onClick={() => deleteMes(message.id)}
                    className="btn btn-danger"
                  >
                    x
                  </button>
                  <div>
                    <p>{message.content}</p>
                    <span>{message.author}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Message;
