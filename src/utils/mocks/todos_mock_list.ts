import { IToDo } from '../../hooks/todo';

export const todosList1 = [
  'I want to be active',
  'I too want to be active soon',
];

export const todosList2: IToDo[] = [
  {
    id: 0,
    text: 'Hello',
    status: 'default',
  },
  {
    id: 1,
    text: 'I am the only one active',
    status: 'active',
  },
  {
    id: 2,
    text: 'I am the first completed',
    status: 'completed',
  },
  {
    id: 3,
    text: 'I am the last completed',
    status: 'completed',
  },
];
