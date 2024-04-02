import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './AppStyle.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const data = [
  { name: "Anom", age: 19, gender: "Male" },
  { name: "Megha", age: 19, gender: "Female" },
  { name: "Subham", age: 25, gender: "Male" },
]

function DispalyTable() {
  return (
    <div className="AppStyle">
        <table>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
            </tr>
            {data.map((val, key) => {
                return (
                    <tr key={key}>
                        <td>{val.name}</td>
                        <td>{val.age}</td>
                        <td>{val.gender}</td>
                    </tr>
                )
            })}
        </table>
    </div>
);
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DispalyTable />
  </React.StrictMode>
);

reportWebVitals();