---
title: Business Intelligence
layout: ../../layouts/MainLayout.astro
---

## Requirements

The following requirements are needed by this module:

- <a name="requirement_aws"></a> [aws](#requirement\_aws) (~> 4.8.0)

## Providers

The following providers are used by this module:

- <a name="provider_terraform"></a> [terraform](#provider\_terraform)

## Modules

The following Modules are called:

### <a name="module_compute"></a> [compute](#module\_compute)

Source: ./modules/compute

Version:

### <a name="module_deploy"></a> [deploy](#module\_deploy)

Source: ./modules/deploy

Version:

### <a name="module_rds"></a> [rds](#module\_rds)

Source: ./modules/rds

Version:

## Resources

The following resources are used by this module:

- [terraform_remote_state.wbservices](https://registry.terraform.io/providers/hashicorp/terraform/latest/docs/data-sources/remote_state) (data source)
- [terraform_remote_state.whitecloud](https://registry.terraform.io/providers/hashicorp/terraform/latest/docs/data-sources/remote_state) (data source)

## Required Inputs

No required inputs.

## Optional Inputs

The following input variables are optional (have default values):

### <a name="input_region"></a> [region](#input\_region)

Description: AWS Region

Type: `string`

Default: `"eu-central-1"`

## Outputs

The following outputs are exported:

### <a name="output_bi_db_credentials"></a> [bi\_db\_credentials](#output\_bi\_db\_credentials)

Description: Credentials for the admin user of the BI RDS instance

### <a name="output_bi_nlb_dns"></a> [bi\_nlb\_dns](#output\_bi\_nlb\_dns)

Description: Network Load Balancer DNS entry

### <a name="output_bi_ops_key_pair"></a> [bi\_ops\_key\_pair](#output\_bi\_ops\_key\_pair)

Description: Key pair used for the BI ops instances

### <a name="output_db_password"></a> [db\_password](#output\_db\_password)

Description: Admin password for the BI RDS instance

### <a name="output_db_username"></a> [db\_username](#output\_db\_username)

Description: Admin username for the BI RDS instance
