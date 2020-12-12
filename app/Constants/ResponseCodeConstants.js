export const ResponseCode = {
  success: 200,
  created: 201,
  accepted: 202,
  success_no_return: 204,
  bad_request: 400,
  unauthorized: 401,
  forbidden: 403,
  not_found: 404,
  unprocessable_entity: 422,
  server_error: 500,
  server_down: 503,
  server_timeout: 504
};

export const ResponseStatus = {
  OK: 'OK',
  REQUEST_FAILED: 'REQUEST_FAILED',
  REQUEST_DENIED: 'REQUEST_DENIED',
  INVALID_REQUEST: 'INVALID_REQUEST'
};
