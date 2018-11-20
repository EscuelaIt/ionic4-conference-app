import { Session } from './session';

export interface Group {
  time: string;
  sessions: Session[];
}
