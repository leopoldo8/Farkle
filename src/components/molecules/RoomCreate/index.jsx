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

const RoomCreate = ({ handleCreateSubmit }) => {
  const { t: tRoom } = useTranslation('room');
  const t = (properties) => tRoom(`create.${properties}`);
  const tUsername = (properties) => t(`fields.username.${properties}`);
  const tRoomName = (properties) => t(`fields.roomName.${properties}`);
  const tRoomPassword = (properties) => t(`fields.roomPassword.${properties}`);

  const validationCreateSchema = Yup.object({
    username: Yup.string().max(16, tUsername('errors.invalid')).required(tUsername('errors.required')),
    roomName: Yup.string(tRoomName('errors.invalid')).required(tRoomName('errors.required')),
    roomPassword: Yup.string().min(8, tRoomPassword('errors.minLength')).matches(/^(?=.*\d).{8,32}$/, tRoomPassword('errors.invalid')).optional()
  });

  return (
    <Formik
      initialValues={{ username: '', roomName: '', roomPassword: '' }}
      onSubmit={handleCreateSubmit}
      validationSchema={validationCreateSchema}
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
        <InputContainer>
          <Input
            name="roomPassword"
            value={values.roomPassword}
            placeholder={tRoomPassword('placeholder')}
            autocomplete="password"
            error={errors.roomPassword}
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

RoomCreate.propTypes = {
  handleCreateSubmit: PropTypes.func.isRequired
}

export default RoomCreate;
