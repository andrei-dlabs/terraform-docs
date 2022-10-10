---
title: Whitecloud Services
layout: /src/layouts/MainLayout.astro
---



## Requirements

No requirements.

## Providers

The following providers are used by this module:

- <a name="provider_aws"></a> [aws](#provider\_aws)

- <a name="provider_random"></a> [random](#provider\_random)

## Resources

The following resources are used by this module:

- [aws_db_instance.database](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/db_instance) (resource)
- [aws_secretsmanager_secret.postgres](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/secretsmanager_secret) (resource)
- [aws_secretsmanager_secret_rotation.postgres](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/secretsmanager_secret_rotation) (resource)
- [aws_secretsmanager_secret_version.postgres](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/secretsmanager_secret_version) (resource)
- [aws_security_group.db_internal](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/security_group) (resource)
- [aws_security_group.rotation_lambda](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/security_group) (resource)
- [aws_security_group.services](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/security_group) (resource)
- [random_password.initial](https://registry.terraform.io/providers/hashicorp/random/latest/docs/resources/password) (resource)
- [aws_caller_identity.current](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/caller_identity) (data source)
- [aws_partition.current](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/partition) (data source)
- [aws_rds_certificate.cert](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/rds_certificate) (data source)
- [aws_region.current](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/region) (data source)
- [aws_secretsmanager_secret_version.postgres](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/secretsmanager_secret_version) (data source)

## Modules

No modules.

## Required Inputs

The following input variables are required:

### <a name="input_allowed_cidr"></a> [allowed\_cidr](#input\_allowed\_cidr)

Description: IP address to allow connection to this database

Type: `list(string)`

### <a name="input_db_allocated_storage"></a> [db\_allocated\_storage](#input\_db\_allocated\_storage)

Description: AWS RDS allocated storage (database)

Type: `number`

### <a name="input_db_id"></a> [db\_id](#input\_db\_id)

Description: AWS RDS database identifier (without hyphens, only alphanumeric)

Type: `string`

### <a name="input_db_name"></a> [db\_name](#input\_db\_name)

Description: AWS RDS database name

Type: `string`

### <a name="input_db_subnet_group_name"></a> [db\_subnet\_group\_name](#input\_db\_subnet\_group\_name)

Description: Database subnet group name

Type: `string`

### <a name="input_kms_key_main_arn"></a> [kms\_key\_main\_arn](#input\_kms\_key\_main\_arn)

Description: Main ARN (Amazon Resource Name) for AWS KMS (Key Management Service)

Type: `string`

### <a name="input_lambda_rotation_arn"></a> [lambda\_rotation\_arn](#input\_lambda\_rotation\_arn)

Description: AWS Lambda application ARN (SecretsManagerRDSPostgreSQLRotationSingleUser)

Type: `string`

### <a name="input_multi_az"></a> [multi\_az](#input\_multi\_az)

Description: Enables multi AZ for database

Type: `bool`

### <a name="input_rds_monitoring_role_arn"></a> [rds\_monitoring\_role\_arn](#input\_rds\_monitoring\_role\_arn)

Description: RDS enhanced monitoring role

Type: `string`

### <a name="input_rds_parameter_group_name"></a> [rds\_parameter\_group\_name](#input\_rds\_parameter\_group\_name)

Description: RDS parameter groups with PostgreSQL settings

Type: `string`

### <a name="input_s3_store_bucket_id"></a> [s3\_store\_bucket\_id](#input\_s3\_store\_bucket\_id)

Description: AWS S3 bucket identifier to store RDS credentials

Type: `string`

### <a name="input_vpc_id"></a> [vpc\_id](#input\_vpc\_id)

Description: AWS VPC identifier

Type: `string`

## Optional Inputs

The following input variables are optional (have default values):

### <a name="input_db_instance_class"></a> [db\_instance\_class](#input\_db\_instance\_class)

Description: AWS RDS instance type (database)

Type: `string`

Default: `"db.t2.small"`

### <a name="input_db_port"></a> [db\_port](#input\_db\_port)

Description: AWS RDS port (database)

Type: `number`

Default: `5432`

### <a name="input_db_user"></a> [db\_user](#input\_db\_user)

Description: AWS RDS database name

Type: `string`

Default: `"dbadmin"`

### <a name="input_engine_version"></a> [engine\_version](#input\_engine\_version)

Description: PostgreSQL version

Type: `string`

Default: `"12"`

### <a name="input_rotation_type"></a> [rotation\_type](#input\_rotation\_type)

Description: Conducts an AWS SecretsManager secret rotation for RDS PostgreSQL using single user rotation scheme

Type: `string`

Default: `"single"`

## Outputs

The following outputs are exported:

### <a name="output_db_host"></a> [db\_host](#output\_db\_host)

Description: n/a

### <a name="output_db_initial_password"></a> [db\_initial\_password](#output\_db\_initial\_password)

Description: n/a

### <a name="output_db_internal_sg_id"></a> [db\_internal\_sg\_id](#output\_db\_internal\_sg\_id)

Description: n/a

### <a name="output_db_port"></a> [db\_port](#output\_db\_port)

Description: n/a

### <a name="output_rds_certificate"></a> [rds\_certificate](#output\_rds\_certificate)

Description: n/a

### <a name="output_rds_superuser_secret_id"></a> [rds\_superuser\_secret\_id](#output\_rds\_superuser\_secret\_id)

Description: n/a

### <a name="output_services_sg_id"></a> [services\_sg\_id](#output\_services\_sg\_id)

Description: n/a

### <a name="output_ssm_database_secret_arn"></a> [ssm\_database\_secret\_arn](#output\_ssm\_database\_secret\_arn)

Description: n/a

### <a name="output_ssm_database_secret_id"></a> [ssm\_database\_secret\_id](#output\_ssm\_database\_secret\_id)

Description: n/a


