import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from 'src/customers/dtos/CreateCustomer.dto';
import { CustomerType } from 'src/customers/type/CustomersType';

@Injectable()
export class CustomersService {
  private customers: CustomerType[] = [
    {
      id: 1,
      email: 'what@gmail.com',
      name: 'What is ?',
    },
    {
      id: 2,
      email: 'when@gmail.com',
      name: 'when aiii',
    },
    {
      id: 3,
      email: 'why@gmail.com',
      name: 'whyhooo',
    },
  ];

  findCustomerById(id: number) {
    return this.customers.find((user) => user.id === id);
  }

  getCustomers() {
    return this.customers;
  }

  createCustomer(customerDto: CreateCustomerDto) {
    this.customers.push(customerDto);
  }
}
