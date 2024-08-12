import { AuthProvider } from './auth.dto';

export interface CheckEmailRequest {
  email: string;
}

export interface CheckEmailResponse {
  exists: boolean;
  providers: AuthProvider[];
}
