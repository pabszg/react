import { useParams } from "react-router-dom"

const ItemDetails = () => {
  const {id} = useParams();
  return (
    <div>
      <h1>Este ID</h1>
    </div>
  )
}

export default ItemDetails
