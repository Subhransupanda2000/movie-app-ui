import { useState } from "react";
import { useEffect } from "react";
import { Table } from "reactstrap";
import { get } from "../clients/HttpClients";
import { Delete } from "../clients/HttpClients";

import {
  Button,
} from "reactstrap";
function MovieList() {
  const [data, setData] = useState([]);

  function setTableData(response) {
    setData(response.data);
  }
  useEffect(() => {
    get("http://localhost:8080/movies", setTableData);
  }, []); // Empty dependency array to ensure effect runs only once
  function handelDelete(item) {
    const deleteurl = `http://localhost:8080/movies/${item.id}`;

    Delete(deleteurl,item.id);
    
  }

  // Function to create table rows from the data
  const createTableRow = (item) => (
    <tr key={item.id}>
      <td>{item.id}</td>
      <td>{item.title}</td>
      <td>
      <Button 
              color="primary"
              onClick={() => {
                handelDelete(item);
              }}
            >
              Delete
            </Button>
      </td>
     
    </tr>
  );

  return (
    <>
      <h1>Movie List</h1>
      <div>
        <Table bordered>
          <thead>
            <tr>
              <th scope="row">id</th>
              <th>title</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>{data.map(createTableRow)}</tbody>
        </Table>
      </div>
    </>
  );
}

export { MovieList };
