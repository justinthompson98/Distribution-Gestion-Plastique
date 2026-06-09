export interface TireBagProduct {
  id: string;
  name: string;
  thickness: string;
  dimensions: string;
  icon: string;
  badge: string;
  bestFor: string;
}

export interface ContactSubmission {
  garageName: string;
  contactName: string;
  phone: string;
  email: string;
  bagType: string;
  customLogo: boolean;
  estimatedRolls: number;
  message: string;
}
