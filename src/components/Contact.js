function Contact() {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <form action="">
        <input type="text" placeholder="Enter your name" />
        <input type="text" placeholder="Enter email address" />
        <textarea
          name=""
          id=""
          rows="5"
          placeholder="Enter message..."></textarea>
        <button>send</button>
      </form>
    </div>
  );
}

export default Contact;
