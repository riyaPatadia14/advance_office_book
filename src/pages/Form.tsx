const Form = () => {
    return (
        <div className="">
          <header>
                <div className="header-content">
                    <div className="left-section">
                        <div className="line"></div>
                        <h1>User Form</h1>
                    </div>
                </div>
            </header>
                <div className="card-body  mt-5 d-grid gap-3">
                    <form>
                        <div className="row">
                            <div className="col">
                                <label className="fw-bold">First Name</label>
                                <input type="text" className="form-control bg-white border fst-normal rounded-0 shadow-none mt-1"  />
                            </div>
                            <div className="col">
                                <label className="fw-bold">Last Name</label>
                                <input type="text" className="form-control bg-white border fst-normal rounded-0 shadow-none mt-1" />
                            </div>
                        </div>
                         <div className="row mt-3">
                            <div className="col">
                                <label className="fw-bold">First Name</label>
                                <button  className="btn btn-secondary btn-sm dropdown-toggle"  />
                            </div>
                            <div className="col">
                                <label className="fw-bold">Last Name</label>
                                <input type="text" className="form-control bg-white border fst-normal rounded-0 shadow-none mt-1" />
                            </div>
                        </div>
                    </form>
                </div>
        </div>
    )
}
export default Form;
