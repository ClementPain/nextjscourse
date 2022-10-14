import { FormEvent, MutableRefObject, useRef, useState } from 'react'
import { NotificationStatus, OnAddedContact } from '../../types'
import classes from './contact.module.css'

interface ContactFormProps {
  onAddedContact: OnAddedContact
  setRequestStatus: (previous: NotificationStatus) => void
}

function ContactForm({ onAddedContact, setRequestStatus }: ContactFormProps) {
  const emailRef = useRef<HTMLInputElement | null>(null)
  const nameRef = useRef<HTMLInputElement | null>(null)
  const messageRef = useRef<HTMLTextAreaElement | null>(null)

  const submitFormHandler = (event: FormEvent) => {
    event.preventDefault()

    setRequestStatus('pending')

    const enteredEmail = emailRef?.current?.value;
    const enteredName = nameRef?.current?.value;
    const enteredMessage = messageRef?.current?.value;

    if (
      !enteredEmail ||
      enteredEmail.trim() === '' ||
      !enteredEmail.includes('@') ||
      !enteredName ||
      enteredName.trim() === '' ||
      !enteredMessage ||
      enteredMessage.trim() === ''
    ) {
      setRequestStatus('error')

      return
    }

    onAddedContact({
      email: enteredEmail,
      name: enteredName,
      message: enteredMessage
    })
  }

  return (
  <section className={ classes.contact }>
    <h1>How can I help you ?</h1>

    <form className={ classes.form } onSubmit={ (e) => submitFormHandler(e) }>
      <div className={ classes.controls }>
        <div className={ classes.control }>
          <label htmlFor="email">Your email</label>
          <input type="email" id='email' ref={ emailRef } required />
        </div>

        <div className={ classes.control }>
          <label htmlFor="name">Your name</label>
          <input type="text" id='name' ref={ nameRef } required />
        </div>
      </div>

      <div className={ classes.control }>
        <label htmlFor="message">Your message</label>
        <textarea name="message" id="message" rows={ 5 } ref={ messageRef } />
      </div>

      <div className={ classes.actions }>
        <button>Send message</button>
      </div>
    </form>
  </section>
  )
}

export default ContactForm