function Advertise() {
  return (
    <div className="advertise">
      <h1>Advertise a room</h1>
      <h3>Please Enter Details below</h3>
      <form action="">
        <input type="text" placeholder="Enter email or cell number" />
        <input type="password" placeholder="enter password" />
        <button>Login</button>
      </form>
      <a href="#home">forgot password</a>|<a href="#home">Register</a>
    </div>
  );
}

export default Advertise;
