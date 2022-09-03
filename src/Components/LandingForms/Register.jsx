function registerForm() {
    return (
      <div>
        <form>
          <input type="text" placeholder="Email" className="form-control" />{" "}
          <br />
          <input type="text" placeholder="Password" className="form-control" />
          <input type="text" placeholder="Repeat Password" className="form-control" /><br />
          <button className="btn btn-primary">Entrar!</button>
        </form>
      </div>
    );
}

export default registerForm;