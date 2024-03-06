import React, { useState } from 'react'


function App() {
  const [backgroundColor, setChangeColor] = useState('#ffffff')

  const handleClick = (color) => {
setChangeColor(color);
  }
  return (
    <>
    <div style={{ backgroundColor, height: '100vh', transition: 'background-color 0.5s' }} className='flex justify-center bg-slate-100 shadow-xl p-4 rounded-xl items-end'>
      <div className="flex h-10">
      <button onClick={() => handleClick('#ff0000')} className='text-black bg-red-500 px-4 py-2 rounded-xl mr-4'>red</button>
      <button onClick = {() => handleClick('#0000ff')} className='text-black bg-blue-500 px-4 py-2 rounded-xl mr-4'>Blue</button>
      <button onClick = {() => handleClick('#ffff00')} className='text-black bg-yellow-500 px-4 py-2 rounded-xl mr-4'>Yellow</button>
      <button onClick = {() => handleClick('#000000')} className='text-white bg-black px-4 py-2 rounded-xl mr-4'>Black</button>
      <button onClick = {() => handleClick('#00ff00')} className='text-black bg-violet-500 px-4 py-2 rounded-xl mr-4'>Green</button>
      <button onClick = {() => handleClick('#FFC0CB')} className='text-black bg-pink-500 px-4 py-2 rounded-xl mr-4'>Pink</button>
      <button onClick = {() => handleClick('#FFA500')} className='text-black bg-orange-500 px-4 py-2 rounded-xl mr-4'>Orange</button>
      </div>
      

    </div>
    </>
  )
}

export default App



// import React, { useState } from 'react';

// const BackgroundChanger = () => {
//   // State to manage the background color
//   const [backgroundColor, setBackgroundColor] = useState('#ffffff');

//   // Function to handle background color change
//   const handleColorChange = (color) => {
//     setBackgroundColor(color);
//   };

//   return (
//     <div style={{ backgroundColor, minHeight: '100vh', transition: 'background-color 0.5s' }}>
//       <h1>Background Changer</h1>

//       {/* Buttons to change background color */}
//       <button onClick={() => handleColorChange('#ff0000')}>Red</button>
//       <button onClick={() => handleColorChange('#00ff00')}>Green</button>
//       <button onClick={() => handleColorChange('#0000ff')}>Blue</button>
//       <button onClick={() => handleColorChange('#ffff00')}>Yellow</button>
//       <button onClick={() => handleColorChange('#ff00ff')}>Magenta</button>
//     </div>
//   );
// };

// export default BackgroundChanger;
