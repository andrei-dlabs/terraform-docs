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

- [aws_alb.main](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/alb) (resource)
- [aws_alb_listener.http](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/alb_listener) (resource)
- [aws_alb_listener.https](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/alb_listener) (resource)
- [aws_alb_target_group.https](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/alb_target_group) (resource)
- [aws_s3_bucket.alb_logs](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket) (resource)
- [aws_s3_bucket_acl.alb_logs](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_acl) (resource)
- [aws_s3_bucket_lifecycle_configuration.alb_logs](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_lifecycle_configuration) (resource)
- [aws_s3_bucket_policy.alb_log_policy](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_policy) (resource)
- [aws_s3_bucket_public_access_block.alb_logs](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_public_access_block) (resource)
- [aws_security_group.alb](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/security_group) (resource)
- [aws_caller_identity.current](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/caller_identity) (data source)
- [aws_elb_service_account.default](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/elb_service_account) (data source)
- [aws_iam_policy_document.allow_s3_write](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/iam_policy_document) (data source)

## Modules

No modules.

## Required Inputs

The following input variables are required:

### <a name="input_acm_certificate_arn"></a> [acm\_certificate\_arn](#input\_acm\_certificate\_arn)

Description: AWS ACM certificate ARN

Type: `string`

### <a name="input_allowed_cidr_blocks"></a> [allowed\_cidr\_blocks](#input\_allowed\_cidr\_blocks)

Description: Allowed CIDR blocks for ALB

Type: `list(string)`

### <a name="input_kms_key_arn"></a> [kms\_key\_arn](#input\_kms\_key\_arn)

Description: AWS KMS key identifier to encrypt load balancer logs

Type: `string`

### <a name="input_public_subnet_ids"></a> [public\_subnet\_ids](#input\_public\_subnet\_ids)

Description: Public subnet identifiers

Type: `list(string)`

### <a name="input_vpc_id"></a> [vpc\_id](#input\_vpc\_id)

Description: AWS VPC ID

Type: `string`

## Optional Inputs

No optional inputs.

## Outputs

The following outputs are exported:

### <a name="output_dns_name"></a> [dns\_name](#output\_dns\_name)

Description: n/a

### <a name="output_https_listener_arn"></a> [https\_listener\_arn](#output\_https\_listener\_arn)

Description: n/a

### <a name="output_main_lb"></a> [main\_lb](#output\_main\_lb)

Description: n/a

### <a name="output_security_group_id"></a> [security\_group\_id](#output\_security\_group\_id)

Description: n/a

### <a name="output_zone_id"></a> [zone\_id](#output\_zone\_id)

Description: n/a


