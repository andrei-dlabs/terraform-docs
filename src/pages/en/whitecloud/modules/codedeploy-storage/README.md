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

- [aws_iam_policy.readwrite](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/iam_policy) (resource)
- [aws_iam_user_policy_attachment.s3_readwrite](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/iam_user_policy_attachment) (resource)
- [aws_s3_bucket.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket) (resource)
- [aws_s3_bucket_acl.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_acl) (resource)
- [aws_s3_bucket_public_access_block.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_public_access_block) (resource)
- [aws_s3_bucket_server_side_encryption_configuration.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_server_side_encryption_configuration) (resource)
- [aws_s3_bucket_versioning.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_versioning) (resource)
- [aws_iam_policy_document.readwrite](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/iam_policy_document) (data source)

## Modules

No modules.

## Required Inputs

The following input variables are required:

### <a name="input_bucket_name"></a> [bucket\_name](#input\_bucket\_name)

Description: Bucket name for storing code

Type: `string`

### <a name="input_iam_user_name"></a> [iam\_user\_name](#input\_iam\_user\_name)

Description: Name of the user to feature read-write permissions on the bucket

Type: `string`

### <a name="input_kms_arn"></a> [kms\_arn](#input\_kms\_arn)

Description: ARN of the KMS key used in order to encrypt the bucket contents

Type: `string`

### <a name="input_project_name"></a> [project\_name](#input\_project\_name)

Description: Name of the project for which the source code is stored

Type: `string`

## Optional Inputs

No optional inputs.

## Outputs

The following outputs are exported:

### <a name="output_s3_arn"></a> [s3\_arn](#output\_s3\_arn)

Description: ARN of the S3 bucket used for code storage

### <a name="output_s3_name"></a> [s3\_name](#output\_s3\_name)

Description: Name of the S3 bucket used for code storage



