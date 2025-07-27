// This file configures the initialization of Sentry on the client.
// The added config here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://63469c4e7ac7b186a736c3c54dc3c2b6@o4509737883074560.ingest.us.sentry.io/4509737887662080",

  // Add optional integrations for additional features
  integrations: [
    Sentry.replayIntegration(),
    Sentry.feedbackIntegration({
      colorScheme: "dark",
      triggerLabel:"",
      triggerAriaLabel:"",
      formTitle:"Reportar Bug",
      nameLabel:"Nome",
      namePlaceholder:"Digite seu nome",
      emailLabel:"Email",
      emailPlaceholder:"Digite seu email",
      messageLabel:"Mensagem",
      messagePlaceholder:"Digite sua mensagem",
      addScreenshotButtonLabel:"Adicionar Screenshot",
      removeScreenshotButtonLabel:"Remover Screenshot",
      submitButtonLabel:"Enviar",
      submitLoadingLabel:"Enviando...",
      submitSuccessLabel:"Mensagem enviada com sucesso!",
      cancelButtonLabel:"Cancelar ",
      submitErrorDescription:"Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente mais tarde.",
    }),
  ],

  // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
  tracesSampleRate: 1,
  // Enable logs to be sent to Sentry
  enableLogs: true,

  // Define how likely Replay events are sampled.
  // This sets the sample rate to be 10%. You may want this to be 100% while
  // in development and sample at a lower rate in production
  replaysSessionSampleRate: 0.1,

  // Define how likely Replay events are sampled when an error occurs.
  replaysOnErrorSampleRate: 1.0,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});

export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;