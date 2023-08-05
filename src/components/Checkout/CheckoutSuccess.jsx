import { getDoc, doc} from "firebase/firestore"
import { db } from "../../firebaseConfig"

const CheckoutSuccess = ({order}) => {
  return (
    <div id="successContainer">
      <h1>Congrats {order.buyer.name}!</h1>
      <p>Tu órden fue creada con el # {order.id}</p>
      <p>Pronto la tendrás en casa 🎉</p>
      <p>Lo eviaremos a {order.buyer.address}</p>
      <p>Hemos enviado un email a {order.buyer.email} con los detalles</p>
      <a href="/"><button>Volver al home</button></a>
    </div>
  )
}
export default CheckoutSuccess
