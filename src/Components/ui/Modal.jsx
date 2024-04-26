'use client'
import { useState } from 'react'
import { CloudArrowUp } from 'phosphor-react'
import { Button, Modal } from 'keep-react'
import { useLocalStorage } from '../Contexto';


export const ModalComponent = () => {
  const [isOpen, setIsOpen] = useState(false)
  const openModal = () => {
    setIsOpen(true)
  }
  const closeModal = () => {
    setIsOpen(false)
  }

  const { localStorageData, deleteAllLocalStorageData } = useLocalStorage();

  const handleDeleteAll = () => {
    deleteAllLocalStorageData();
  };

  return (
    <>
      <Button onClick={openModal}>Delete All</Button>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <Modal.Body className="space-y-3">
          <Modal.Icon>
            <CloudArrowUp size={28} color="#ff0000" />
          </Modal.Icon>
          <Modal.Content>
            <div className="!mb-6">
              <h3 className="mb-2 text-body-1 font-medium text-metal-900">Eliminar Notas!</h3>
              <p className="text-body-4 font-normal text-metal-600">
                Desea eliminar todas las notas?
              </p>
            </div>
          </Modal.Content>
          <Modal.Footer>
            <Button onClick={closeModal} size="sm" variant="outline" color="secondary">
              Cancel
            </Button>
            <Button onClick={() => { closeModal(); handleDeleteAll(); }} size="sm" color="primary">
              Confirm
            </Button>
          </Modal.Footer>
        </Modal.Body>
      </Modal>
    </>
  )
}
