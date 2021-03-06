import { Link } from "react-router-dom"
import "../../index.css"

const CreateOrderForm = ({ createOrder, name, setName, tel, setTel, email, setEmail, emailVal, setEmailVal, onHandleClick }) => {
    const noValidate =
        !(name.length &&
            email.length &&
            tel.length &&
            emailVal.length > 0 &&
            email === emailVal
        )

    return (
        <>
            <Link to="/cart" className="alig-item-start" >
                <button type="button" className="btn btn-outline-secondary mb-3">Volver al carrito</button>
            </Link>
            <form
                
                autoComplete="off"
                onSubmit={createOrder}
                className="container cartForm">
                <div className="col-md-6 ">
                    <label
                        className="form-label">Nombre y Apellido</label>
                    <input type="text"
                        placeholder="john Doe" value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="form-control" id="nombre" />
                </div>

                <div className="col-md-6 ">
                    <label
                        className="form-label">Email</label>
                    <input
                        type="text"
                        placeholder="email@mail.com"
                        value={email} onChange={(e) => setEmail(e.target.value)}
                        className="form-control" id="email" />
                </div>
                <div className="col-md-6 ">
                    <label
                        className="form-label">Repita su email</label>

                    <input type="text"
                        placeholder="email@mail.com"
                        value={emailVal} onChange={(e) => setEmailVal(e.target.value)}
                        className={emailVal !== email ? "form-control bg-light text-dark" : "form-control"} id="emailVal" />
                </div>
                <div className="col-md-6 ">
                    <label
                        className="form-label">Tel??fono</label>
                    <input type="text"
                        placeholder="01144418775 / 1524971896"
                        value={tel} onChange={(e) => setTel(e.target.value)}
                        className="form-control" id="tel" />
                </div>
                <button className="card-link m-2 btn btn-success"
                    disabled={noValidate}
                    onClick={onHandleClick} >Terminar compra</button>
            </form>
        </>
    )
}

export default CreateOrderForm
