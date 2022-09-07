import React, { useEffect, useState } from 'react';
import { data } from './components/fakeJSON';

function App() {
  const [checkedValues, setCheckedValues] = useState([]);
  const [players, setPlayers] = useState([]);

  const filterPlayersOnCheckbox = () => {
    if (checkedValues.length) {
      const filteredPlayers = data.filter((player) =>
        checkedValues.includes(player.country)
      );
      setPlayers(filteredPlayers);
    } else {
      setPlayers(data);
    }
  };

  useEffect(() => {
    filterPlayersOnCheckbox();
  }, [checkedValues]);

  const handleChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setCheckedValues([...checkedValues, value]);
    } else {
      setCheckedValues(checkedValues.filter((lang) => lang !== value));
    }
  };

  return (
    <>
      <div className='m-3'>
        <form className='flex border-b'>
          <div className='mr-2'>
            <input
              className=''
              type='checkbox'
              value='india'
              id='flexCheckDefault'
              onChange={handleChange}
            />
            <label className='form-check-label' htmlFor='flexCheckDefault'>
              india
            </label>
          </div>
          <div className='mr-2'>
            <input
              className=''
              type='checkbox'
              value='south_africa'
              id='flexCheckDefault'
              onChange={handleChange}
            />
            <label className='form-check-label' htmlFor='flexCheckDefault'>
              south africa
            </label>
          </div>
          <div className='mr-2'>
            <input
              className=''
              type='checkbox'
              value='australia'
              id='flexCheckDefault'
              onChange={handleChange}
            />
            <label className='form-check-label' htmlFor='flexCheckDefault'>
              australia
            </label>
          </div>
          <div className='mr-2'>
            <input
              className=''
              type='checkbox'
              value='new_zealand'
              id='flexCheckDefault'
              onChange={handleChange}
            />
            <label className='form-check-label' htmlFor='flexCheckDefault'>
              new_zealand
            </label>
          </div>
        </form>

        {players.map((player) => (
          <div className='mb-3' key={player.id}>
            <h1 className='font-bold'>{player.name}</h1>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
