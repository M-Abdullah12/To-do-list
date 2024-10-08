import { useLayoutEffect, useState } from "react"
import Todo from './assets/todo.png'
import Trash_icon from './assets/484662.png'
import checklogo from './assets/check-circle-solid-24.png'
import circlelogo from './assets/circle-regular-24.png'

const ToDo = () => {

  document.title = "To-Do-List"
  

  const [Value, SetValue] = useState("")
  const [Items, SetItems] = useState<string[]>([])
  const [Input_Empty, SetInput_Empty] = useState(false)
  const [Markedout, SetMarkedout] = useState<boolean[]>([])


  useLayoutEffect(() => {
    const storeditems = localStorage.getItem('tasks')
    const storedstatus = localStorage.getItem('status')
    if (storeditems) {
      const praseditems =  JSON.parse(storeditems)
      const len = praseditems.length
      SetItems(praseditems)
      if (storedstatus) {
        const prasedstatus = JSON.parse(storedstatus)
        SetMarkedout(prasedstatus)
      } else {
        const newarray = Array(len).fill(false)
        SetMarkedout(newarray)
      }
      
    }
  },[])
  

  const Handlesumbit = () => {
    if(Value.length >= 1){
      const newitems = [...Items, Value]
      SetItems(newitems)
      SetValue("")
      SetInput_Empty(false)
      const newarray = [...Markedout,false]
      SetMarkedout(newarray)
      localStorage.setItem('tasks',JSON.stringify(newitems))
      localStorage.setItem('status',JSON.stringify(newarray))
    }
    else{
      SetInput_Empty(true)
    }
  }

  const Entered = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === "Enter")
      Handlesumbit()
  }

  const Handleremove = (index: number) => {
    console.log(index)
    let newitems = [...Items]
    newitems.splice(index,1)
    SetItems(newitems)
    localStorage.setItem('tasks',JSON.stringify(newitems))
    console.log(`length: ${Markedout.length}`)
    if (Markedout.length == 1) {
      SetMarkedout([])
      localStorage.setItem('status',JSON.stringify([]))
    } else {
        const newarray = [...Markedout]
        localStorage.setItem('status',JSON.stringify(newarray.splice(index,1)))
        SetMarkedout(newarray.splice(index,1))
    }
  }


  const Markout = (index:number) => {
    let updatedarray = [...Markedout]
    updatedarray[index] = !updatedarray[index]

    SetMarkedout(updatedarray)
    localStorage.setItem('status', JSON.stringify(updatedarray))
  }
  
  return (
    <div className="flex flex-col bg-slate-950 w-dvw h-full min-h-dvh">
      <div className="grow flex justify-center items-center">
        <div className="min-h-[500px] h-auto w-2/6 rounded-2xl p-6 bg-white ">
          <img src={Todo} className="w-20 inline-block"/><span className="text-2xl font-extrabold">TO-DO-LIST</span>
          <div className="relative">
            <input onKeyDown={(e) => Entered(e)} value={Value} onChange={(e) => SetValue(e.target.value)} type="text" placeholder="Enter Item" className="rounded-xl w-full h-6 indent-3 end-6 pr-20  border-2 bg-gray-600 text-white focus:outline-none border-none shadow-none "/>
            <div  onClick={Handlesumbit} className="w-16 h-6 rounded-xl bg-orange-600 text-white absolute right-0 inline-block text-center font-bold z-50 hover:cursor-pointer">ADD</div>
            <div className={Input_Empty ? 'text-red-600 font-bold text-sm block' : 'hidden bg-red-600'}>Cannot be empty!</div>
          </div>
          <div className="mt-10 mb-3">
            {Items.map((value: string, index: number) =><div key={index} className="flex justify-between items-center h-5 mt-3">
              <img  key={index} src={Markedout[index]? checklogo: circlelogo}/>
              <span onClick={() => Markout(index)} className=" inline-block w-4/5 text-black hover:cursor-pointer">{value}</span>
              <div onClick={() => Handleremove(index)} className="inline-block rounded-full hover:bg-gray-400 p-2">
              <img className="w-4" src={Trash_icon}/></div></div>) }
          </div>
        </div>
      </div>
    </div>
  )
}

export default ToDo