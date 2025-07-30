export interface User {
  auth_id: string;
  created_at: string;
  email: string
  has_played_today?: boolean | null;
  id: number;
  name: string;
};