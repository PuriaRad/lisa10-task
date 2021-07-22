export default class ErrorHandler extends Error {
  constructor(public httpStatusCode, public message) {
    super();
    httpStatusCode = httpStatusCode;
    message = message;
  }
}
