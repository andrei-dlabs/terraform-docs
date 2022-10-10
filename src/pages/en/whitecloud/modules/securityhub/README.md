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

- [aws_securityhub_account.whitecloud](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/securityhub_account) (resource)
- [aws_securityhub_finding_aggregator.whitecloud](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/securityhub_finding_aggregator) (resource)
- [aws_securityhub_standards_subscription.whitecloud](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/securityhub_standards_subscription) (resource)
- [aws_caller_identity.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/caller_identity) (data source)
- [aws_partition.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/partition) (data source)
- [aws_region.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/region) (data source)

## Modules

No modules.

## Required Inputs

No required inputs.

## Optional Inputs

The following input variables are optional (have default values):

### <a name="input_enabled_standards"></a> [enabled\_standards](#input\_enabled\_standards)

Description: A list of standards/rulesets to enable  
See https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/securityhub_standards_subscription#argument-reference  
The possible values are:
  - standards/aws-foundational-security-best-practices/v/1.0.0
  - ruleset/cis-aws-foundations-benchmark/v/1.2.0
  - standards/pci-dss/v/3.2.1

Type: `list(string)`

Default:

```json
[
  "ruleset/cis-aws-foundations-benchmark/v/1.2.0"
]
```

## Outputs

No outputs.



