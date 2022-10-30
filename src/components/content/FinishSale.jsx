import React, { useContext, useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import { createPurchaseOrder } from "../utils/firebase";
import SaleFinished from "./SaleFinished";
import "../../App.css";

const FinishSale = () => {
  const { cart } = useContext(CartContext);
  const [finalPrice, setFinalPrice] = useState(0);
  const [nameInfo, setNameInfo] = useState(null);
  const [surnameInfo, setSurnameInfo] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [mailAdressInfo, setMailAdress] = useState(null);
  const [mailAdressConfirmed, setMailAdressConfirmed] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const [orderIdDisplay, setOrderIdDisplay] = useState();
  const [localCart, setLocalCart] = useState([]);
  let sum = 0;

  useEffect(() => {
    const getFinalPrice = cart.map((item) => item.Price * item.cantidad);
    const getFinalPricing = getFinalPrice.reduce(function (sum, i) {
      return sum + i;
    });
    setFinalPrice(getFinalPricing);
  }, [cart]);

  useEffect(() => {
    const getLocalCart = cart.map((item) => (
      <div className="card cardProducto" key={item.id}>
        <h5 className="card-title">{item.Title}</h5>
        <p className="card-text">Cantidad: {item.cantidad}</p>
        <p className="card-text">Precio Total: {item.Price * item.cantidad}</p>
      </div>
    ));
    setLocalCart(getLocalCart);
  }, [cart]);

  function getNameInfo(val) {
    setNameInfo(val.target.value);
    console.log(nameInfo);
  }
  function getSurnameInfo(val) {
    setSurnameInfo(val.target.value);
    console.log(surnameInfo);
  }
  function getPhoneNumber(val) {
    setPhoneNumber(val.target.value);
    console.log(phoneNumber);
  }
  function getMailInfo(val) {
    setMailAdress(val.target.value);
    console.log(mailAdressInfo);
  }
  function getMailInfoConf(val) {
    setMailAdressConfirmed(val.target.value);
    console.log(mailAdressConfirmed);
  }

  return (
    <div>
      {showModal ? SaleFinished({ orderIdDisplay }) : <div>
      {localCart}
        <h2>Total a pagar: {finalPrice}</h2>
          <div>
            <h2>Por favor, complete los datos.</h2>
            <form
              onSubmit={(ev) => {
                ev.preventDefault();
                if (mailAdressInfo == mailAdressConfirmed) {
                  createPurchaseOrder(
                    finalPrice,
                    nameInfo,
                    surnameInfo,
                    phoneNumber,
                    mailAdressInfo
                  ).then((order) => {
                    const orderId = order.id;
                    setOrderIdDisplay(orderId);
                    setShowModal(true);
                    setShowForm(false);
                    console.log(orderId);
                  });
                }
              }}
            >
              <label className="col-form-label mt-4" htmlFor="inputDefault">
                Nombre
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Nombre"
                id="inputDefault"
                autoComplete="off"
                name="name"
                required
                onChange={getNameInfo}
              />
              <label className="col-form-label mt-4" htmlFor="inputDefault">
                Apellido
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Surname"
                id="inputDefault"
                autoComplete="off"
                name="Surname"
                required
                onChange={getSurnameInfo}
              />
              <label className="col-form-label mt-4" htmlFor="inputDefault">
                Número de Teléfono
              </label>
              <input
                type="number"
                className="form-control"
                placeholder="phoneNumber"
                id="inputDefault"
                autoComplete="off"
                name="phoneNumber"
                required
                onChange={getPhoneNumber}
              />
              <label className="col-form-label mt-4" htmlFor="inputDefault">
                Dirección de Mail
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="mailAdress"
                id="inputDefault"
                autoComplete="off"
                name="mailAdress"
                required
                onChange={getMailInfo}
              />
              <label className="col-form-label mt-4" htmlFor="inputDefault">
                Confirmar Dirección
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="mailAdressConfirmed"
                id="inputDefault"
                autoComplete="off"
                name="mailAdressConfirmed"
                required
                onChange={getMailInfoConf}
              />
              <button type="submit" className="btn btn-dark">
                Completar
              </button>
            </form>
          </div>
        </div>
            }
    </div>
  );
};

export default FinishSale;
