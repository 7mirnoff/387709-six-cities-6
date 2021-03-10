export const AuthorizationActionTypes = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
};

export const AuthorizationActionCreator = {
  requireAuthorization: (payload) => ({
    type: AuthorizationActionTypes.REQUIRED_AUTHORIZATION,
    payload,
  }),
  redirectToRoute: (url) => ({
    type: AuthorizationActionTypes.REDIRECT_TO_ROUTE,
    payload: url,
  })
};
