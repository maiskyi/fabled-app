import { AuthErrorCodes } from 'firebase/auth';

import { LocalizationContextProps } from './Localization.types';

export const DEFAULT_LOCALIZATION_CONTEXT_VALUE: LocalizationContextProps = {
  authErrorTitle: 'Authentication Error!',
  authErrorMessage: {
    'auth/unknown':
      'An error occurred during authentication. Please try again later.',
    [AuthErrorCodes.ADMIN_ONLY_OPERATION]:
      'This operation is restricted to administrators only.',
    [AuthErrorCodes.ARGUMENT_ERROR]:
      'An invalid argument was provided to an authentication method. Please check the method call and its parameters.',
    [AuthErrorCodes.APP_NOT_AUTHORIZED]:
      'This app is not authorized to use Firebase Authentication. Please verify the app configuration in the Firebase Console.',
    [AuthErrorCodes.APP_NOT_INSTALLED]:
      'The requested app is not installed on this device.',
    [AuthErrorCodes.CAPTCHA_CHECK_FAILED]:
      'The reCAPTCHA response token provided is either invalid, expired, or has already been used.',
    [AuthErrorCodes.CODE_EXPIRED]: 'The action code has expired.',
    [AuthErrorCodes.CORDOVA_NOT_READY]: 'Cordova framework is not ready.',
    [AuthErrorCodes.CORS_UNSUPPORTED]:
      'This browser is not supported due to CORS issues.',
    [AuthErrorCodes.CREDENTIAL_ALREADY_IN_USE]:
      'This credential is already associated with a different user account.',
    [AuthErrorCodes.CREDENTIAL_MISMATCH]:
      'The custom token corresponds to a different audience.',
    [AuthErrorCodes.CREDENTIAL_TOO_OLD_LOGIN_AGAIN]:
      'This operation is sensitive and requires recent authentication. Log in again before retrying this request.',
    [AuthErrorCodes.DEPENDENT_SDK_INIT_BEFORE_AUTH]:
      'Another Firebase SDK was initialized before Auth SDK. Initialize the Auth SDK first.',
    [AuthErrorCodes.DYNAMIC_LINK_NOT_ACTIVATED]:
      'Dynamic links are not activated.',
    [AuthErrorCodes.EMAIL_CHANGE_NEEDS_VERIFICATION]:
      'Email change needs verification.',
    [AuthErrorCodes.EMAIL_EXISTS]:
      'The email address is already in use by another account.',
    [AuthErrorCodes.EMULATOR_CONFIG_FAILED]:
      'Failed to configure the emulator. Check your configuration.',
    [AuthErrorCodes.EXPIRED_OOB_CODE]: 'The action code has expired.',
    [AuthErrorCodes.EXPIRED_POPUP_REQUEST]:
      'The popup request was cancelled because another popup request was made.',
    [AuthErrorCodes.INTERNAL_ERROR]:
      'An internal error occurred. Please try again later.',
    [AuthErrorCodes.INVALID_API_KEY]:
      'The provided API key is invalid. Please check the key and try again.',
    [AuthErrorCodes.INVALID_APP_CREDENTIAL]: 'The app credential is invalid.',
    [AuthErrorCodes.INVALID_APP_ID]: 'The specified app ID is invalid.',
    [AuthErrorCodes.INVALID_AUTH]:
      "The user's credential is no longer valid. The user must sign in again.",
    [AuthErrorCodes.INVALID_AUTH_EVENT]: 'The authentication event is invalid.',
    [AuthErrorCodes.INVALID_CERT_HASH]: 'The certificate hash is invalid.',
    [AuthErrorCodes.INVALID_CODE]:
      'The verification code provided is incorrect or has expired.',
    [AuthErrorCodes.INVALID_CONTINUE_URI]:
      'The continue URL provided in the request is invalid.',
    [AuthErrorCodes.INVALID_CORDOVA_CONFIGURATION]:
      'The Cordova configuration is invalid.',
    [AuthErrorCodes.INVALID_CUSTOM_TOKEN]:
      'The custom token format is incorrect. Please check the documentation for creating a valid custom token.',
    [AuthErrorCodes.INVALID_DYNAMIC_LINK_DOMAIN]:
      'The provided dynamic link domain is not configured or authorized for the current project.',
    [AuthErrorCodes.INVALID_EMAIL]:
      'The email address is not valid. Please check the email format and try again.',
    [AuthErrorCodes.INVALID_EMULATOR_SCHEME]:
      'The emulator scheme provided is invalid.',
    [AuthErrorCodes.INVALID_LOGIN_CREDENTIALS]:
      'The username or email you entered is incorrect.',
    [AuthErrorCodes.INVALID_MESSAGE_PAYLOAD]: 'The message payload is invalid.',
    [AuthErrorCodes.INVALID_MFA_SESSION]:
      'The multi-factor authentication session is invalid.',
    [AuthErrorCodes.INVALID_OAUTH_CLIENT_ID]:
      'The OAuth client ID provided is invalid.',
    [AuthErrorCodes.INVALID_OAUTH_PROVIDER]:
      'The OAuth provider specified is invalid.',
    [AuthErrorCodes.INVALID_OOB_CODE]:
      'The action code is invalid. This can happen if the code is malformed or has already been used.',
    [AuthErrorCodes.INVALID_ORIGIN]:
      'The domain of the application is not authorized for OAuth operations. Please add the domain in the Firebase Console.',
    [AuthErrorCodes.INVALID_PASSWORD]:
      'The password is invalid or the user does not have a password.',
    [AuthErrorCodes.INVALID_PERSISTENCE]:
      'The specified persistence type is invalid.',
    [AuthErrorCodes.INVALID_PHONE_NUMBER]:
      'The phone number is in an invalid format. Please enter a correct phone number.',
    [AuthErrorCodes.INVALID_PROVIDER_ID]:
      'The provider ID specified is invalid.',
    [AuthErrorCodes.INVALID_RECIPIENT_EMAIL]: 'The recipient email is invalid.',
    [AuthErrorCodes.INVALID_SENDER]: 'The sender email is invalid.',
    [AuthErrorCodes.INVALID_SESSION_INFO]:
      'The verification ID provided is incorrect.',
    [AuthErrorCodes.INVALID_TENANT_ID]: 'The tenant ID provided is invalid.',
    [AuthErrorCodes.MFA_INFO_NOT_FOUND]:
      'The multi-factor info (e.g., a phone number) for the user was not found.',
    [AuthErrorCodes.MFA_REQUIRED]:
      'Multi-factor authentication is required for this operation. Please complete the multi-factor authentication.',
    [AuthErrorCodes.MISSING_ANDROID_PACKAGE_NAME]:
      'The Android package name is missing.',
    [AuthErrorCodes.MISSING_APP_CREDENTIAL]: 'The app credential is missing.',
    [AuthErrorCodes.MISSING_AUTH_DOMAIN]:
      'The auth domain configuration is required.',
    [AuthErrorCodes.MISSING_CODE]: 'The verification code is missing.',
    [AuthErrorCodes.MISSING_CONTINUE_URI]: 'The continue URL is missing.',
    [AuthErrorCodes.MISSING_IFRAME_START]: 'The iframe start is missing.',
    [AuthErrorCodes.MISSING_IOS_BUNDLE_ID]: 'The iOS bundle ID is missing.',
    [AuthErrorCodes.MISSING_OR_INVALID_NONCE]:
      'The nonce is missing or invalid.',
    [AuthErrorCodes.MISSING_MFA_INFO]:
      'The multi-factor authentication info is missing.',
    [AuthErrorCodes.MISSING_MFA_SESSION]:
      'The multi-factor authentication session is missing.',
    [AuthErrorCodes.MISSING_PHONE_NUMBER]:
      'The phone number is missing. Please enter the phone number and try again.',
    [AuthErrorCodes.MISSING_SESSION_INFO]: 'The verification ID is missing.',
    [AuthErrorCodes.MODULE_DESTROYED]:
      'This instance of FirebaseApp has been deleted.',
    [AuthErrorCodes.NEED_CONFIRMATION]:
      'An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.',
    [AuthErrorCodes.NETWORK_REQUEST_FAILED]:
      'A network error occurred during the operation. Please check your internet connection and try again.',
    [AuthErrorCodes.NULL_USER]: 'The current user is null.',
    [AuthErrorCodes.NO_AUTH_EVENT]: 'No authentication event was found.',
    [AuthErrorCodes.NO_SUCH_PROVIDER]: 'No such provider is configured.',
    [AuthErrorCodes.OPERATION_NOT_ALLOWED]:
      'The requested authentication operation is not enabled. Please enable it in the Firebase Console.',
    [AuthErrorCodes.OPERATION_NOT_SUPPORTED]:
      'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',
    [AuthErrorCodes.POPUP_BLOCKED]: 'The popup was blocked by the browser.',
    [AuthErrorCodes.POPUP_CLOSED_BY_USER]:
      'The popup has been closed by the user before finalizing the operation.',
    [AuthErrorCodes.PROVIDER_ALREADY_LINKED]:
      'The user can only be linked to one identity for the given provider.',
    [AuthErrorCodes.QUOTA_EXCEEDED]:
      'The SMS quota for this project has been exceeded.',
    [AuthErrorCodes.REDIRECT_CANCELLED_BY_USER]:
      'The redirect operation has been cancelled by the user before finalizing.',
    [AuthErrorCodes.REDIRECT_OPERATION_PENDING]:
      'A redirect sign-in operation is already pending.',
    [AuthErrorCodes.REJECTED_CREDENTIAL]:
      'The request contains malformed or mismatching credentials.',
    [AuthErrorCodes.SECOND_FACTOR_ALREADY_ENROLLED]:
      'The second factor is already enrolled.',
    [AuthErrorCodes.SECOND_FACTOR_LIMIT_EXCEEDED]:
      'The maximum number of allowed second factors on a user has been exceeded.',
    [AuthErrorCodes.TENANT_ID_MISMATCH]:
      'The provided tenant ID does not match the Auth instance’s tenant ID.',
    [AuthErrorCodes.TIMEOUT]: 'The operation has timed out.',
    [AuthErrorCodes.TOKEN_EXPIRED]:
      "The user's credential has expired. The user needs to sign in again.",
    [AuthErrorCodes.TOO_MANY_ATTEMPTS_TRY_LATER]:
      'Too many requests have been made in a short period of time. Please wait and try again later.',
    [AuthErrorCodes.UNAUTHORIZED_DOMAIN]:
      'The domain of the continue URL is not whitelisted. Please whitelist the domain in the Firebase Console.',
    [AuthErrorCodes.UNSUPPORTED_FIRST_FACTOR]:
      'The provided first factor is not supported.',
    [AuthErrorCodes.UNSUPPORTED_PERSISTENCE]:
      'The current environment does not support the specified persistence type.',
    [AuthErrorCodes.UNSUPPORTED_TENANT_OPERATION]:
      'This operation is not supported in a multi-tenant context.',
    [AuthErrorCodes.UNVERIFIED_EMAIL]:
      'The operation requires a verified email.',
    [AuthErrorCodes.USER_CANCELLED]:
      'The user did not grant the requested permissions.',
    [AuthErrorCodes.USER_DELETED]:
      'There is no user record corresponding to this identifier. The user may have been deleted.',
    [AuthErrorCodes.USER_DISABLED]:
      'The user account has been disabled by an administrator.',
    [AuthErrorCodes.USER_MISMATCH]:
      'The supplied credentials do not correspond to the previously signed-in user.',
    [AuthErrorCodes.USER_SIGNED_OUT]: 'The user has been signed out.',
    [AuthErrorCodes.WEAK_PASSWORD]:
      'The password is too weak. Please enter a stronger password.',
    [AuthErrorCodes.WEB_STORAGE_UNSUPPORTED]:
      'This browser does not support web storage.',
    [AuthErrorCodes.ALREADY_INITIALIZED]:
      'The Auth instance has already been initialized.',
    [AuthErrorCodes.RECAPTCHA_NOT_ENABLED]:
      'reCAPTCHA is not enabled. Please enable it in the Firebase Console.',
    [AuthErrorCodes.MISSING_RECAPTCHA_TOKEN]: 'The reCAPTCHA token is missing.',
    [AuthErrorCodes.INVALID_RECAPTCHA_TOKEN]: 'The reCAPTCHA token is invalid.',
    [AuthErrorCodes.INVALID_RECAPTCHA_ACTION]:
      'The reCAPTCHA action is invalid.',
    [AuthErrorCodes.MISSING_CLIENT_TYPE]: 'The client type is missing.',
    [AuthErrorCodes.MISSING_RECAPTCHA_VERSION]:
      'The reCAPTCHA version is missing.',
    [AuthErrorCodes.INVALID_RECAPTCHA_VERSION]:
      'The reCAPTCHA version is invalid.',
    [AuthErrorCodes.INVALID_REQ_TYPE]: 'The request type is invalid.',
  },
};
