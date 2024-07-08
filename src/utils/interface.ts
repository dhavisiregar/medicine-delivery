export interface Transaction {
  payment_type?: string;
  transaction_details: {
    order_id: string;
    gross_amount: number;
  };
  credit_card?: {
    secure?: boolean;
  };
  bank_transfer?: {
    bank?: string;
  };
  customer_details: {
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
  };
}
