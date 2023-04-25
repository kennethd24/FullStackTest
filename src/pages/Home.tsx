import { ChangeEvent, FormEvent, useState } from 'react';

function Home() {
  interface NewWarehouse {
    warehouseName: string;
    zone1: number;
    zone2: number;
    zone3: number;
    zone4: number;
    zone5: number;
    zone6: number;
    zone7: number;
    zone8: number;
    zone9: number;
    zone10: number;
    zone11: number;
    zone12: number;
  }
  const [newWarehouse, setNewWarehouse] = useState<NewWarehouse>({
    warehouseName: '',
    zone1: 0,
    zone2: 0,
    zone3: 0,
    zone4: 0,
    zone5: 0,
    zone6: 0,
    zone7: 0,
    zone8: 0,
    zone9: 0,
    zone10: 0,
    zone11: 0,
    zone12: 0,
  });

  const handleChange = (
    e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    setNewWarehouse({
      ...newWarehouse,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(newWarehouse);
    fetch('http://localhost:5173/warehouse', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newWarehouse),
    });
  };

  const maxShelvesCount = 10;
  const shelvesArr = [];
  for (let i = 0; i <= maxShelvesCount; i += 1) {
    shelvesArr.push(
      <option key={`shelf-${i}`} value={i}>
        {' '}
        {i}
      </option>
    );
  }

  const maxZonesCount = 12;
  const zonesArr = [];
  for (let i = 1; i <= maxZonesCount; i += 1) {
    zonesArr.push(
      <div className="zone-container">
        <div className="title" key={`zone${i}`}>
          Zone {i}
        </div>
        <div>
          <div>
            shelves{'  '}
            <select
              id={`zone${i}`}
              name={`zone${i}`}
              onChange={(e) => handleChange(e)}
            >
              {shelvesArr}
            </select>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1>Full Stack Test</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="zones-container">{zonesArr}</div>
        <div className="footer">
          <label htmlFor="warehouse-input">
            Enter warehouse name:
            <input
              onChange={(e) => handleChange(e)}
              name="warehouseName"
              type="text"
              id="warehouse-input"
            />
            <button type="submit">Add new warehouse</button>
          </label>
        </div>
      </form>
    </div>
  );
}

export default Home;
