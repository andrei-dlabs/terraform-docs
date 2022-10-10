---
title: Whitecloud Services
layout: /src/layouts/MainLayout.astro
---



## Requirements

No requirements.

## Providers

The following providers are used by this module:

- <a name="provider_aws"></a> [aws](#provider\_aws)

- <a name="provider_dns"></a> [dns](#provider\_dns)

- <a name="provider_random"></a> [random](#provider\_random)

## Resources

The following resources are used by this module:

- [aws_db_instance.database](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/db_instance) (resource)
- [aws_lb.external](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/lb) (resource)
- [aws_lb_listener.stitch](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/lb_listener) (resource)
- [aws_lb_listener.tableau](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/lb_listener) (resource)
- [aws_lb_target_group.nlb](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/lb_target_group) (resource)
- [aws_lb_target_group_attachment.nlb](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/lb_target_group_attachment) (resource)
- [aws_secretsmanager_secret.superuser](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/secretsmanager_secret) (resource)
- [aws_secretsmanager_secret.user](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/secretsmanager_secret) (resource)
- [aws_secretsmanager_secret_version.superuser](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/secretsmanager_secret_version) (resource)
- [aws_secretsmanager_secret_version.user](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/secretsmanager_secret_version) (resource)
- [aws_security_group.rds](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/security_group) (resource)
- [random_password.password](https://registry.terraform.io/providers/hashicorp/random/latest/docs/resources/password) (resource)
- [random_password.superuser_password](https://registry.terraform.io/providers/hashicorp/random/latest/docs/resources/password) (resource)
- [random_password.superuser_username](https://registry.terraform.io/providers/hashicorp/random/latest/docs/resources/password) (resource)
- [random_password.username](https://registry.terraform.io/providers/hashicorp/random/latest/docs/resources/password) (resource)
- [dns_a_record_set.rds](https://registry.terraform.io/providers/hashicorp/dns/latest/docs/data-sources/a_record_set) (data source)

## Modules

No modules.

## Required Inputs

The following input variables are required:

### <a name="input_bastion_cidrs"></a> [bastion\_cidrs](#input\_bastion\_cidrs)

Description: CIDR ranges of bastion instances

Type: `list(string)`

### <a name="input_kms_arn"></a> [kms\_arn](#input\_kms\_arn)

Description: ARN of the KMS key to use for encrypting storage

Type: `string`

### <a name="input_public_subnet_cidr_blocks"></a> [public\_subnet\_cidr\_blocks](#input\_public\_subnet\_cidr\_blocks)

Description: CIDR blocks of public subnets

Type: `list(string)`

### <a name="input_public_subnet_ids"></a> [public\_subnet\_ids](#input\_public\_subnet\_ids)

Description: IDs of the public subnets assigned to the VPC

Type: `list(string)`

### <a name="input_rds_monitoring_role_arn"></a> [rds\_monitoring\_role\_arn](#input\_rds\_monitoring\_role\_arn)

Description: RDS enhanced monitoring role

Type: `string`

### <a name="input_rds_parameter_group_name"></a> [rds\_parameter\_group\_name](#input\_rds\_parameter\_group\_name)

Description: RDS parameter groups with PostgreSQL settings

Type: `string`

### <a name="input_rds_subnet_group_name"></a> [rds\_subnet\_group\_name](#input\_rds\_subnet\_group\_name)

Description: Database subnet group name

Type: `string`

### <a name="input_services_sgs"></a> [services\_sgs](#input\_services\_sgs)

Description: Security groups of services that must be able to connect to the RDS instance

Type: `list(string)`

### <a name="input_vpc_id"></a> [vpc\_id](#input\_vpc\_id)

Description: ID of the VPC to which the resources are associated

Type: `string`

## Optional Inputs

No optional inputs.

## Outputs

The following outputs are exported:

### <a name="output_db_password"></a> [db\_password](#output\_db\_password)

Description: Admin password for the RDS instance

### <a name="output_db_username"></a> [db\_username](#output\_db\_username)

Description: Admin username for the RDS instance

### <a name="output_nlb_dns"></a> [nlb\_dns](#output\_nlb\_dns)

Description: Network Load Balancer DNS entry




# Business Intelligence RDS submodule

The RDS submodule for business intelligence (BI) is composed out of three main components:

1. An RDS database, configured using PostgreSQL 12, with backups enabled and a custom port
2. Security groups for enabling access into the database
3. A network load balancer (NLB), responsible for enabling traffic from the greater Internet, into the RDS instance

## Introduction

It is important to call out that since the BI module is only applied against `pre-production` and `production`,
consequently, this submodule will only ever be applied for those modules.

Most of the configuration of the module can be found in the `locals.tf` file, which provides an overview on the
configurations that have been applied for the submodule.

## Structure

This section contains information on the structure of the submodule, specifically the custom files that have been
created, as well as the order in which they should be read. All standard files (i.e. `variables.tf`, `output.tf`) are
considered standard knowledge, and have been explored in the sections below.

* *credentials.tf*
  * Responsible for generating random connection credentials for the PostgreSQL super-admin
  * This user must only be used for the initial connection towards the database - separate, regular users must be
    created via other means
* *instance.tf*
  * Responsible for creating the RDS instance that the BI team interacts with
  * Please note that the database is not multi-AZ, regardless of the workspace that this is applied on
  * Backup retention differs, depending on the workspace
* *nlb.tf*
  * Responsible for creating the Network Load Balancer, target group and listeners towards the RDS instance
  * Performs the private IP lookup for the RDS instance
* *locals.tf*
  * Defines the configuration options for the module - it is mainly split into `rds` and `nlb` (for the load balancer)

## Inputs

| Name                      | Description                                                                                                | Type         |
|---------------------------|------------------------------------------------------------------------------------------------------------|--------------|
| rds_subnet_group_name     | RDS subnet group name, used for placing DB instances                                                       | string       |
| rds_parameter_group_name  | RDS parameter group name, used for configuring the DB instance                                             | string       |
| rds_monitoring_role_arn   | RDS monitoring role ARN, used for enabling performance monitoring against the DB instance                  | string       |
| kms_arn                   | KMS key ARN, used for encrypting the data within the database                                              | string       |
| bastion_cidrs             | CIDR ranges of bastion instances, to enable access into the database                                       | list(string) |
| vpc_id                    | ID of the VPC to which the database will be associated to                                                  | string       |
| services_sgs              | Security groups of services that must be able to connect to the BI database                                | list(string) |
| public_subnet_ids         | IDs of public subnets, used for the deployment of the Network Load Balancer                                | list(string) |
| public_subnet_cidr_blocks | CIDR ranges of the public subnets, in order to enable RDS traffic from the Network Load Balancer instances | list(string) |

## Outputs

| Name        | Description                                             | Type   |
|-------------|---------------------------------------------------------|--------|
| db_username | Admin username for the RDS instance, generated randomly | string |
| db_password | Admin password for the RDS instance, generated randomly | string |
| nlb_dns     | DNS entry for the Network Load Balancer                 | string |

