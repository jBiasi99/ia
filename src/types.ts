export interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  status: 'lead' | 'customer' | 'lost';
  lastContact: string;
}

export interface Deal {
  id: string;
  title: string;
  value: number;
  stage: 'prospect' | 'contact' | 'proposal' | 'negotiation' | 'closed';
  contactId: string;
  probability: number;
  expectedCloseDate: string;
}

export interface DashboardStats {
  totalDeals: number;
  totalValue: number;
  activeContacts: number;
  conversionRate: number;
}