export interface Order {
  id: string;
  userId: string;
  productId: string;
  orderCode: string;
  totalPrice: number;
  orderStatus: string;
  firstnameCustomer: string;
  lastnameCustomer: string;
  emailCustomer: string;
  phoneCustomer: string;
  company: string;
  address: string;
  country: string;
  states: string;
  zipCode: string;
  notes: string;
  createdAt: Date;
  updatedAt: Date;
}
