import type { SiteKey } from "@mulagroup/content-models";

import { getLeadOpsMessages } from "./messages";
import { LeadSubmissionError, submitInquiry } from "./submission";
import type { InquirySubmissionInput } from "./types";

function resolveRequestLocale(payload: unknown) {
  if (
    typeof payload === "object" &&
    payload !== null &&
    "context" in payload &&
    typeof payload.context === "object" &&
    payload.context !== null &&
    "locale" in payload.context &&
    payload.context.locale === "pl"
  ) {
    return "pl" as const;
  }

  return "en" as const;
}

export function createInquiryRouteHandler(siteKey: SiteKey) {
  return async function handleInquiryRequest(request: Request) {
    let payload: InquirySubmissionInput | undefined;

    try {
      payload = (await request.json()) as InquirySubmissionInput;
      const requestContext = {
        ...(request.headers.get("host") ? { hostLabel: request.headers.get("host") ?? "" } : {}),
        ...(request.headers.get("referer") ? { referrer: request.headers.get("referer") ?? "" } : {}),
        ...(request.headers.get("user-agent")
          ? { userAgent: request.headers.get("user-agent") ?? "" }
          : {}),
      };
      const result = await submitInquiry(siteKey, payload, {
        ...requestContext,
      });

      return Response.json(result.clientResponse, { status: 200 });
    } catch (error) {
      if (error instanceof LeadSubmissionError) {
        return Response.json(
          {
            message: error.message,
            ...(error.issues.length > 0 ? { issues: error.issues } : {}),
            ok: false,
          },
        { status: error.statusCode },
        );
      }

      const locale = resolveRequestLocale(payload);

      return Response.json(
        {
          message: getLeadOpsMessages(locale).errors.unexpected,
          ok: false,
        },
        { status: 500 },
      );
    }
  };
}
