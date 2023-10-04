import React from 'react';
import { useDispatch } from 'react-redux';
import { addContacts } from 'redux/slices/contacts';
import { useFormik } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import InputMask from 'react-input-mask';
import s from './ContactForm.module.css';

const validationSchema = Yup.object({
  name: Yup.string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name may contain only letters, apostrophe, dash, and spaces.'
    )
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
  number: Yup.string()
    .matches(
      /^\+38 \(0\d{2}\) \d{3}-\d{2}-\d{2}$/,
      'Ukraine phone number format: +38 (0XX) XXX-XX-XX'
    )
    .required('Required'),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      const newContact = { id: nanoid(), ...values };
      dispatch(addContacts(newContact));
      resetForm();
    },
  });

  return (
    <div className={s.phonebook}>
      <h2>Phonebook 📞</h2>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            className={
              formik.touched.name && formik.errors.name ? s.errorInput : ''
            }
          />
          {formik.touched.name && formik.errors.name && (
            <div className={s.error}>{formik.errors.name}</div>
          )}
        </div>

        <div>
          <InputMask
            mask="+38 (099) 999-99-99"
            type="tel"
            id="number"
            name="number"
            placeholder="Enter Phone Number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.number}
            className={
              formik.touched.number && formik.errors.number ? s.errorInput : ''
            }
          />
          {formik.touched.number && formik.errors.number && (
            <div className={s.error}>{formik.errors.number}</div>
          )}
        </div>

        <button type="submit">Add Contact</button>
      </form>
    </div>
  );
};

export default ContactForm;
