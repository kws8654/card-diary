import React, { useRef, useState } from 'react';
import styles from './card_add_form.module.css';
import Button from '../button/button';

const CardAddForm = ({ FileInput, onAdd }) => {
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const messageRef = useRef();
  const [file, setFile] = useState({ fileName: null, fileURL: null });

  const onFileChange = (file) => {
    console.log(file);
    setFile({
      fileName: file.name,
      fileURL: file.url,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const card = {
      id: Date.now(), //uuid
      name: nameRef.current.value || '',
      company: companyRef.current.value || '',
      theme: themeRef.current.value,
      message: messageRef.current.value || '',
      fileName: file.fileName || '',
      fileURL: file.fileURL || '',
    };
    formRef.current.reset();
    setFile({ fileName: null, fileURL: null });
    onAdd(card);
  };
  return (
    <form ref={formRef} className={styles.form}>
      <input
        ref={nameRef}
        className={styles.input}
        type='date'
        name='name'
        placeholder='날짜'
      />
      <input
        ref={companyRef}
        className={styles.input}
        type='text'
        name='company'
        placeholder='기분'
      />
      <select
        ref={themeRef}
        className={styles.select}
        name='theme'
        placeholder='Theme'
      >
        <option placeholder='light'>light</option>
        <option placeholder='dark'>dark</option>
        <option placeholder='colorful'>colorful</option>
      </select>

      <textarea
        ref={messageRef}
        className={styles.textarea}
        name='message'
        placeholder='당신의 하루를 기록해주세요.'
      />
      <div className={styles.fileInput}>
        <FileInput name={file.fileName} onFileChange={onFileChange} />
      </div>
      <Button name='Add' onClick={onSubmit} />
    </form>
  );
};

export default CardAddForm;
