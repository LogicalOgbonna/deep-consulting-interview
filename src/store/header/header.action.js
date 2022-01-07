import { createAction } from '@reduxjs/toolkit';

export const getCity = createAction('user/get-city');
export const saveNoteAC = createAction('user/save-note');
export const deleteNoteAC = createAction('user/delete-note');
export const updateNoteAC = createAction('user/update-note');