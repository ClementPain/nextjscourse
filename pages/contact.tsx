import { Fragment, useEffect, useState } from 'react'
import ContactForm from '../components/contact'
import { ContactData, NotificationStatus } from '../types'
import Notification from '../components/ui/notification'

const sendContactData = async (contactData: ContactData) => {
  const response = await fetch(`/api/contact`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ contactData })
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong")
  }
}

function ContactPage() {
  const [requestStatus, setRequestStatus] = useState<NotificationStatus>(null)
  const [requestError, setRequestError] = useState("")

  const onAddedContactHandler = async (contactData: ContactData) => {
    try {
      await sendContactData(contactData)
      setRequestStatus('success')
    } catch (err: any) {
      setRequestStatus('error')
      setRequestError(err.message)
    }
  }

  let notificationData 

  if (requestStatus === 'pending') {
    notificationData = {
      status: 'pending',
      title: 'sending message...',
      message: 'your message is on his way'
    }
  }

  if (requestStatus === 'success') {
    notificationData = {
      status: 'success',
      title: 'message sent',
      message: "your message was sent !!!!"
    }
  }

  if (requestStatus === 'error') {
    notificationData = {
      status: 'error',
      title: 'error...',
      message: requestError
    }
  }

  useEffect(() => {
    if (requestStatus === 'success' || requestStatus === 'error') {
      const timer = setTimeout(() => {
        setRequestError("")
        setRequestStatus(null)
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [requestStatus])

  return (
  <Fragment>
    <ContactForm onAddedContact={ onAddedContactHandler } setRequestStatus={ setRequestStatus } />
    { notificationData && (
      <Notification status={ notificationData.status } title={ notificationData.title } message={ notificationData.message } />
    )}
  </Fragment>
  )
}

export default ContactPage