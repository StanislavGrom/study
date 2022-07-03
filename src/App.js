import './App.css';
import List from "./components/list/List";

const data = [
    {
        "customer_group_id": 0,
        "customer_group_code": "NOT LOGGED IN",
        "tax_class_id": 3
    },
    {
        "customer_group_id": 1,
        "customer_group_code": "Retail",
        "tax_class_id": 3
    },
    {
        "customer_group_id": 2,
        "customer_group_code": "WS - Active",
        "tax_class_id": 5
    },
    {
        "customer_group_id": 5,
        "customer_group_code": "WS - Sales Rep",
        "tax_class_id": 5
    },
    {
        "customer_group_id": 6,
        "customer_group_code": "WS - Pending",
        "tax_class_id": 5
    },
    {
        "customer_group_id": 7,
        "customer_group_code": "TEST Retail Internal",
        "tax_class_id": 3
    }
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <List data={data}/>
      </header>
    </div>
  );
}

export default App;
