
'use client'
import { useState } from 'react'
import { Button, Notification } from 'keep-react'
import { Link } from 'react-router-dom'
export const NotificationComponent = ({tittle, description, notification}) => {
  const [isOpen, setIsOpen] = useState(false)
  const control = () => setIsOpen(!isOpen)

  return (
    <div className="px-5 py-3">
      <Button onClick={control}>{tittle}</Button>
      <Notification isOpen={isOpen} onClose={control}>
        <Notification.Body>
          <Notification.Content>
            <Notification.Title>{notification}</Notification.Title>
            <Notification.Description>
             {description}
            </Notification.Description>
          </Notification.Content>
          <Notification.Footer>
            <Link to="/">
            <Button onClick={control} size="sm">
              Aceptar
            </Button>
            </Link>
          </Notification.Footer>
        </Notification.Body>
      </Notification>
    </div>
  )
}

