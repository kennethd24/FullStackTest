import { ChangeEvent, FormEvent, useState } from 'react';

function Home() {
  /*
  {
    warehouseName='new warehouse',
    zone1 = [0,0,0],
    zone2 = [0,0,0,0,0,0],
    zone3 = [0,0,0,0,0,0,0,0,0,0,0]
  }

  */
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

  const maxShelvesCount = 10;
  const shelvesArr = [];

  for (let i = 0; i <= maxShelvesCount; i += 1) {
    shelvesArr.push(
      <option key={`shelf${i}`} value={i}>
        {' '}
        {i}
      </option>
    );
  }

  const maxZonesCount = 12;
  const zonesArr = [];

  for (let i = 1; i <= maxZonesCount; i += 1) {
    zonesArr.push(
      <>
        <div key={`zone${i}`}>Zone {i}</div>
        <div>
          <select name={`zone${i}`} onChange={(e) => handleChange(e)}>
            {shelvesArr}
          </select>
        </div>
      </>
    );
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(newWarehouse);
  };

  return (
    <div>
      <h1>Full Stack Test</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>{zonesArr}</div>
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
      </form>
    </div>
  );
}

export default Home;
