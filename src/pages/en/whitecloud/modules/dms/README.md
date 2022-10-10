---
title: Whitecloud Services
layout: /src/layouts/MainLayout.astro
---



## Requirements

No requirements.

## Providers

The following providers are used by this module:

- <a name="provider_aws"></a> [aws](#provider\_aws)

- <a name="provider_time"></a> [time](#provider\_time)

## Resources

The following resources are used by this module:

- [aws_dms_endpoint.bi_pre](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/dms_endpoint) (resource)
- [aws_dms_endpoint.whitebox_dev](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/dms_endpoint) (resource)
- [aws_dms_endpoint.whitebox_dev_target](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/dms_endpoint) (resource)
- [aws_dms_endpoint.whitebox_sandbox](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/dms_endpoint) (resource)
- [aws_dms_endpoint.whitebox_test](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/dms_endpoint) (resource)
- [aws_dms_endpoint.whitebox_test_source](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/dms_endpoint) (resource)
- [aws_dms_endpoint.whitebox_uat](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/dms_endpoint) (resource)
- [aws_dms_replication_instance.main](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/dms_replication_instance) (resource)
- [aws_dms_replication_subnet_group.main](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/dms_replication_subnet_group) (resource)
- [aws_iam_role.dms_access_for_endpoint](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/iam_role) (resource)
- [aws_iam_role.dms_cloudwatch_logs_role](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/iam_role) (resource)
- [aws_iam_role.dms_vpc_role](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/iam_role) (resource)
- [aws_iam_role_policy.kms](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/iam_role_policy) (resource)
- [aws_iam_role_policy.secret](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/iam_role_policy) (resource)
- [aws_security_group.dms](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/security_group) (resource)
- [time_sleep.wait_for_dependency_resources](https://registry.terraform.io/providers/hashicorp/time/latest/docs/resources/sleep) (resource)
- [aws_caller_identity.current](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/caller_identity) (data source)
- [aws_iam_policy_document.dms_assume_role](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/iam_policy_document) (data source)
- [aws_iam_policy_document.dms_assume_role_redshift](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/iam_policy_document) (data source)
- [aws_iam_policy_document.kms](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/iam_policy_document) (data source)
- [aws_iam_policy_document.secret](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/iam_policy_document) (data source)
- [aws_partition.current](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/partition) (data source)
- [aws_region.current](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/region) (data source)
- [aws_secretsmanager_secret_version.bi_pre](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/secretsmanager_secret_version) (data source)
- [aws_secretsmanager_secret_version.dev_user](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/secretsmanager_secret_version) (data source)
- [aws_secretsmanager_secret_version.sandbox_user](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/secretsmanager_secret_version) (data source)
- [aws_secretsmanager_secret_version.test_user](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/secretsmanager_secret_version) (data source)
- [aws_secretsmanager_secret_version.uat_user](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/secretsmanager_secret_version) (data source)

## Modules

No modules.

## Required Inputs

The following input variables are required:

### <a name="input_availability_zone"></a> [availability\_zone](#input\_availability\_zone)

Description: AWS availability zone

Type: `string`

### <a name="input_instance_id"></a> [instance\_id](#input\_instance\_id)

Description: AWS DMS replication instance identifier

Type: `string`

### <a name="input_kms_key_arn"></a> [kms\_key\_arn](#input\_kms\_key\_arn)

Description: AWS KMS key ARN

Type: `string`

### <a name="input_security_groups"></a> [security\_groups](#input\_security\_groups)

Description: AWS IAM security groups

Type: `list(string)`

### <a name="input_subnet_ids"></a> [subnet\_ids](#input\_subnet\_ids)

Description: AWS VPC DB subnet group identifier

Type: `list(string)`

### <a name="input_vpc_id"></a> [vpc\_id](#input\_vpc\_id)

Description: AWS VPC identifier

Type: `string`

## Optional Inputs

The following input variables are optional (have default values):

### <a name="input_instance_class"></a> [instance\_class](#input\_instance\_class)

Description: AWS DMS replication instance class

Type: `string`

Default: `"dms.t2.micro"`

### <a name="input_maintenance_period"></a> [maintenance\_period](#input\_maintenance\_period)

Description: AWS KMS key ARN

Type: `string`

Default: `"sun:10:30-sun:14:30"`

### <a name="input_rds_ca_2019_root"></a> [rds\_ca\_2019\_root](#input\_rds\_ca\_2019\_root)

Description: RDS CA 2019 certificate

Type: `string`

Default: `"arn:aws:dms:eu-central-1:808264747527:cert:XSDLN2NNBJXZUAJFOH2NP42AJXQZ3E6ALKQIOAY"`

## Outputs

The following outputs are exported:

### <a name="output_instance_id"></a> [instance\_id](#output\_instance\_id)

Description: n/a



