import React, { useState, useEffect } from 'react';

const App = () => {
  const [dogImage, setDogImage] = useState(null);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((json) => {
        setDogImage(json.message);
        setIsDataLoaded(true);
      });
  }, []);

  if (!isDataLoaded) {
    return (
      <div>
        <h1>Please wait, the dog image is loading...</h1>
      </div>
    );
  }

  return (
    <div className="App">
      <h1>Random Dog Image</h1>
      <img src={dogImage} alt="Random Dog" />
    </div>
  );
};

export default App;
