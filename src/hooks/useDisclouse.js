import {useState} from 'react'

const useDisclouse = () => {
    const [isOpen, setOpen] = useState(false);
const open = ()=>{
  setOpen(true)
  console.log("clicked")
}
const close = ()=>{
  setOpen(false)
}
  return {isOpen, open, close}
}

export default useDisclouse
