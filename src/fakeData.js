export const students = [
  { username: 'xayala', password: '2005', name: 'Xəyalə Vəliyeva', class: '11D', phone: '055-940-85-67', id: 12345 },
  { username: 'nigar', password: '1234', name: 'Nigar Məmmədova', class: '10A', phone: '055-111-22-33', id: 12346 },
  { username: 'fidan', password: '12345', name: 'Fidan Əlizadə', class: '9B', phone: '055-222-22-33', id: 12341 },
];

export const teachers = [
  { username: 'lala', password: '2345', name: 'Lalə Dəmirova', subject: 'Riyaziyyat',phone: '055-333-33-44', id: 23456 },
  { username: 'zaur', password: '4567', name: 'Zaur Əlizadə', subject: 'Fizika',phone: '055-123-45-67', id: 23457 },
  { username: 'malik', password: '2345', name: 'Malik Kərimli', subject: 'Kimya',phone: '051-447-89-96', id: 23458 },
  { username: 'gulnara', password: '4567', name: 'Gülnarə Vəlizadə', subject: 'Azərbaycan dili',phone: '070-852-96-36', id: 23459 },
];


export const attendanceData = [
  {
    name: 'Xəyalə Vəliyeva',
    class: '11D',
    attendance: {
      '01.06.2025': '✗',
      '02.06.2025': '✓',
      '03.06.2025': '✓',
    },
  },
  {
    name: 'Nigar Məmmədova',
    class: '10A',
    attendance: {
      '01.06.2025': '✓',
      '02.06.2025': '✗',
      '03.06.2025': '✓',
    },
  },
  {
    name: 'Fidan Əlizadə',
    class: '9B',
    attendance: {
      '01.06.2025': '✓',
      '02.06.2025': '✓',
      '03.06.2025': '✗',
    },
  },
];


export const studentsWithGrades = [
  {
    username: 'xayala',
    grades: {
      riyaziyyat: { KSQ1: 85, KSQ2: 90, KSQ3: 95, BSQ: 88 },
      fizika: { KSQ1: 78, KSQ2: 82, KSQ3: 80, BSQ: 79 },
      kimya: { KSQ1: 88, KSQ2: 84, KSQ3: 86, BSQ: 87 },
      'azərbaycan dili': { KSQ1: 91, KSQ2: 89, KSQ3: 92, BSQ: 90 },
    },
  },
  {
    username: 'nigar',
    grades: {
      riyaziyyat: { KSQ1: 75, KSQ2: 79, KSQ3: 80, BSQ: 77 },
      fizika: { KSQ1: 70, KSQ2: 73, KSQ3: 74, BSQ: 72 },
      kimya: { KSQ1: 76, KSQ2: 78, KSQ3: 77, BSQ: 75 },
      'azərbaycan dili': { KSQ1: 81, KSQ2: 80, KSQ3: 82, BSQ: 83 },
    },
  },
  {
    username: 'fidan',
    grades: {
      riyaziyyat: { KSQ1: 95, KSQ2: 94, KSQ3: 96, BSQ: 97 },
      fizika: { KSQ1: 88, KSQ2: 90, KSQ3: 89, BSQ: 87 },
      kimya: { KSQ1: 92, KSQ2: 93, KSQ3: 91, BSQ: 90 },
      'azərbaycan dili': { KSQ1: 89, KSQ2: 87, KSQ3: 90, BSQ: 88 },
    },
  },
];