import React from 'react'
import { HiOutlineUserCircle } from 'react-icons/Hi'
import { RiEditCircleLine } from 'react-icons/Ri'
import { IoMdTrash } from 'react-icons/Io'
import { deleteDoc, doc } from 'firebase/firestore'
import { db } from '../config/firebase'
import AddandDeletecontact from './AddandDeletecontact'
import useDisclouse from '../hooks/useDisclouse'
import { useState } from 'react'
import {  toast } from 'react-toastify';
  // import 'react-toastify/dist/ReactToastify.css';s
const Contactcard = ({contact}) => {
  const[contacts, setContacts] = useState([])
  const { isOpen, close, open } = useDisclouse();

  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "contacts", id))
      toast.success("Contact Deleted Successfully");
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
    <div key={contact.id} className=" flex justify-between items-center p-2 bg-yellow rounded-lg">
      <div className="flex gap-1 ">
        <HiOutlineUserCircle className="  text-4xl text-orange" />
        <div>
          <h2 className="text-xl font-semibold  ">{contact.name}</h2>
          <p>{contact.email}</p>
        </div>
      </div>
      <div className="flex text-3xl">
        <RiEditCircleLine className='cursor-pointer' onClick={open}/>
        <IoMdTrash onClick={() => { return deleteContact(contact.id) }} className="text-orange cursor-pointer" />
      </div>
    </div>
    <AddandDeletecontact isOpen={isOpen}  isUpdate close={close} contact={contact}/>
    </>
  )
}
export default Contactcard
