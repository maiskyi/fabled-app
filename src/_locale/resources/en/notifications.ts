import { NotificationType } from '@bootstrap/constants';
import { AuthErrorCodes } from '@core/auth';

export const notifications = {
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
    title: 'Email Verification Failed',
  },
  emailVerificationInProgress: {
    message:
      "We're currently verifying your email. Please wait a moment as we complete the process.",
    title: 'Verifying your email',
  },
  emailVerificationSucceed: {
    message: 'Your email has been successfully verified. Thank you!',
    title: 'Email Verification Successful',
  },
  feedbackFailed: {
    message:
      "Sorry, something went wrong and we couldn't submit your feedback. Please try again later or ensure all required fields are filled out correctly.",
    title: 'Feedback Submission Failed',
  },
  feedbackSucceed: {
    message:
      'Your feedback has been successfully submitted. We appreciate your input and will use it to enhance our services.',
    title: 'Thank You for Your Feedback!',
  },
  inquiryFailed: {
    message:
      "Oops! Something went wrong, and we couldn't submit your message. Please try again later, or check your internet connection and ensure all required fields are filled out correctly.",
    title: 'Submission Failed',
  },
  inquirySucceed: {
    message:
      'Your message has been successfully submitted. Our team will review your inquiry and get back to you as soon as possible.',
    title: 'Thank You for Reaching Out!',
  },
  [NotificationType.SendPasswordResetEmailSucceed]: {
    message: "We've got you covered! Check your email for the reset link.",
    title: "You're Almost There!",
  },
  sendVerificationLinkFailed: {
    message:
      'There was an issue sending the verification link. Please try again later. If the problem persists, contact support.',
    title: 'Error Sending Verification Link',
  },
  sendVerificationLinkSucceed: {
    message:
      'A new verification link has been sent to your email. Please check your inbox and click the link to verify your account. If you don’t see it, be sure to check your spam folder.',
    title: 'New Verification Link Sent',
  },
};
