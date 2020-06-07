import React from 'react';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useTranslation } from 'react-i18next';

import Input from '@components/atoms/TextInput';
import Button from '@components/atoms/Button';

import {
  InputContainer,
  ButtonContainer,
} from './style';

const RoomEnter = ({ handleEnterSubmit }) => {
  const { t: tRoom } = useTranslation('room');
  const t = (properties) => tRoom(`enter.${properties}`);
  const tUsername = (properties) => t(`fields.username.${properties}`);
  const tRoomName = (properties) => t(`fields.roomName.${properties}`);

  const validationEnterSchema = Yup.object({
    username: Yup.string().max(16, tUsername('errors.maxLength')).required(tUsername('errors.required')),
    roomName: Yup.string().max(25, tRoomName('errors.maxLength')).matches(/^[a-zA-Z ]+$/, tRoomName('errors.invalid')).required(tRoomName('errors.required'))
  });

  return (
    <Formik
      initialValues={{ username: '', roomName: '' }}
      onSubmit={handleEnterSubmit}
      validationSchema={validationEnterSchema}
    >
    {({ handleSubmit, handleChange, values, errors }) => (
      <form onSubmit={handleSubmit}>
        <InputContainer>
          <Input
            name="username"
            value={values.username}
            placeholder={tUsername('placeholder')}
            autocomplete="username"
            error={errors.username}
            onChange={handleChange}
          />
        </InputContainer>
        <InputContainer>
          <Input
            name="roomName"
            value={values.roomName}
            placeholder={tRoomName('placeholder')}
            autocomplete="off"
            error={errors.roomName}
            onChange={handleChange}
          />
        </InputContainer>
        <ButtonContainer>
          <Button type="submit" label={t('button')} />
        </ButtonContainer>
      </form>
    )}
    </Formik>
  )
}

RoomEnter.propTypes = {
  handleEnterSubmit: PropTypes.func.isRequired
}

export default RoomEnter;
