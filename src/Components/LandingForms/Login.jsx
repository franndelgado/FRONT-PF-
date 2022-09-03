function Login() {


    return (
      <div className="homeform">
        <form>
          <input type="text" placeholder="Email" className="form-control" />{" "}
          <br />
          <input type="text" placeholder="Password" className="form-control" />
          <button className="btn btn-primary">Entrar!</button>
        </form>
      </div>
    );
}

export default Login;