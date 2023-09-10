
import Navbar from "./components/Navbar";
import {FiSearch} from 'react-icons/fi'
import {AiFillPlusCircle} from 'react-icons/Ai'
import { useEffect, useState } from "react";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import {db } from "./config/firebase"
import Contactcard from "./components/Contactcard";
import useDisclouse from "./hooks/useDisclouse";
import AddandDeletecontact from "./components/AddandDeletecontact";
import { ToastContainer, toast } from 'react-toastify';
import * as Yup from 'yup';
  import 'react-toastify/dist/ReactToastify.css';
const App = () => {
const[contacts, setContacts] = useState([])
const { isOpen, close, open } = useDisclouse();
  useEffect(()=>{
        const getContacts = async ()=>{
          try {
            const contactRef = collection(db, "contacts");
            onSnapshot(contactRef, (snapshot) => {
              const contactLists = snapshot.docs.map((doc) => {
                return {
                  id: doc.id,
                  ...doc.data(),
                };
              });
              setContacts(contactLists);
              return contactLists;
            });
          } catch (error) {
            console.log(error)
          }
        }
        getContacts()
  },[])

  const filterContacts = (e) => {
    const value = e.target.value;

    const contactsRef = collection(db, "contacts");

    onSnapshot(contactsRef, (snapshot) => {
      const contactLists = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      const filteredContacts = contactLists.filter((contact) =>
        contact.name.toLowerCase().includes(value.toLowerCase())
      );

      setContacts(filteredContacts);

      return filteredContacts;
    });
  };

  return (
    <div className="max-w-[370px] mx-auto">
<Navbar/>
<div className="flex gap-2">
    <div className="flex relative items-center  flex-grow">
    <FiSearch className="text-white text-3xl absolute ml-1"/>
    <input className="h-10 flex-grow rounded-md bg-transparent pl-9 border border-white text-white" onChange={filterContacts}/>
    </div>
    <AiFillPlusCircle className="text-white  text-5xl cursor-pointer" onClick = {open}/>
    </div>
    <div className="mt-4 flex flex-col gap-3">
      {contacts.map((contact) => {
      return (
       <Contactcard contact={contact} open={open} />
        )})}
    </div>
    <AddandDeletecontact isOpen={isOpen} close={close}/>
    <ToastContainer position="bottom-center" />
</div>
  )
      }
export default App ;
