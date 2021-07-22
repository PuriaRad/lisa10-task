import { RegistrationController } from '../../controllers/users/registration';

export const RegistrationRoutes = [
  {
    method: 'get',
    path: '/registrationField',
    controller: RegistrationController.getAllRegistrationField,
    middlewares: [],
  },
  {
    method: 'post',
    path: '/registrationRequest',
    controller: RegistrationController.registerRequest,
    middlewares: [],
  },
];
