//This action creator is for action that are related to messages from APIs

import {SET_MESSAGE, CLAER_MESSAGE } from "./types";

export const setMessage = (message) => ({
    type: SET_MESSAGE,
    payload: message,
});

export const claerMessage = () => ({
    type: CLAER_MESSAGE,
});