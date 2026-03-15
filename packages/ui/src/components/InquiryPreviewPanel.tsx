import type { InquiryPreview } from "@mulagroup/content-models";

import { Card } from "./Card";
import { Input } from "./Input";
import { Label } from "./Label";
import { Select } from "./Select";
import { Textarea } from "./Textarea";

type InquiryPreviewPanelProps = {
  contactEmail?: string;
  formIdPrefix: string;
  hostLabel: string;
  inquiry: InquiryPreview;
};

export function InquiryPreviewPanel({
  contactEmail = "contact@mulagroup.eu",
  formIdPrefix,
  hostLabel,
  inquiry,
}: InquiryPreviewPanelProps) {
  return (
    <Card>
      <div className="space-y-6">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
            {inquiry.buttonLabel}
          </p>
          <h3 className="text-2xl font-semibold tracking-tight text-white">{inquiry.title}</h3>
          <p className="text-sm leading-7 text-slate-300">{inquiry.description}</p>
        </div>

        <form className="space-y-5" data-form={`${formIdPrefix}-intake`}>
          <fieldset className="space-y-5 opacity-70" disabled>
            <div>
              <Label htmlFor={`${formIdPrefix}-name`}>{inquiry.fields.nameLabel}</Label>
              <Input id={`${formIdPrefix}-name`} placeholder={inquiry.fields.namePlaceholder} />
            </div>
            {inquiry.fields.companyLabel && inquiry.fields.companyPlaceholder ? (
              <div>
                <Label htmlFor={`${formIdPrefix}-company`}>{inquiry.fields.companyLabel}</Label>
                <Input
                  id={`${formIdPrefix}-company`}
                  placeholder={inquiry.fields.companyPlaceholder}
                />
              </div>
            ) : null}
            <div>
              <Label htmlFor={`${formIdPrefix}-email`}>{inquiry.fields.emailLabel}</Label>
              <Input
                id={`${formIdPrefix}-email`}
                placeholder={inquiry.fields.emailPlaceholder}
                type="email"
              />
            </div>
            {inquiry.fields.inquiryTypeLabel && inquiry.fields.inquiryTypeOptions ? (
              <div>
                <Label htmlFor={`${formIdPrefix}-inquiry-type`}>
                  {inquiry.fields.inquiryTypeLabel}
                </Label>
                <Select defaultValue="" id={`${formIdPrefix}-inquiry-type`}>
                  <option value="">Select the closest fit</option>
                  {inquiry.fields.inquiryTypeOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </Select>
              </div>
            ) : null}
            <div>
              <Label htmlFor={`${formIdPrefix}-message`}>{inquiry.fields.messageLabel}</Label>
              <Textarea
                id={`${formIdPrefix}-message`}
                placeholder={inquiry.fields.messagePlaceholder}
              />
            </div>
          </fieldset>
        </form>

        <p className="border-t border-white/8 pt-5 text-sm leading-7 text-slate-400">
          {inquiry.note}
        </p>
        <div className="flex flex-wrap gap-3 text-sm text-slate-400">
          <a className="hover:text-white" href={`mailto:${contactEmail}`}>
            {contactEmail}
          </a>
          <span>{hostLabel}</span>
        </div>
      </div>
    </Card>
  );
}
