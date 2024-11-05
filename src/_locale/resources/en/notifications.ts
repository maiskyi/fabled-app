import { NotificationType } from '@bootstrap/constants';
import { AuthErrorCodes } from '@core/auth';

export const notifications = {
  [NotificationType.SubscriptionSucceed]: {
    message:
      'Thank you for subscribing! You’re all set to enjoy exclusive content and updates. We’ll keep you updated with the latest news and features.',
    title: 'You’re Subscribed!',
  },
  [NotificationType.UpdateProfileSucceed]: {
    message:
      'Your name has been updated. The changes will be reflected in your profile.',
    title: 'Name updated successfully',
  },
  [NotificationType.UpdatePasswordSucceed]: {
    message:
      'Your password has been updated. Please use your new password the next time you log in. ',
    title: 'Password updated successfully',
  },
  [NotificationType.ConfirmPasswordResetFailed]: {
    message:
      "We couldn't reset your password. Please try again or contact support.",
    title: 'Password reset failed',
    [AuthErrorCodes.EXPIRED_OOB_CODE]:
      'It looks like the reset link has expired. Please request a new link to reset your password.',
  },
  [NotificationType.ConfirmPasswordResetSucceed]: {
    message:
      'Your password has been successfully updated. You can now sign in with your new password.',
    title: 'Password reset successful',
  },
  emailVerificationFailed: {
    error:
      'The email validation link is either invalid or has already been used. Please request a new verification link if needed.',
    message: 'Your email has been successfully verified. Thank you!',
    title: 'Email verification failed',
  },
  emailVerificationInProgress: {
    message:
      "We're currently verifying your email. Please wait a moment as we complete the process.",
    title: 'Verifying your email',
  },
  emailVerificationSucceed: {
    message: 'Your email has been successfully verified. Thank you!',
    title: 'Email verification successful',
  },
  [NotificationType.FeedbackFailed]: {
    message:
      "Sorry, something went wrong and we couldn't submit your feedback. Please try again later or ensure all required fields are filled out correctly.",
    title: 'Feedback submission failed',
  },
  [NotificationType.FeedbackSucceed]: {
    message:
      'Your feedback has been successfully submitted. We appreciate your input and will use it to enhance our services.',
    title: 'Thank you for your feedback!',
  },
  [NotificationType.InquiryFailed]: {
    message:
      "Oops! Something went wrong, and we couldn't submit your message. Please try again later, or check your internet connection and ensure all required fields are filled out correctly.",
    title: 'Submission failed',
  },
  [NotificationType.InquirySucceed]: {
    message:
      'Your message has been successfully submitted. Our team will review your inquiry and get back to you as soon as possible.',
    title: 'Thank you for reaching out!',
  },
  [NotificationType.SendPasswordResetEmailSucceed]: {
    message: "We've got you covered! Check your email for the reset link.",
    title: "You're almost there!",
  },
  [NotificationType.SendVerificationLinkFailed]: {
    message:
      'There was an issue sending the verification link. Please try again later. If the problem persists, contact support.',
    title: 'Error sending verification link',
  },
  [NotificationType.SendVerificationLinkSucceed]: {
    message:
      'A new verification link has been sent to your email. Please check your inbox and click the link to verify your account. If you don’t see it, be sure to check your spam folder.',
    title: 'New verification link sent',
  },
};
