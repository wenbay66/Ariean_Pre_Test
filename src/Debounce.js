import React from 'react';


const debounce = () => {

  const debounce = (func, delay) => {
    let timeID;

    return () => {
      clearTimeout(timeID);
      timeID = setTimeout(() => {
        func();
      }, delay);
    };
  };

  const testFunc = () => {
    alert('我執行了～')
  };

  const debounceFunc = debounce(testFunc, 2000);

  const handleClick = event => {
    event.preventDefault();
    debounceFunc();
  };
  
  
  return(
    <>
      <button onClick={handleClick}>測試按鈕</button>
    </>
  )
}

export default debounce;