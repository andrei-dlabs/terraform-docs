---
title: Whitecloud Services
layout: /src/layouts/MainLayout.astro
---



## Requirements

The following requirements are needed by this module:

- <a name="requirement_aws"></a> [aws](#requirement\_aws) (~> 4.8.0)

- <a name="requirement_dns"></a> [dns](#requirement\_dns) (~> 3.2.3)

## Providers

The following providers are used by this module:

- <a name="provider_aws"></a> [aws](#provider\_aws) (4.8.0)

- <a name="provider_terraform"></a> [terraform](#provider\_terraform)

## Resources

The following resources are used by this module:

- [aws_availability_zones.available](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/availability_zones) (data source)
- [terraform_remote_state.shared](https://registry.terraform.io/providers/hashicorp/terraform/latest/docs/data-sources/remote_state) (data source)

## Modules

The following Modules are called:

### <a name="module_alb"></a> [alb](./modules/alb/README)

Source: ./modules/alb

Version:

### <a name="module_alb_internal"></a> [alb\_internal](./modules/internal_alb/README)

Source: ./modules/internal_alb

Version:

### <a name="module_database"></a> [database](./modules/rds/README)

Source: ./modules/rds

Version:

### <a name="module_ecs_dev"></a> [ecs\_dev](../ecs/README)

Source: ../ecs

Version:

### <a name="module_ecs_pre"></a> [ecs\_pre](../ecs/README)

Source: ../ecs

Version:

### <a name="module_ecs_prod"></a> [ecs\_prod](../ecs/README)

Source: ../ecs

Version:

### <a name="module_ecs_sandbox"></a> [ecs\_sandbox](../ecs/README)

Source: ../ecs

Version:

### <a name="module_ecs_test"></a> [ecs\_test](../ecs/README)

Source: ../ecs

Version:

### <a name="module_ecs_uat"></a> [ecs\_uat](../ecs/README)

Source: ../ecs

Version:

### <a name="module_efs"></a> [efs](./modules/efs/README)

Source: ./modules/efs

Version:

### <a name="module_elasticache"></a> [elasticache](./modules/elasticache/README)

Source: ./modules/elasticache

Version:

### <a name="module_flatex_nat"></a> [flatex\_nat](./modules/flatex_nat/README)

Source: ./modules/flatex_nat

Version:

### <a name="module_resource_groups"></a> [resource\_groups](./modules/resource-groups/README)

Source: ./modules/resource-groups

Version:

### <a name="module_vpc"></a> [vpc](terraform-aws-modules/vpc/aws/README)

Source: terraform-aws-modules/vpc/aws

Version:

### <a name="module_vpc_setup"></a> [vpc\_setup](./modules/vpc-setup/README)

Source: ./modules/vpc-setup

Version:

### <a name="module_whitebox_db"></a> [whitebox\_db](./modules/rds/README)

Source: ./modules/rds

Version:

## Required Inputs

The following input variables are required:

### <a name="input_ec_redis_users"></a> [ec\_redis\_users](#input\_ec\_redis\_users)

Description: Redis users to create and the keyspace access strings that they are provided

Type: `map(object({ keyspace : string }))`

### <a name="input_ecs_desired_tasks"></a> [ecs\_desired\_tasks](#input\_ecs\_desired\_tasks)

Description: AWS ECS desired tasks amount per service

Type: `number`

### <a name="input_ecs_max_health_percent"></a> [ecs\_max\_health\_percent](#input\_ecs\_max\_health\_percent)

Description: AWS ECS maximum healthy percent

Type: `number`

### <a name="input_ecs_min_health_percent"></a> [ecs\_min\_health\_percent](#input\_ecs\_min\_health\_percent)

Description: AWS ECS minimum healthy percent

Type: `number`

### <a name="input_github_token_arn"></a> [github\_token\_arn](#input\_github\_token\_arn)

Description: Github credentials ARN

Type: `string`

### <a name="input_hasura_hostname"></a> [hasura\_hostname](#input\_hasura\_hostname)

Description: Hostname for Hasura GraphQL engine

Type: `string`

### <a name="input_lambda_db_rotation_arn"></a> [lambda\_db\_rotation\_arn](#input\_lambda\_db\_rotation\_arn)

Description: AWS Lambda ARN for database rotation

Type: `string`

### <a name="input_vpc_prefix"></a> [vpc\_prefix](#input\_vpc\_prefix)

Description: CIDR blocks prefix

Type: `string`

### <a name="input_vpc_requester_destinations"></a> [vpc\_requester\_destinations](#input\_vpc\_requester\_destinations)

Description: AWS VPC peering CIDR destinations for Requester (env vpc)

Type: `list(string)`

## Optional Inputs

The following input variables are optional (have default values):

### <a name="input_ops_public_key"></a> [ops\_public\_key](#input\_ops\_public\_key)

Description: SSH public key for `ops` user

Type: `string`

Default: `null`

### <a name="input_region"></a> [region](#input\_region)

Description: n/a

Type: `string`

Default: `"eu-central-1"`

## Outputs

The following outputs are exported:

### <a name="output_alb_internal"></a> [alb\_internal](#output\_alb\_internal)

Description: AWS internal load balancer

### <a name="output_alb_public"></a> [alb\_public](#output\_alb\_public)

Description: AWS public load balancer

### <a name="output_bastion"></a> [bastion](#output\_bastion)

Description: Bastion information

### <a name="output_ecs"></a> [ecs](#output\_ecs)

Description: ECS clusters for each environment

### <a name="output_efs"></a> [efs](#output\_efs)

Description: EFS volume to share RDS CA certificate (to be migrated)

### <a name="output_elasticache"></a> [elasticache](#output\_elasticache)

Description: ElastiCache information

### <a name="output_kms"></a> [kms](#output\_kms)

Description: KMS keys used in Whitecloud

### <a name="output_rds"></a> [rds](#output\_rds)

Description: Shared database (temporal solution)

### <a name="output_route53"></a> [route53](#output\_route53)

Description: n/a

### <a name="output_vpc"></a> [vpc](#output\_vpc)

Description: VPC reusable attributes (id, cidr, subnets, route-tables, etc.)



