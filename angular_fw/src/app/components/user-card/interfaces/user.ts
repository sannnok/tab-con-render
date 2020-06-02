export interface User {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  gender: 'M' | 'F';
  selected?: boolean;
}
