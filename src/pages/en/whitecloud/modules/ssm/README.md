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

- [aws_kms_alias.ssm](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/kms_alias) (resource)
- [aws_kms_key.ssm](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/kms_key) (resource)
- [aws_caller_identity.current](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/caller_identity) (data source)
- [aws_iam_policy_document.ssm_key](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/iam_policy_document) (data source)

## Modules

No modules.

## Required Inputs

The following input variables are required:

### <a name="input_alias"></a> [alias](#input\_alias)

Description: n/a

Type: `any`

### <a name="input_description"></a> [description](#input\_description)

Description: n/a

Type: `any`

### <a name="input_enabled"></a> [enabled](#input\_enabled)

Description: Enables SSM key

Type: `any`

## Optional Inputs

The following input variables are optional (have default values):

### <a name="input_key_spec"></a> [key\_spec](#input\_key\_spec)

Description: Options available SYMMETRIC\_DEFAULT, RSA\_2048, RSA\_3072, RSA\_4096, ECC\_NIST\_P256, ECC\_NIST\_P384, ECC\_NIST\_P521, or ECC\_SECG\_P256K1

Type: `string`

Default: `"SYMMETRIC_DEFAULT"`

### <a name="input_rotation_enabled"></a> [rotation\_enabled](#input\_rotation\_enabled)

Description: n/a

Type: `bool`

Default: `true`

## Outputs

The following outputs are exported:

### <a name="output_ssm_key_arn"></a> [ssm\_key\_arn](#output\_ssm\_key\_arn)

Description: n/a

### <a name="output_ssm_key_id"></a> [ssm\_key\_id](#output\_ssm\_key\_id)

Description: n/a



