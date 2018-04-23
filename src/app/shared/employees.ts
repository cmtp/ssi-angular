import { Employee } from './employee';

export const EMPLOYEES: Employee[] = [
  {
    id: 0,
    name: 'Valentin Laime',
    image: 'https://api.adorable.io/avatars/1',
    jobPosition: 'Chief Enterprise Officer',
    jobCode: 'CEO',
    featured: true,
    jobDescription: 'El CEO, esta encargado de dirigir la empresa para conseguir los objetivos alineados con las estrategias de la empresa. Su rol fundamental es marcar las estrategias a seguir cuidando que los indicadores relacionados se cumplan y de ser necesario proponer nuevas estrategias que permitan a la empresa adaptarse al mercado.'
  },
  {
    id: 1,
    name: 'Ivan Alban',
    image: 'https://api.adorable.io/avatars/2',
    jobPosition: 'Chief Technology Officer',
    jobCode: 'CTO',
    featured: false,
    jobDescription: 'El CTO, tiene la function de garantizar la calidad de los productos de software cuidando que los recursos utiliados sean adecuados en terminos de tiempo, costo y recurso, de manera que la satisfaccion del cliente este asegurada.'
  },
  {
    id: 2,
    name: 'Ariel Alcocer',
    image: 'https://api.adorable.io/avatars/3',
    jobPosition: 'Software Lead',
    jobCode: 'CTO',
    featured: false,
    jobDescription: 'Tiene la function de dirigir los projectos de software garantizando que se utilice adecuadamente la major tecnologia disponible, y tambien debe garantizar la calidad de todo el equipo del projecto'
  },
  {
    id: 3,
    name: 'Fernando Guzman',
    image: 'https://api.adorable.io/avatars/4',
    jobPosition: 'Executive User Experience Chef',
    jobCode: 'EC',
    featured: false,
    jobDescription: 'Debe garantizar que la experiencia del usuario al estar frente al priducto de software sea loa mas agradable possible, cuidando que la usabilidad del producto sea maximizada, debe diseñar los flujos proponiendo nuevos procesos que agilicen los actuals antes de la implementacion de las nuevas funcionalidades.'
  }
];
