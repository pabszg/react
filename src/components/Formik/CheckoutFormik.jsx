import { TextField } from "@mui/material";
import { useFormik } from "formik";
import { useContext, useState } from "react";
import * as Yup from "yup";
import { CartContext } from "../../context/CartContext";
import "./style.css";
import { MuiTelInput, matchIsValidTel } from "mui-tel-input";
import { serverTimestamp } from "firebase/firestore";

const CheckoutFormik = ({ createOrder }) => {
  const { cart, getTotalPrice } = useContext(CartContext);
  const [phone, setPhone] = useState("");
  const handlePhoneChange = (newPhone) => {
    setPhone(newPhone);
  };

  const { handleSubmit, handleChange, handleBlur, errors } = useFormik({
    initialValues: {
      name: "",
      phone: phone,
      email: "",
      address: "",
      card: "",
      exp: "",
      ccv: ""
    },
    onSubmit: (data) => {
      let purchaseInfo = {
        buyer: data,
        items: cart.map((item) => ({
          id: item.id,
          stock: item.stock,
          quantity: item.quantity,
          price: item.price
        })),
        total: getTotalPrice(),
        date: serverTimestamp(),
      };
      createOrder(purchaseInfo);
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "Mínimo 3 caracteres")
        .required("Campo obligatorio"),
      email: Yup.string().email().required("Campo obligatorio"),
      address: Yup.string()
        .min(5, "Mínimo 5 caracteres")
        .required("Campo obligatorio"),
      card: Yup.string().min(16).max(16).required()
    }),
    validateOnChange: false,
  });

  return (
    <div id="formContainer">
      <form id="checkoutForm" onSubmit={handleSubmit}>
        <TextField
          label="Nombre"
          size="small"
          variant="outlined"
          name="name"
          error={errors.name ? true : false}
          helperText={errors.name}
          onChange={handleChange}
          onBlur={handleBlur}
          required={true}
        />
        <TextField
          label="Correo electrónico"
          size="small"
          variant="outlined"
          name="email"
          error={errors.email ? true : false}
          helperText={errors.email}
          onChange={handleChange}
          onBlur={handleBlur}
          required={true}
        />
        <MuiTelInput
          value={phone}
          onChange={handlePhoneChange}
          size="small"
          variant="outlined"
          name="phone"
          required={true}
          onlyCountries={["CL", "AR", "ES"]}
          onBlur={handleBlur}
          error={matchIsValidTel(phone) ? false : true}
          helperText={
            matchIsValidTel(phone) ? "" : "Ingresa un número de teléfono válido"
          }
        />
        <TextField
          label="Dirección de entrega"
          size="small"
          variant="outlined"
          name="address"
          error={errors.address ? true : false}
          helperText={errors.address}
          onChange={handleChange}
          onBlur={handleBlur}
          required={true}
        />
          <TextField
          label="Numero Tarjeta"
          size="small"
          variant="outlined"
          name="card"
          error={errors.card ? true : false}
          helperText={errors.card}
          onChange={handleChange}
          onBlur={handleBlur}
          required={true}
        />
          <TextField
          label="Vencimiento"
          size="small"
          variant="outlined"
          name="exp"
          error={errors.exp ? true : false}
          helperText={errors.exp}
          onChange={handleChange}
          onBlur={handleBlur}
          required={true}
        />
          <TextField
          label="CCV"
          size="small"
          variant="outlined"
          name="ccv"
          error={errors.ccv ? true : false}
          helperText={errors.ccv}
          onChange={handleChange}
          onBlur={handleBlur}
          required={true}
        />
        <button type="submit">Procesar pago</button>
      </form>
    </div>
  );
};

export default CheckoutFormik;
