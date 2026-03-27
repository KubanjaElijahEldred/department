export default function ChatPage() {
  return (
    <section className="section-card chat-layout">
      <div className="chat-sidebar">
        <h2>Conversations</h2>
        <ul>
          <li>Grace N. about Dell Latitude</li>
          <li>Kelvin O. about Study Desk</li>
        </ul>
      </div>
      <div className="chat-window">
        <h1>Chat</h1>
        <div className="chat-bubble seller">Is the product still available?</div>
        <div className="chat-bubble buyer">Yes, it is available and in good condition.</div>
        <div className="chat-input">
          <input type="text" placeholder="Write a message" />
          <button className="primary-btn">Send</button>
        </div>
      </div>
    </section>
  );
}
