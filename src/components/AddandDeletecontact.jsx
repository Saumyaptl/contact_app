import React from 'react'
import Modal from "./Modal";
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {  toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import * as Yup  from "yup"
const AddandDeletecontact = ({close, isOpen, isUpdate, contact}) => {
    const addContacts =async (contact)=>{
        try {
            const collectionRef = collection(db, "contacts");
            await addDoc(collectionRef, contact)
            close()
            toast.success("Contact Added Successfully");
        } catch (error) {
            console.log(error)
        }
    }

    const updateContacts =async (contact, id)=>{
      try {
          const collectionRef = doc(db, "contacts" , id);
          await updateDoc(collectionRef, contact )
          close()
          toast.success("Contact Updated Successfully");
      } catch (error) {
          console.log(error)
      }
  }

  const contactSchemaValidation = Yup.object().shape({
    name: Yup.string().required("Name is Required"),
    email: Yup.string().email("Invalid Email").required("Email is Required"),
  });
  
  return (
    <div>
      {isOpen && <Modal close={close}>

      <Formik 
       validationSchema={contactSchemaValidation}
      initialValues={isUpdate
        ? {
            name: contact.name,
            email: contact.email,
          }:{
name:"",
email:"",
      }}
      onSubmit={(values)=>{
 isUpdate? updateContacts(values, contact.id):
addContacts(values)
      }}
      >
        <Form className=' flex flex-col gap-4'>
<div className='flex flex-col gap-1'>
    <label htmlFor='name'>Name</label>
    <Field name="name"  className="h-10 border p-2"/>
    <div className=" text-xs text-red-500">
                <ErrorMessage name="name" />
              </div>
</div>
<div className='flex flex-col gap-1'>
    <label htmlFor='email'>Email</label>
    <Field name="email"  className="h-10 border p-2"/>
    <div className=" text-xs text-red-500">
                <ErrorMessage name="email" />
              </div>
</div>
<button type="submit" className='bg-orange px-3 py-1.5 self-end border' >{isUpdate ? "update":"add"} Contact</button>
        </Form>
      </Formik>
      </Modal> }
    </div>
  )
}

export default AddandDeletecontact
