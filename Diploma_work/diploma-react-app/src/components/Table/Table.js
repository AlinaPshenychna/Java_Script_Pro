import "./Table.css";
import { PiArrowsDownUp } from "react-icons/pi";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const Table = ({products}) => {
  return (
    <div className="Table-main">
      <table>
        <thead>
          <tr>
            <th>
              ID <PiArrowsDownUp />
            </th>
            <th>
              Category
              <PiArrowsDownUp />
            </th>
            <th>
              Name
              <PiArrowsDownUp />
            </th>
            <th>
              Quantity
              <PiArrowsDownUp />
            </th>
            <th>
              Price (₴)
              <PiArrowsDownUp />
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.category}</td>
              <td>{product.name}</td>
              <td>{product.quantity}</td>
              <td>{product.price}</td>
              <td>
                {<MdModeEdit style={{ color: "black" }} />}
                {<MdDelete style={{ color: "black" }} />}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
