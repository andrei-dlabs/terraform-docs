---
title: Whitecloud Services
layout: /src/layouts/MainLayout.astro
---



## Requirements

No requirements.

## Providers

The following providers are used by this module:

- <a name="provider_aws"></a> [aws](#provider\_aws)

## Resources

The following resources are used by this module:

- [aws_guardduty_detector.guardduty](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/guardduty_detector) (resource)

## Modules

No modules.

## Required Inputs

No required inputs.

## Optional Inputs

The following input variables are optional (have default values):

### <a name="input_finding_publishing_frequency"></a> [finding\_publishing\_frequency](#input\_finding\_publishing\_frequency)

Description: The frequency of notifications sent for finding occurrences. If the detector is a GuardDuty member account, the value  
is determined by the GuardDuty master account and cannot be modified, otherwise it defaults to SIX\_HOURS.

For standalone and GuardDuty master accounts, it must be configured in Terraform to enable drift detection.  
Valid values for standalone and master accounts: FIFTEEN\_MINUTES, ONE\_HOUR, SIX\_HOURS."

For more information, see:  
https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_findings_cloudwatch.html#guardduty_findings_cloudwatch_notification_frequency

Type: `string`

Default: `"SIX_HOURS"`

## Outputs

No outputs.



