import React from 'react'

const CreateOrderForm = ({ createOrder, name, setName, tel, setTel, email, setEmail, emailVal, setEmailVal, onHandleClick }) => {
    const noValidate =
        !(name.length &&
            email.length &&
            tel.length &&
            emailVal.length > 0 &&
            email === emailVal
        )

    return (
        <form
            autoComplete="off"
            onSubmit={createOrder}
            className="container cartForm">
            <div className="col-md-6 ">
                <label for="nombre"
                    className="form-label">Nombre y Apellido</label>
                <input type="text"
                    placeholder="john Doe" value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control" id="nombre" />
            </div>

            <div className="col-md-6 ">
                <label for="email"
                    className="form-label">Email</label>
                <input
                    type="text"
                    placeholder="email@mail.com"
                    value={email} onChange={(e) => setEmail(e.target.value)}
                    className="form-control" id="email" />
            </div>
            <div className="col-md-6 ">
                <label for="emailVal"
                    className="form-label">Repita su email</label>
               
                <input type="text"
                    placeholder="email@mail.com"
                    value={emailVal} onChange={(e) => setEmailVal(e.target.value)}
                    className={emailVal !== email ? "form-control bg-danger" : "form-control"} id="emailVal" />
            </div>
            <div className="col-md-6 ">
                <label for="tel"
                    className="form-label">Teléfono</label>
                <input type="text"
                    placeholder="01144418775 / 1524971896"
                    value={tel} onChange={(e) => setTel(e.target.value)}
                    className="form-control" id="tel" />
            </div>
            <button className="card-link m-2 btn btn-success"
                disabled={noValidate}
                onClick={onHandleClick} >Terminar compra</button>
        </form>
    )
}

export default CreateOrderForm
