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

- [aws_autoscaling_group.ecs_cluster_spot](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/autoscaling_group) (resource)
- [aws_autoscaling_policy.ecs_cluster_scale_policy](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/autoscaling_policy) (resource)
- [aws_ecs_account_setting_default.trunking](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/ecs_account_setting_default) (resource)
- [aws_ecs_cluster.whitecloud_ecs_cluster](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/ecs_cluster) (resource)
- [aws_iam_instance_profile.ec2_iam_instance_profile](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/iam_instance_profile) (resource)
- [aws_iam_policy.ecs_role_permissions](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/iam_policy) (resource)
- [aws_iam_policy_attachment.ecs_instance_role_policy_attachment](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/iam_policy_attachment) (resource)
- [aws_iam_role.ecs_role](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/iam_role) (resource)
- [aws_iam_role_policy_attachment.ecsTaskExecutionRole_policy](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/iam_role_policy_attachment) (resource)
- [aws_key_pair.ecs](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/key_pair) (resource)
- [aws_launch_configuration.ecs_config_launch_config_spot](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/launch_configuration) (resource)
- [aws_security_group.ecs_sg](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/security_group) (resource)
- [aws_security_group_rule.bastion](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/security_group_rule) (resource)
- [aws_security_group_rule.egress](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/security_group_rule) (resource)
- [aws_security_group_rule.hasura](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/security_group_rule) (resource)
- [aws_security_group_rule.http](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/security_group_rule) (resource)
- [aws_security_group_rule.https](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/security_group_rule) (resource)
- [aws_ami.ecs_latest](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/ami) (data source)
- [aws_caller_identity.current](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/caller_identity) (data source)
- [aws_iam_policy_document.ecs_instance_role_policy_doc](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/iam_policy_document) (data source)
- [aws_iam_policy_document.ecs_role_definition](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/iam_policy_document) (data source)
- [aws_partition.current](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/partition) (data source)
- [aws_region.current](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/region) (data source)
- [aws_secretsmanager_secret_version.github](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/secretsmanager_secret_version) (data source)

## Modules

No modules.

## Required Inputs

The following input variables are required:

### <a name="input_alb_security_groups"></a> [alb\_security\_groups](#input\_alb\_security\_groups)

Description: Load balancer security groups to allow HTTPS traffic

Type: `list(string)`

### <a name="input_allowed_ssh_cidr"></a> [allowed\_ssh\_cidr](#input\_allowed\_ssh\_cidr)

Description: CIDR block to allow SSH from (bastion\_ip/32)

Type: `list(string)`

### <a name="input_cluster_name"></a> [cluster\_name](#input\_cluster\_name)

Description: The name to use to create the cluster and the resources. Only alphanumeric characters and dash allowed (e.g. 'my-cluster')

Type: `any`

### <a name="input_kms_encrypt_arn"></a> [kms\_encrypt\_arn](#input\_kms\_encrypt\_arn)

Description: KMS key ARN to encrypt data

Type: `string`

### <a name="input_kms_logs_arn"></a> [kms\_logs\_arn](#input\_kms\_logs\_arn)

Description: KMS key ARN to encrypt loss

Type: `string`

### <a name="input_min_spot_instances"></a> [min\_spot\_instances](#input\_min\_spot\_instances)

Description: The minimum EC2 spot instances to have available within the cluster when the cluster receives less traffic

Type: `any`

### <a name="input_region"></a> [region](#input\_region)

Description: AWS Region

Type: `string`

### <a name="input_ssh_keys"></a> [ssh\_keys](#input\_ssh\_keys)

Description: Hash containing user=public\_key (key=value)

Type: `map(string)`

### <a name="input_subnet_ids"></a> [subnet\_ids](#input\_subnet\_ids)

Description: A list of subnet IDs to launch resources in. Subnets automatically determine which availability zones the group will reside.

Type: `list(string)`

### <a name="input_vpc_id"></a> [vpc\_id](#input\_vpc\_id)

Description: AWS VPC ID

Type: `string`

## Optional Inputs

The following input variables are optional (have default values):

### <a name="input_default_tags"></a> [default\_tags](#input\_default\_tags)

Description: A map of default tags used based on the module

Type: `map(string)`

Default:

```json
{
  "Disclaimer": "Managed through Terraform. Do not edit directly.",
  "Environment": "default",
  "Organisation": "whitebox",
  "Project": "whitecloud"
}
```

### <a name="input_instance_type_spot"></a> [instance\_type\_spot](#input\_instance\_type\_spot)

Description: AWS EC2 instance type for ECS spots (i.e. t2.small)

Type: `string`

Default: `"c5.xlarge"`

### <a name="input_max_spot_instances"></a> [max\_spot\_instances](#input\_max\_spot\_instances)

Description: The maximum EC2 spot instances that can be launched during period of high traffic

Type: `string`

Default: `"3"`

### <a name="input_newrelic_license_key"></a> [newrelic\_license\_key](#input\_newrelic\_license\_key)

Description: New Relic License Key

Type: `string`

Default: `"081121d6e930da0cacdf927fbe7847cc64c4f1d6"`

### <a name="input_spot_bid_price"></a> [spot\_bid\_price](#input\_spot\_bid\_price)

Description: How much you are willing to pay as an hourly rate for an EC2 instance, in USD

Type: `string`

Default: `"0.097"`

## Outputs

The following outputs are exported:

### <a name="output_cluster_id"></a> [cluster\_id](#output\_cluster\_id)

Description: n/a

### <a name="output_security_group_id"></a> [security\_group\_id](#output\_security\_group\_id)

Description: n/a

### <a name="output_service_role_arn"></a> [service\_role\_arn](#output\_service\_role\_arn)

Description: n/a

### <a name="output_task_role_arn"></a> [task\_role\_arn](#output\_task\_role\_arn)

Description: TODO: Split role in two roles


