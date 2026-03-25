import { type ClassValue, clsx } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export const BUSINESS = {
  name: 'Regal Billiards',
  address: '952 S Broadway, Hicksville, NY 11801',
  phone: '(516) 938-6832',
  phoneHref: 'tel:+15169386832',
  email: 'regalbilliards@gmail.com',
  hours: 'Monday–Saturday 10am–5pm',
  hoursAppointment: 'Sundays/Evenings by Appointment',
  owner: 'Mike Walsh',
  established: '40+',
  serviceArea: 'Nassau County, Suffolk County, Brooklyn, Queens',
  googleMapsUrl: 'https://maps.google.com/?q=952+S+Broadway+Hicksville+NY+11801',
  facebook: 'https://facebook.com/RegalBilliards',
  instagram: 'https://instagram.com/regalbilliards',
  googleReview: 'https://g.page/regal-billiards',
  geo: {
    lat: 40.7568,
    lng: -73.5249,
  },
} as const;
