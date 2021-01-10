import {Department} from './department.model';

export class Product {
  id = 0;
  code = '';
  description = '';
  price = 0;
  enabled = true;
  department: Department;
}

