import { Button, TextField } from "@mui/material";
import { useFormik, validateYupSchema } from "formik";
import { useContext, useState } from "react";
import * as Yup from "yup";
import { CartContext } from "../../context/CartContext";
import "./style.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const CheckoutFormik = () => {
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  const { handleSubmit, handleChange, handleBlur, errors } = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      address: "",
    },
    onSubmit: (data) => {
      let order = {
        buyer: data,
        items: cart,
        total: getTotalPrice(),
      };
      console.log(order);
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "Mínimo 3 caracteres")
        .required("Campo obligatorio"),
      email: Yup.string().email().required("Campo obligatorio"),
      phone: Yup.string()
        .min(8, "Mínimo 8 caracteres")
        .required("Campo obligatorio"),
      address: Yup.string()
        .min(5, "Mínimo 5 caracteres")
        .required("Campo obligatorio"),
    }),
    validateOnChange: false,
  });
  return (
    <div>
      <form onSubmit={handleSubmit}>
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
        ></TextField>
        <PhoneInput
          name="phone"
          country="es"
          regions={["america", "europe"]}
          label="Teléfono"
          size="small"
          variant="outlined"
          error={errors.phone ? true : false}
          localization={"es"}
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
        ></TextField>
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
        ></TextField>
        <button type="submit">Ir a pagar</button>
      </form>
    </div>
  );
};

export default CheckoutFormik;
