import axios from 'axios';
import { useState, useEffect } from 'react';
import '../styles/table.css';

function Sheet() {
  const [data, setData] = useState([]);
  const [fetching, setFetching] = useState(false);

  const fetchData = () => {
    setFetching(true);
    axios.get('http://localhost:5174/api/sales') // Replace with your backend API URL
      .then((response) => {
        setData(response.data);
        setFetching(false);
        console.log('Data fetched successfully');
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setFetching(false);
      });
  };

  useEffect(() => {
    // You can optionally add logic to fetch data when the component initially mounts
  }, []); // Empty dependency array means this effect runs only once, like componentDidMount

  return (
    <div>
      <h1>Sales Data</h1>
      <button onClick={fetchData} disabled={fetching}>
        {fetching ? 'Fetching...' : 'Fetch Data'}
      </button>
      <br></br>
      <br></br>
      <table>
      <thead>
        <tr>
          <th>Order Date</th>
          <th>Region</th>
          <th>Rep</th>
          <th>Item</th>
          <th>Units</th>
          <th>Unit Cost</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.orderdate}</td>
            <td>{item.region}</td>
            <td>{item.rep}</td>
            <td>{item.item}</td>
            <td>{item.units}</td>
            <td>{item.unitcost}</td>
            <td>{item.total}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}

export default Sheet;

