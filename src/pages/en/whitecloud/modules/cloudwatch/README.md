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

- [aws_cloudwatch_log_group.flow_log](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/cloudwatch_log_group) (resource)
- [aws_cloudwatch_log_metric_filter.avoid_root](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/cloudwatch_log_metric_filter) (resource)
- [aws_cloudwatch_log_metric_filter.aws_config_change](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/cloudwatch_log_metric_filter) (resource)
- [aws_cloudwatch_log_metric_filter.cloudtrail_config_change](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/cloudwatch_log_metric_filter) (resource)
- [aws_cloudwatch_log_metric_filter.console_access_without_mfa](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/cloudwatch_log_metric_filter) (resource)
- [aws_cloudwatch_log_metric_filter.disable_or_delete_cmk](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/cloudwatch_log_metric_filter) (resource)
- [aws_cloudwatch_log_metric_filter.failed_console_login](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/cloudwatch_log_metric_filter) (resource)
- [aws_cloudwatch_log_metric_filter.iam_policy_change](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/cloudwatch_log_metric_filter) (resource)
- [aws_cloudwatch_log_metric_filter.nacl_change](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/cloudwatch_log_metric_filter) (resource)
- [aws_cloudwatch_log_metric_filter.network_gateway_change](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/cloudwatch_log_metric_filter) (resource)
- [aws_cloudwatch_log_metric_filter.root_access](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/cloudwatch_log_metric_filter) (resource)
- [aws_cloudwatch_log_metric_filter.route_table_change](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/cloudwatch_log_metric_filter) (resource)
- [aws_cloudwatch_log_metric_filter.s3_bucket_policy_change](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/cloudwatch_log_metric_filter) (resource)
- [aws_cloudwatch_log_metric_filter.security_group_change](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/cloudwatch_log_metric_filter) (resource)
- [aws_cloudwatch_log_metric_filter.unauthorized_api_calls](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/cloudwatch_log_metric_filter) (resource)
- [aws_cloudwatch_log_metric_filter.vpc_change](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/cloudwatch_log_metric_filter) (resource)
- [aws_cloudwatch_metric_alarm.avoid_root](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/cloudwatch_metric_alarm) (resource)
- [aws_cloudwatch_metric_alarm.aws_config_change](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/cloudwatch_metric_alarm) (resource)
- [aws_cloudwatch_metric_alarm.cloudtrail_config_change](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/cloudwatch_metric_alarm) (resource)
- [aws_cloudwatch_metric_alarm.console_access_without_mfa](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/cloudwatch_metric_alarm) (resource)
- [aws_cloudwatch_metric_alarm.disable_or_delete_cmk](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/cloudwatch_metric_alarm) (resource)
- [aws_cloudwatch_metric_alarm.failed_console_login](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/cloudwatch_metric_alarm) (resource)
- [aws_cloudwatch_metric_alarm.iam_policy_change](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/cloudwatch_metric_alarm) (resource)
- [aws_cloudwatch_metric_alarm.nacl_change](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/cloudwatch_metric_alarm) (resource)
- [aws_cloudwatch_metric_alarm.network_gateway_change](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/cloudwatch_metric_alarm) (resource)
- [aws_cloudwatch_metric_alarm.root_access](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/cloudwatch_metric_alarm) (resource)
- [aws_cloudwatch_metric_alarm.route_table_change](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/cloudwatch_metric_alarm) (resource)
- [aws_cloudwatch_metric_alarm.s3_bucket_policy_change](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/cloudwatch_metric_alarm) (resource)
- [aws_cloudwatch_metric_alarm.security_group_change](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/cloudwatch_metric_alarm) (resource)
- [aws_cloudwatch_metric_alarm.unauthorized_api_calls](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/cloudwatch_metric_alarm) (resource)
- [aws_cloudwatch_metric_alarm.vpc_change](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/cloudwatch_metric_alarm) (resource)
- [aws_flow_log.main](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/flow_log) (resource)
- [aws_iam_role.flow_log](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/iam_role) (resource)
- [aws_iam_role_policy.flow_log](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/iam_role_policy) (resource)

## Modules

No modules.

## Required Inputs

The following input variables are required:

### <a name="input_cloudtrail_log_group"></a> [cloudtrail\_log\_group](#input\_cloudtrail\_log\_group)

Description: AWS CloudWatch log group identifier

Type: `string`

### <a name="input_kms_logs_arn"></a> [kms\_logs\_arn](#input\_kms\_logs\_arn)

Description: AWS KMS Key ARN for logs

Type: `string`

### <a name="input_sns_topic_arn"></a> [sns\_topic\_arn](#input\_sns\_topic\_arn)

Description: AWS SNS topic ARN

Type: `string`

### <a name="input_vpc_id"></a> [vpc\_id](#input\_vpc\_id)

Description: Virtual Private Cloud identifier

Type: `string`

## Optional Inputs

The following input variables are optional (have default values):

### <a name="input_alarm_default_period"></a> [alarm\_default\_period](#input\_alarm\_default\_period)

Description: Default period for alarm

Type: `string`

Default: `"300"`

### <a name="input_metric_names"></a> [metric\_names](#input\_metric\_names)

Description: Metric names

Type: `map(string)`

Default:

```json
{
  "avoid-root": "whitecloud-avoid-root-metric",
  "aws-config": "whitecloud-aws-config-change",
  "cloudtrail": "whitecloud-cloudtrail-config-change",
  "console": "whitecloud-failed-console-login",
  "delete-cmk": "whitecloud-disable-or-delete-cmk",
  "nacl": "whitecloud-nacl-change",
  "network-gateway": "whitecloud-network-gateway-change",
  "policy-change": "whitecloud-iam-policy-change",
  "root": "whitecloud-root-access-metric",
  "route-table": "whitecloud-route-table-change",
  "s3-bucket": "whitecloud-s3-bucket-policy-change",
  "security-group": "whitecloud-security-group-change",
  "unauthorized": "whitecloud-unauthorized-api-calls-metric",
  "vpc": "whitecloud-vpc-change",
  "without-mfa": "whitecloud-without-mfa-metric"
}
```

### <a name="input_metric_namespace"></a> [metric\_namespace](#input\_metric\_namespace)

Description: Metric namespace

Type: `string`

Default: `"Whitecloud-CIS"`

## Outputs

No outputs.



