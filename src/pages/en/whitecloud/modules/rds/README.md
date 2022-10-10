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

- [aws_db_parameter_group.postgresql](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/db_parameter_group) (resource)
- [aws_iam_role.rds_enhanced_monitoring](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/iam_role) (resource)
- [aws_iam_role_policy_attachment.rds_enhanced_monitoring](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/iam_role_policy_attachment) (resource)
- [aws_iam_policy_document.rds_enhanced_monitoring](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/iam_policy_document) (data source)

## Modules

No modules.

## Required Inputs

No required inputs.

## Optional Inputs

The following input variables are optional (have default values):

### <a name="input_parameter_bgwriter_delay"></a> [parameter\_bgwriter\_delay](#input\_parameter\_bgwriter\_delay)

Description: n/a

Type: `string`

Default: `"50"`

### <a name="input_parameter_shared_preload_libraries"></a> [parameter\_shared\_preload\_libraries](#input\_parameter\_shared\_preload\_libraries)

Description: n/a

Type: `string`

Default: `"pg_stat_statements,pglogical,pgaudit"`

### <a name="input_parameter_vacuum_cost_limit"></a> [parameter\_vacuum\_cost\_limit](#input\_parameter\_vacuum\_cost\_limit)

Description: n/a

Type: `string`

Default: `"2000"`

### <a name="input_parameter_work_mem"></a> [parameter\_work\_mem](#input\_parameter\_work\_mem)

Description: n/a

Type: `string`

Default: `"{DBInstanceClassMemory/819200}"`

### <a name="input_pg_max_parallel_workers_per_gather"></a> [pg\_max\_parallel\_workers\_per\_gather](#input\_pg\_max\_parallel\_workers\_per\_gather)

Description: Map of Postges max\_parallel\_workers\_per\_gather

Type: `map(string)`

Default:

```json
{
  "db.m3.xlarge": "2",
  "db.m4.2xlarge": "4",
  "db.m4.4xlarge": "8",
  "db.m4.large": "1",
  "db.m4.xlarge": "2",
  "db.m5.2xlarge": "4",
  "db.m5.4xlarge": "8",
  "db.m5.large": "1",
  "db.m5.xlarge": "2",
  "db.r3.4xlarge": "8",
  "db.r4.2xlarge": "4",
  "db.r4.4xlarge": "8",
  "db.r4.large": "1",
  "db.r4.xlarge": "2",
  "db.r5.2xlarge": "4",
  "db.r5.4xlarge": "8",
  "db.r5.large": "1",
  "db.r5.xlarge": "2",
  "db.t2.large": "1",
  "db.t2.medium": "1",
  "db.t2.micro": "0",
  "db.t2.small": "0",
  "db.t2.xlarge": "2",
  "db.t3.large": "1",
  "db.t3.medium": "1",
  "db.t3.micro": "1",
  "db.t3.small": "1"
}
```

### <a name="input_pg_max_worker_processes"></a> [pg\_max\_worker\_processes](#input\_pg\_max\_worker\_processes)

Description: Map of Postges max\_worker\_processes

Type: `map(string)`

Default:

```json
{
  "db.m3.xlarge": "4",
  "db.m4.2xlarge": "8",
  "db.m4.4xlarge": "16",
  "db.m4.large": "2",
  "db.m4.xlarge": "4",
  "db.m5.2xlarge": "8",
  "db.m5.4xlarge": "16",
  "db.m5.large": "2",
  "db.m5.xlarge": "4",
  "db.r3.4xlarge": "16",
  "db.r4.2xlarge": "8",
  "db.r4.4xlarge": "16",
  "db.r4.large": "2",
  "db.r4.xlarge": "4",
  "db.r5.2xlarge": "8",
  "db.r5.4xlarge": "16",
  "db.r5.large": "2",
  "db.r5.xlarge": "4",
  "db.t2.large": "2",
  "db.t2.medium": "2",
  "db.t2.micro": "1",
  "db.t2.small": "1",
  "db.t2.xlarge": "4",
  "db.t3.large": "2",
  "db.t3.medium": "2",
  "db.t3.micro": "2",
  "db.t3.small": "2"
}
```

## Outputs

The following outputs are exported:

### <a name="output_enhanced_monitoring_arn"></a> [enhanced\_monitoring\_arn](#output\_enhanced\_monitoring\_arn)

Description: n/a

### <a name="output_parameter_group_name"></a> [parameter\_group\_name](#output\_parameter\_group\_name)

Description: n/a



