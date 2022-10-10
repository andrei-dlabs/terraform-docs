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

- [aws_cloudtrail.multi_region](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/cloudtrail) (resource)
- [aws_cloudwatch_log_group.trail](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/cloudwatch_log_group) (resource)
- [aws_iam_role.cloudwatch](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/iam_role) (resource)
- [aws_iam_role_policy.cloudwatch](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/iam_role_policy) (resource)
- [aws_s3_bucket.activity](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket) (resource)
- [aws_s3_bucket_acl.activity](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_acl) (resource)
- [aws_s3_bucket_lifecycle_configuration.activity](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_lifecycle_configuration) (resource)
- [aws_s3_bucket_logging.server](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_logging) (resource)
- [aws_s3_bucket_policy.trail_bucket](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_policy) (resource)
- [aws_s3_bucket_public_access_block.activity](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_public_access_block) (resource)
- [aws_s3_bucket_server_side_encryption_configuration.activity](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_server_side_encryption_configuration) (resource)
- [aws_caller_identity.current](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/caller_identity) (data source)
- [aws_iam_policy_document.assume_role](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/iam_policy_document) (data source)
- [aws_iam_policy_document.cloudwatch](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/iam_policy_document) (data source)

## Modules

No modules.

## Required Inputs

The following input variables are required:

### <a name="input_kms_key_id"></a> [kms\_key\_id](#input\_kms\_key\_id)

Description: AWS KMS key identifier to encrypt S3 bucket

Type: `string`

### <a name="input_kms_logs_arn"></a> [kms\_logs\_arn](#input\_kms\_logs\_arn)

Description: AWS KMS key ARN to encrypt logs

Type: `string`

### <a name="input_s3_target_bucket_id"></a> [s3\_target\_bucket\_id](#input\_s3\_target\_bucket\_id)

Description: AWS S3 target bucket identifier

Type: `string`

## Optional Inputs

The following input variables are optional (have default values):

### <a name="input_s3_bucket_name"></a> [s3\_bucket\_name](#input\_s3\_bucket\_name)

Description: AWS S3 bucket name to store cloudtrail logs

Type: `string`

Default: `"whitecloud-global-trail"`

### <a name="input_s3_target_bucket_prefix"></a> [s3\_target\_bucket\_prefix](#input\_s3\_target\_bucket\_prefix)

Description: AWS S3 target bucket prefix used for logs

Type: `string`

Default: `"trails"`

### <a name="input_trail_name"></a> [trail\_name](#input\_trail\_name)

Description: AWS S3 bucket name to store cloudtrail logs

Type: `string`

Default: `"whitecloud-global-trail"`

## Outputs

The following outputs are exported:

### <a name="output_log_group_id"></a> [log\_group\_id](#output\_log\_group\_id)

Description: n/a



