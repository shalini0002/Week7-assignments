import { useMemo, useState } from 'react'



function App() {
const [wordCount, setWordCount] = useState('');
const [paragraph, setParagraph] = useState('');

const para = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, reprehenderit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, ipsa. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae consectetur recusandae deleniti mollitia eveniet maxime? Dignissimos temporibus aliquid aspernatur maxime a. Pariatur, neque odit enim accusantium quidem, temporibus minima voluptatem quam nostrum expedita nam molestias architecto laudantium accusamus provident dolor!';

const wordArr = useMemo( () => {
    return para.split(' ');
}, [])
const handleSubmit = () => {
  let temp = [];
  for(let index = 0; index < wordCount; index++){
    temp.push(wordArr[Math.floor(Math.random()*wordCount)]);
  }
  setParagraph(temp.join(' '));
  // console.log(temp.join(' '));
}
  return (
    <>
    <h1 className='flex items-center justify-center w-full pt-20 pb-5 font-bold'>Paragraph Generator</h1>
    <div className="flex justify-center w-full gap-2 ">
    <input className='border-2 w-[50%] border-black ' type='number' name='' id='' value={wordCount}
     onChange={(e) => {
      setWordCount(e.target.value);
    }}/>
    <button onClick={handleSubmit} className='p-2 text-white bg-black border-2 border-black rounded-lg'>Generate</button>
    </div>
    <div className="flex justify-center w-full">
      <p className='flex items-center justify-center w-[80%] py-4'>{paragraph}</p>
    </div>
  
    </>
  )
}

export default App
