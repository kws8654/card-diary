import React, { useState } from 'react';
import CardAddForm from '../card_add_form/card_add_form';
import CardEditForm from '../card_edit_form/card_edit_form';
import styles from './editor.module.css';

const Editor = ({ FileInput, cards, addCard, updateCard, deleteCard }) => {
  const [isClickedEdit, setIsClickedEdit] = useState(false);

  const onOffEdit = () => {
    isClickedEdit ? setIsClickedEdit(false) : setIsClickedEdit(true);
  };

  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>
        Write your today <button onClick={onOffEdit}>수정</button>
      </h1>
      {Object.keys(cards).map((key) => (
        <CardEditForm
          key={key}
          FileInput={FileInput}
          card={cards[key]}
          updateCard={updateCard}
          deleteCard={deleteCard}
          isClickedEdit={isClickedEdit}
        />
      ))}
      <CardAddForm FileInput={FileInput} onAdd={addCard} />
    </section>
  );
};

export default Editor;
