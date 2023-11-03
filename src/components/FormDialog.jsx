import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';
import { sls } from "../assets";
import { useAlert } from 'react-alert';

export default function FormDialog({ open, onClose }) {
  const alert = useAlert();
  const [formValues, setFormValues] = useState({
    email: '',
    name: '',
    number: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formValues.email || !formValues.name || !formValues.number || !formValues.message) {
      alert.error('Veuillez remplir tous les champs.');
      return; 
    }
    const serviceId = 'Gmail';
    const templateId = 'template_i7mlegi';
    const userId = '5BTqP2OxGtz0jYndg';

    emailjs.send(serviceId, templateId, formValues, userId)
      .then((result) => {
        console.log('SUCCESS!', result.text);
        setFormValues({ email: '', name: '', number: '', message: '' }); 
        alert.success('Message envoyé avec succès! ✅'); 
        onClose();
      }, (error) => {
        console.log('FAILED...', error.text);
        alert.error('Échec de l\'envoi du message. ❌'); 
      });
  };

  return (
    <Dialog 
      open={open} 
      onClose={onClose} 
      maxWidth="sm" 
      fullWidth
      PaperProps={{
        style: {
          backgroundColor: 'rgba(57, 57, 64)',
          borderRadius: '50px',
        },
      }}
    >
      <form onSubmit={handleSubmit}>
        <div style={{ textAlign: 'center', padding: '20px', color: '#fff' }}>
          <img src={sls} alt="Silver Line Solution" style={{ width: '80px', height: 'auto', margin: '0 auto' }} />
          <Typography variant="h6" component="h2">
            Contactez-nous
          </Typography>
        </div>
        <DialogContent style={{ color: '#fff' }}>
          <TextField
            autoFocus
            margin="dense"
            name="email"
            label="Adresse e-mail"
            type="email"
            fullWidth
            variant="outlined"
            value={formValues.email}
            onChange={handleChange}
            InputLabelProps={{ style: { color: '#fff' } }}
            inputProps={{ style: { color: '#fff' } }}
          />
          <TextField
            margin="dense"
            name="name"
            label="Nom & Prenom"
            type="text"
            fullWidth
            variant="outlined"
            value={formValues.name}
            onChange={handleChange}
            InputLabelProps={{ style: { color: '#fff' } }}
            inputProps={{ style: { color: '#fff' } }}
          />
          <TextField
            margin="dense"
            name="number"
            label="Numéro de téléphone"
            type="number"
            fullWidth
            variant="outlined"
            value={formValues.number}
            onChange={handleChange}
            InputLabelProps={{ style: { color: '#fff' } }}
            inputProps={{ style: { color: '#fff' } }}
          />
          <TextField
            margin="dense"
            name="message"
            label="Message"
            type="text"
            fullWidth
            variant="outlined"
            multiline
            rows={4}
            value={formValues.message}
            onChange={handleChange}
            InputLabelProps={{ style: { color: '#fff' } }}
            inputProps={{ style: { color: '#fff' } }}
          />
        </DialogContent>
        <DialogActions>
          <Button 
            type="submit"
            style={{
              background: 'radial-gradient(64.18% 64.18% at 71.16% 35.69%, #def9fa 0.89%, #bef3f5 17.23%, #9dedf0 42.04%, #7de7eb 55.12%, #5ce1e6 71.54%, #33bbcf 100%)',
              color: '#fff',
              margin: '0 auto',
            }}
          >
            Envoyer
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
