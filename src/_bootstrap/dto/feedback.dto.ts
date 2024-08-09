export interface FeedbackRequest {
  rating: number;
  message: string;
}

export interface FeedbackResponse {
  messageId: string;
  response: string;
}
