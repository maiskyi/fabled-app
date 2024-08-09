export interface ContactUsRequest {
  subject: string;
  text: string;
  email: string;
}

export interface ContactUsResponse {
  messageId: string;
  response: string;
}
