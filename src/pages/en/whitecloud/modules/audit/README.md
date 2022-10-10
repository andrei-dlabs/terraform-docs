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

- [aws_s3_bucket.audit](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket) (resource)
- [aws_s3_bucket_acl.audit](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_acl) (resource)
- [aws_s3_bucket_lifecycle_configuration.audit](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_lifecycle_configuration) (resource)
- [aws_s3_bucket_notification.audit](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_notification) (resource)
- [aws_s3_bucket_public_access_block.audit](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_public_access_block) (resource)
- [aws_s3_bucket_server_side_encryption_configuration.audit](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_server_side_encryption_configuration) (resource)
- [aws_sns_topic.operations](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/sns_topic) (resource)
- [aws_sns_topic_subscription.devops](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/sns_topic_subscription) (resource)
- [aws_caller_identity.current](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/caller_identity) (data source)
- [aws_region.current](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/region) (data source)

## Modules

No modules.

## Required Inputs

The following input variables are required:

### <a name="input_kms_key_id"></a> [kms\_key\_id](#input\_kms\_key\_id)

Description: AWS KMS key identifier to encrypt Audit Manager logs

Type: `string`

## Optional Inputs

The following input variables are optional (have default values):

### <a name="input_admins_to_notify"></a> [admins\_to\_notify](#input\_admins\_to\_notify)

Description: List of email addresses to notify

Type: `list(string)`

Default:

```json
[
  "jon.arrien@whitebox-services.eu"
]
```

## Outputs

The following outputs are exported:

### <a name="output_s3_audit_bucket_id"></a> [s3\_audit\_bucket\_id](#output\_s3\_audit\_bucket\_id)

Description: n/a

### <a name="output_sns_ops_topic_arn"></a> [sns\_ops\_topic\_arn](#output\_sns\_ops\_topic\_arn)

Description: n/a



