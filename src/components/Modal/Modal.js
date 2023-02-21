import { Dialog, DialogTitle } from '@mui/material'
import React from 'react'


export const Modal = ({children,title, modal, setModal}) => {
  return (
    <Dialog
    onClose={() => setModal(false)}
    open={modal}
  >
    <DialogTitle id="customized-dialog-title">
     {title}
    </DialogTitle>
   {children}
   
  </Dialog>
  )
}
