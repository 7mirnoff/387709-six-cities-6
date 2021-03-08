export const AuthorizationActionTypes = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
};

export const AuthorizationActionCreator = {
  requireAuthorization: (payload) => ({
    type: AuthorizationActionTypes.REQUIRED_AUTHORIZATION,
    payload,
  })
};
