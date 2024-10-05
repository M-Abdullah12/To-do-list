import { useEffect, useLayoutEffect, useState } from "react"
import Todo from './assets/todo.png'
import Trash from './assets/484662.png'
import checklogo from './assets/check-circle-solid-24.png'
import circlelogo from './assets/circle-regular-24.png'

const ToDo = () => {

  useEffect(() => {
    document.title = "To-Do-List"
  }, [])

  const [Value, SetValue] = useState("")
  const [Items, SetItems] = useState<string[]>([])
  const [Empty, SetEmpty] = useState(false)
  const [Markedout, SetMarkedout] = useState<boolean[]>([])


  useLayoutEffect(() => {
    const storeditems = localStorage.getItem('tasks')
    if(storeditems) {
      SetItems(JSON.parse(storeditems))
    }
  },[])
  

  const Handlechange = (e: React.ChangeEvent<HTMLInputElement>) => {
    SetValue(e.target.value)
  }

  const Handlesumbit = () => {
    if(Value.length >= 1){
      const newitems = [...Items, Value]
      SetItems(newitems)
      SetValue("")
      SetEmpty(false)
      localStorage.setItem('tasks',JSON.stringify(newitems))
      

    }
    else{
      SetEmpty(true)
    }
  }

  const Entered = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === "Enter")
      Handlesumbit()
  }

  const Handleremove = (index: number) => {
     let newitems = [...Items]
     newitems.splice(index,1)
     SetItems(newitems)
     localStorage.setItem('tasks',JSON.stringify(newitems))
  }


  const Markout = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>, index:number) => {
    e.currentTarget.classList.toggle("line-through")
    let updatedarray = [...Markedout]
    if (updatedarray[index] === false) {
      updatedarray[index] = true
    SetMarkedout(updatedarray)
    } else {
      updatedarray[index] = false
    SetMarkedout(updatedarray)
    }
  }

  return (
    <div className="flex flex-col bg-slate-950 w-dvw h-full min-h-dvh">
      <div className="grow flex justify-center items-center">
        <div className="min-h-[500px] h-auto w-2/6 rounded-2xl p-6 bg-white ">
          <img src={Todo} className="w-20 inline-block"/><span className="text-2xl font-extrabold">TO-DO-LIST</span>
          <div className="relative">
            <input onKeyDown={(e) => Entered(e)} value={Value} onChange={(e) => Handlechange(e)} type="text" placeholder="Enter Item" className="rounded-xl w-full h-6 indent-3 end-6 pr-20  border-2 bg-gray-600 text-white focus:outline-none border-none shadow-none "/>
            <div  onClick={Handlesumbit} className="w-16 h-6 rounded-xl bg-orange-600 text-white absolute right-0 inline-block text-center font-bold z-50 hover:cursor-pointer">ADD</div>
            <div className={Empty ? 'text-red-600 font-bold text-sm block' : 'hidden bg-red-600'}>Cannot be empty!</div>
          </div>
          <div className="mt-10 mb-3">
            {Items.map((value: string, index: number) =>  <div className="flex justify-between items-center h-5 mt-3"><img key={index}  src={Markedout[index]? checklogo: circlelogo}/><span onClick={(e) => Markout(e,index)} className=" inline-block w-4/5 text-black hover:cursor-pointer" key={index}>{value}</span>
            <div onClick={() => Handleremove(index)} className="inline-block rounded-full hover:bg-gray-400 p-2"><img className="w-4" src={Trash}/></div></div>) }
          </div>
        </div>
      </div>
    </div>
  )
}

export default ToDo