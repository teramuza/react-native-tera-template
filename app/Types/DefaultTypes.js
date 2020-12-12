// @flow

export type ReducerDefaultProp = {
    data: Object,
    loading: Boolean,
    error: Boolean,
    errorMessage?: String
};

export type ActionDefaultProp = {
    type: String,
    payload: Object,
    errorMessage: String
};

export type PhotoPayloadProp = {
    photo_key: String,
    photo: Object
};
