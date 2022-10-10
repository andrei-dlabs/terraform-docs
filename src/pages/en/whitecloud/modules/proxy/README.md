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

- [aws_cloudwatch_log_group.proxy](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/cloudwatch_log_group) (resource)
- [aws_ecs_service.squid](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/ecs_service) (resource)
- [aws_ecs_task_definition.squid](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/ecs_task_definition) (resource)
- [aws_service_discovery_private_dns_namespace.proxy](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/service_discovery_private_dns_namespace) (resource)
- [aws_service_discovery_service.proxy](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/service_discovery_service) (resource)

## Modules

No modules.

## Required Inputs

The following input variables are required:

### <a name="input_kms_logs_key"></a> [kms\_logs\_key](#input\_kms\_logs\_key)

Description: KMS key ARN for logs

Type: `string`

### <a name="input_region"></a> [region](#input\_region)

Description: VPC identifier

Type: `string`

### <a name="input_service_subnet_ids"></a> [service\_subnet\_ids](#input\_service\_subnet\_ids)

Description: Subnets to use for proxy server

Type: `list(string)`

### <a name="input_vpc_id"></a> [vpc\_id](#input\_vpc\_id)

Description: VPC identifier

Type: `string`

## Optional Inputs

The following input variables are optional (have default values):

### <a name="input_ecs"></a> [ecs](#input\_ecs)

Description: AWS ECS information

Type: `map(string)`

Default:

```json
{
  "cluster_id": null,
  "desired_tasks": 1,
  "max_health_percent": 100,
  "min_health_percent": 0,
  "security_group_id": null
}
```

### <a name="input_iam"></a> [iam](#input\_iam)

Description: AWS IAM ARNs

Type: `map(string)`

Default:

```json
{
  "execution_role_arn": null,
  "task_role_arn": null
}
```

## Outputs

No outputs.



