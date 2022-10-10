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

- [aws_ecs_service.aio](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/ecs_service) (resource)
- [aws_ecs_task_definition.aio](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/ecs_task_definition) (resource)
- [aws_efs_access_point.shared](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/efs_access_point) (resource)
- [aws_efs_file_system.shared](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/efs_file_system) (resource)
- [aws_efs_mount_target.mount](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/efs_mount_target) (resource)
- [aws_secretsmanager_secret.whitebox](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/secretsmanager_secret) (resource)
- [aws_secretsmanager_secret_version.whitebox](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/secretsmanager_secret_version) (resource)
- [aws_security_group.efs](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/security_group) (resource)
- [aws_security_group.whitebox](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/security_group) (resource)

## Modules

No modules.

## Required Inputs

The following input variables are required:

### <a name="input_ecs_cluster_id"></a> [ecs\_cluster\_id](#input\_ecs\_cluster\_id)

Description: AWS ECS cluster ID

Type: `string`

### <a name="input_ecs_desired_task_count"></a> [ecs\_desired\_task\_count](#input\_ecs\_desired\_task\_count)

Description: AWS ECS number of tasks to run per service

Type: `number`

### <a name="input_ecs_max_health_percent"></a> [ecs\_max\_health\_percent](#input\_ecs\_max\_health\_percent)

Description: AWS ECS maximum healthy percent

Type: `number`

### <a name="input_ecs_min_health_percent"></a> [ecs\_min\_health\_percent](#input\_ecs\_min\_health\_percent)

Description: AWS ECS minimum healthy percent

Type: `number`

### <a name="input_ecs_security_group_id"></a> [ecs\_security\_group\_id](#input\_ecs\_security\_group\_id)

Description: Security group for ECS

Type: `string`

### <a name="input_github_token_arn"></a> [github\_token\_arn](#input\_github\_token\_arn)

Description: Github credentials ARN

Type: `string`

### <a name="input_iam_execution_role_arn"></a> [iam\_execution\_role\_arn](#input\_iam\_execution\_role\_arn)

Description: AWS ECS task execution role ARN that ECS agent and Docker can assume

Type: `string`

### <a name="input_iam_task_role_arn"></a> [iam\_task\_role\_arn](#input\_iam\_task\_role\_arn)

Description: AWS IAM role ARN that allows your ECS task to make calls to other AWS services

Type: `string`

### <a name="input_kms_key_arn"></a> [kms\_key\_arn](#input\_kms\_key\_arn)

Description: AWS KMS key ARN for secrets

Type: `string`

### <a name="input_region"></a> [region](#input\_region)

Description: AWS Region

Type: `string`

### <a name="input_service_subnet_ids"></a> [service\_subnet\_ids](#input\_service\_subnet\_ids)

Description: Birdbox service subnets

Type: `list(string)`

### <a name="input_vpc_id"></a> [vpc\_id](#input\_vpc\_id)

Description: AWS VPC Identifier

Type: `string`

## Optional Inputs

The following input variables are optional (have default values):

### <a name="input_nginx_port"></a> [nginx\_port](#input\_nginx\_port)

Description: Whitbox AIO port for NGINX server

Type: `number`

Default: `3000`

## Outputs

No outputs.


