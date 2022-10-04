---
title: Birdbox
layout: ../../layouts/MainLayout.astro
---

## Requirements

The following requirements are needed by this module:

- <a name="requirement_aws"></a> [aws](#requirement\_aws) (~> 4.8.0)

## Providers

The following providers are used by this module:

- <a name="provider_aws"></a> [aws](#provider\_aws) (~> 4.8.0)

- <a name="provider_random"></a> [random](#provider\_random)

- <a name="provider_terraform"></a> [terraform](#provider\_terraform)

## Modules

No modules.

## Resources

The following resources are used by this module:

- [aws_alb_listener_rule.birdbox](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/alb_listener_rule) (resource)
- [aws_alb_target_group.hasura](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/alb_target_group) (resource)
- [aws_cloudwatch_log_group.hasura](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/cloudwatch_log_group) (resource)
- [aws_ecs_service.birdbox_service](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/ecs_service) (resource)
- [aws_ecs_task_definition.hasura](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/ecs_task_definition) (resource)
- [aws_route53_record.hasura](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/route53_record) (resource)
- [aws_secretsmanager_secret.hasura](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/secretsmanager_secret) (resource)
- [aws_secretsmanager_secret.jwt_secret](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/secretsmanager_secret) (resource)
- [aws_secretsmanager_secret_version.hasura](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/secretsmanager_secret_version) (resource)
- [aws_security_group.ecs_sg](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/security_group) (resource)
- [aws_security_group_rule.egress](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/security_group_rule) (resource)
- [random_password.hasura](https://registry.terraform.io/providers/hashicorp/random/latest/docs/resources/password) (resource)
- [aws_secretsmanager_secret_version.db_user](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/secretsmanager_secret_version) (data source)
- [aws_secretsmanager_secret_version.jwt_secret](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/secretsmanager_secret_version) (data source)
- [terraform_remote_state.shared](https://registry.terraform.io/providers/hashicorp/terraform/latest/docs/data-sources/remote_state) (data source)

## Required Inputs

The following input variables are required:

### <a name="input_acm_certificate_arn"></a> [acm\_certificate\_arn](#input\_acm\_certificate\_arn)

Description: AWS ACM certificate ARN

Type: `string`

### <a name="input_aws_route53_zone_base_fqdn"></a> [aws\_route53\_zone\_base\_fqdn](#input\_aws\_route53\_zone\_base\_fqdn)

Description: AWS Route 53 zone base FQDN

Type: `string`

### <a name="input_aws_route53_zone_id"></a> [aws\_route53\_zone\_id](#input\_aws\_route53\_zone\_id)

Description: AWS Route 53 zone identifier

Type: `string`

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

### <a name="input_hasura_hostname"></a> [hasura\_hostname](#input\_hasura\_hostname)

Description: Hasura GraphQL engine FQDN

Type: `string`

### <a name="input_kms_encrypt_key_arn"></a> [kms\_encrypt\_key\_arn](#input\_kms\_encrypt\_key\_arn)

Description: AWS KMS key ARN to encrypt log data

Type: `string`

### <a name="input_kms_logs_key_arn"></a> [kms\_logs\_key\_arn](#input\_kms\_logs\_key\_arn)

Description: AWS KMS key ARN to encrypt log data

Type: `string`

### <a name="input_rds_user_secret_arn"></a> [rds\_user\_secret\_arn](#input\_rds\_user\_secret\_arn)

Description: RDS application user's secret ARN

Type: `string`

### <a name="input_rds_user_secret_name"></a> [rds\_user\_secret\_name](#input\_rds\_user\_secret\_name)

Description: RDS application user's secret identifier

Type: `string`

## Optional Inputs

The following input variables are optional (have default values):

### <a name="input_hasura"></a> [hasura](#input\_hasura)

Description: Hasura service information for health check

Type: `map(number)`

Default:

```json
{
  "interval": 30,
  "port": 8080,
  "timeout": 20
}
```

### <a name="input_region"></a> [region](#input\_region)

Description: AWS Region

Type: `string`

Default: `"eu-central-1"`

## Outputs

No outputs.
