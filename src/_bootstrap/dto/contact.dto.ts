export interface ContactUsRequest {
  subject: string;
  text: string;
}

export interface ContactUsResponse {
  messageId: string;
  response: string;
}
