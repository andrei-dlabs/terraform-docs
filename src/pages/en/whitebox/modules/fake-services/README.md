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

- [aws_cloudwatch_log_group.fake_services](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/cloudwatch_log_group) (resource)
- [aws_ecs_service.fake_address_service](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/ecs_service) (resource)
- [aws_ecs_service.fake_banking_service](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/ecs_service) (resource)
- [aws_ecs_service.fake_comm_service](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/ecs_service) (resource)
- [aws_ecs_service.fake_iban_service](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/ecs_service) (resource)
- [aws_ecs_service.fake_know_service](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/ecs_service) (resource)
- [aws_ecs_task_definition.fake_address](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/ecs_task_definition) (resource)
- [aws_ecs_task_definition.fake_banking](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/ecs_task_definition) (resource)
- [aws_ecs_task_definition.fake_comm](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/ecs_task_definition) (resource)
- [aws_ecs_task_definition.fake_iban](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/ecs_task_definition) (resource)
- [aws_ecs_task_definition.fake_know](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/ecs_task_definition) (resource)
- [aws_security_group.ecs_sg](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/security_group) (resource)
- [aws_security_group_rule.egress](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/security_group_rule) (resource)
- [aws_security_group_rule.fake_address_whitebox](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/security_group_rule) (resource)
- [aws_security_group_rule.fake_banking_whitebox](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/security_group_rule) (resource)
- [aws_security_group_rule.fake_comm_whitebox](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/security_group_rule) (resource)
- [aws_security_group_rule.fake_iban_whitebox](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/security_group_rule) (resource)
- [aws_security_group_rule.fake_know_whitebox](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/security_group_rule) (resource)
- [aws_service_discovery_service.address](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/service_discovery_service) (resource)
- [aws_service_discovery_service.banking](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/service_discovery_service) (resource)
- [aws_service_discovery_service.communication](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/service_discovery_service) (resource)
- [aws_service_discovery_service.iban](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/service_discovery_service) (resource)
- [aws_service_discovery_service.know](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/service_discovery_service) (resource)

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

### <a name="input_github_token_arn"></a> [github\_token\_arn](#input\_github\_token\_arn)

Description: AWS secret manager for github token

Type: `string`

### <a name="input_iam_execution_role_arn"></a> [iam\_execution\_role\_arn](#input\_iam\_execution\_role\_arn)

Description: AWS ECS task execution role ARN that ECS agent and Docker can assume

Type: `string`

### <a name="input_iam_task_role_arn"></a> [iam\_task\_role\_arn](#input\_iam\_task\_role\_arn)

Description: AWS IAM role ARN that allows your ECS task to make calls to other AWS services

Type: `string`

### <a name="input_kms_logs_key_arn"></a> [kms\_logs\_key\_arn](#input\_kms\_logs\_key\_arn)

Description: AWS KMS key ARN to encrypt log data

Type: `string`

### <a name="input_region"></a> [region](#input\_region)

Description: AWS Region

Type: `string`

### <a name="input_security_group_ids"></a> [security\_group\_ids](#input\_security\_group\_ids)

Description: AWS security group identifiers

Type: `list(string)`

### <a name="input_service_discovery_whitebox_id"></a> [service\_discovery\_whitebox\_id](#input\_service\_discovery\_whitebox\_id)

Description: Service Discovery for Whitebox applications

Type: `string`

### <a name="input_service_subnet_ids"></a> [service\_subnet\_ids](#input\_service\_subnet\_ids)

Description: Fake Services service subnets

Type: `list(string)`

### <a name="input_vpc_id"></a> [vpc\_id](#input\_vpc\_id)

Description: AWS VPC Identifier

Type: `string`

### <a name="input_whitebox_security_group"></a> [whitebox\_security\_group](#input\_whitebox\_security\_group)

Description: whitebox-core security group to allow requests

Type: `string`

## Optional Inputs

The following input variables are optional (have default values):

### <a name="input_fake_address"></a> [fake\_address](#input\_fake\_address)

Description: Fake address validation service information for health check

Type: `map(number)`

Default:

```json
{
  "interval": 30,
  "port": 8083,
  "timeout": 20
}
```

### <a name="input_fake_banking"></a> [fake\_banking](#input\_fake\_banking)

Description: Fake banking validation service information for health check

Type: `map(number)`

Default:

```json
{
  "interval": 30,
  "port": 4567,
  "timeout": 20
}
```

### <a name="input_fake_comm"></a> [fake\_comm](#input\_fake\_comm)

Description: Fake Communication Service information for health check

Type: `map(number)`

Default:

```json
{
  "interval": 30,
  "port": 8082,
  "timeout": 20
}
```

### <a name="input_fake_iban"></a> [fake\_iban](#input\_fake\_iban)

Description: Fake IBAN validation Service information for health check

Type: `map(number)`

Default:

```json
{
  "interval": 30,
  "port": 1234,
  "timeout": 20
}
```

### <a name="input_fake_know"></a> [fake\_know](#input\_fake\_know)

Description: Fake Know your Customer service information for health check

Type: `map(number)`

Default:

```json
{
  "interval": 30,
  "port": 8084,
  "timeout": 20
}
```

## Outputs

The following outputs are exported:

### <a name="output_security_group_id"></a> [security\_group\_id](#output\_security\_group\_id)

Description: n/a


