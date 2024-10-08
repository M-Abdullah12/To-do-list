import { useEffect, useRef, useState } from 'react'
import close_icon from './assets/close.png'

interface props {
  Items: string[],
  SetItems: React.Dispatch<React.SetStateAction<string[]>>
  position: number,
  show: React.Dispatch<React.SetStateAction<boolean>>
}

const Edittask = (props: props) => {
  const [input, setinput] = useState<string>("")
  const [empty_input,setempty_input] = useState<boolean>(false)
  const input_bar = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if(input_bar.current) {
      input_bar.current.focus()
    }
  },[])

  const submitchange = () => {
    if (input) {
      setempty_input(false)
      let newarray = [...props.Items]
      newarray[props.position] = input
      props.SetItems(newarray)
      localStorage.setItem('tasks', JSON.stringify(newarray))
      props.show(false)
    } else {
      setempty_input(true)
    }
  }
  
  const Entered = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === "Enter")
      submitchange()
  }

  return (
    <div className="fixed w-full h-full flex justify-center items-center">
      <div className="bg-white border-2 border-solid border-slate-950 rounded-md w-[25%] h-[25%] relative p-4 flex flex-col justify-between items-center gap-3">
        <img src={close_icon} alt="Close" onClick={() => props.show(false)} className="absolute top-0 right-0 w-[25px] hover:cursor-pointer"/>
        <div>
          <h2 className="font-bold text-3xl">Edit</h2>
          <input type="text" ref={input_bar} onKeyDown={(e) => Entered(e)} value={input} onChange={(e) => setinput(e.target.value)} className='bg-gray-600 text-white w-full h-7 rounded-md mt-3 pl-3'/>
          <p className={empty_input? 'text-red-600 font-bold text-base block' : 'hidden'}>Cannot be empty</p>
          <button className="bg-green-500 text-white font-bold rounded-md w-[35%] mx-auto mt-3" onClick={() => submitchange()}>Edit</button>
        </div>
      </div>
    </div>
  )
}

export default Edittask