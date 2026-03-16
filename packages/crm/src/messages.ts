import type { AppLocale } from "@mulagroup/content-models";

type LeadOpsMessages = {
  client: {
    nextStep: string;
    successMessage: string;
  };
  errors: {
    allDeliveryFailed: string;
    invalidEmail: (fieldLabel: string) => string;
    invalidPayload: string;
    invalidPhone: (fieldLabel: string) => string;
    invalidSelection: (fieldLabel: string) => string;
    missingField: (fieldLabel: string) => string;
    noProductionDestination: string;
    unexpected: string;
  };
  fields: {
    company: string;
    email: string;
    inquiryType: string;
    message: string;
    name: string;
    phone: string;
  };
};

const LEAD_OPS_MESSAGES: Record<AppLocale, LeadOpsMessages> = {
  en: {
    client: {
      nextStep: "We will review the context and confirm the best next step for this inquiry.",
      successMessage: "Thanks. Your inquiry has been captured and routed into the right next step.",
    },
    errors: {
      allDeliveryFailed: "Lead delivery failed before reaching any production destination.",
      invalidEmail: (fieldLabel) => `${fieldLabel} must be a valid email address.`,
      invalidPayload: "Invalid inquiry payload.",
      invalidPhone: (fieldLabel) => `${fieldLabel} must be a valid phone number.`,
      invalidSelection: (fieldLabel) => `${fieldLabel} contains an invalid selection.`,
      missingField: (fieldLabel) => `${fieldLabel} is required.`,
      noProductionDestination:
        "Lead delivery is not configured for production. Please configure at least one webhook target.",
      unexpected: "Unexpected inquiry submission error.",
    },
    fields: {
      company: "Company / project",
      email: "Email",
      inquiryType: "Topic",
      message: "Message",
      name: "Name",
      phone: "Phone",
    },
  },
  pl: {
    client: {
      nextStep: "Sprawdzimy kontekst i potwierdzimy najlepszy kolejny krok dla tego zapytania.",
      successMessage:
        "Dziękujemy. Twoje zapytanie zostało zapisane i skierowane do właściwego kolejnego kroku.",
    },
    errors: {
      allDeliveryFailed: "Dostarczenie leada nie powiodło się przed dotarciem do żadnego celu produkcyjnego.",
      invalidEmail: (fieldLabel) => `${fieldLabel} musi zawierać poprawny adres e-mail.`,
      invalidPayload: "Nieprawidłowe dane zapytania.",
      invalidPhone: (fieldLabel) => `${fieldLabel} musi zawierać poprawny numer telefonu.`,
      invalidSelection: (fieldLabel) => `${fieldLabel} zawiera nieprawidłowy wybór.`,
      missingField: (fieldLabel) => `Pole ${fieldLabel.toLowerCase()} jest wymagane.`,
      noProductionDestination:
        "Dostarczenie leadów nie jest skonfigurowane dla środowiska produkcyjnego. Ustaw przynajmniej jeden webhook docelowy.",
      unexpected: "Wystąpił nieoczekiwany błąd podczas wysyłki zapytania.",
    },
    fields: {
      company: "Firma / projekt",
      email: "E-mail",
      inquiryType: "Temat",
      message: "Wiadomość",
      name: "Imię i nazwisko",
      phone: "Telefon",
    },
  },
};

export function getLeadOpsMessages(locale: AppLocale): LeadOpsMessages {
  return LEAD_OPS_MESSAGES[locale];
}

export function getLeadFieldLabel(fieldName: string, locale: AppLocale, fallbackLabel?: string) {
  const messages = getLeadOpsMessages(locale);

  switch (fieldName) {
    case "name":
      return messages.fields.name;
    case "email":
      return messages.fields.email;
    case "company":
      return messages.fields.company;
    case "message":
      return messages.fields.message;
    case "phone":
      return messages.fields.phone;
    case "inquiryType":
      return messages.fields.inquiryType;
    default:
      return fallbackLabel ?? fieldName;
  }
}
