---
title: Whitecloud Services
layout: /src/layouts/MainLayout.astro
---



## Requirements

The following requirements are needed by this module:

- <a name="requirement_aws"></a> [aws](#requirement\_aws) (~> 4.8.0)

## Providers

No providers.

## Resources

No resources.

## Modules

The following Modules are called:

### <a name="module_astrodocs"></a> [astrodocs](./modules/astrodocs/README)

Source: ./modules/astrodocs

Version:

### <a name="module_audit"></a> [audit](./modules/audit/README)

Source: ./modules/audit

Version:

### <a name="module_aws"></a> [aws](./modules/aws/README)

Source: ./modules/aws

Version:

### <a name="module_bi_codedeploy_storage"></a> [bi\_codedeploy\_storage](./modules/codedeploy-storage/README)

Source: ./modules/codedeploy-storage

Version:

### <a name="module_cert"></a> [cert](./modules/cert/README)

Source: ./modules/cert

Version:

### <a name="module_cloudfront-certs"></a> [cloudfront-certs](./modules/cloudfront-certs/README)

Source: ./modules/cloudfront-certs

Version:

### <a name="module_cloudtrail"></a> [cloudtrail](./modules/cloudtrail/README)

Source: ./modules/cloudtrail

Version:

### <a name="module_cloudwatch"></a> [cloudwatch](./modules/cloudwatch/README)

Source: ./modules/cloudwatch

Version:

### <a name="module_dms"></a> [dms](./modules/dms/README)

Source: ./modules/dms

Version:

### <a name="module_documentation"></a> [documentation](./modules/documentation/README)

Source: ./modules/documentation

Version:

### <a name="module_ecs"></a> [ecs](../ecs/README)

Source: ../ecs

Version:

### <a name="module_flatex_prod"></a> [flatex\_prod](./modules/flatex/README)

Source: ./modules/flatex

Version:

### <a name="module_flatex_uat"></a> [flatex\_uat](./modules/flatex/README)

Source: ./modules/flatex

Version:

### <a name="module_guardduty"></a> [guardduty](./modules/guardduty/README)

Source: ./modules/guardduty

Version:

### <a name="module_proxy"></a> [proxy](./modules/proxy/README)

Source: ./modules/proxy

Version:

### <a name="module_rails_assets"></a> [rails\_assets](./modules/rails-assets/README)

Source: ./modules/rails-assets

Version:

### <a name="module_rds"></a> [rds](./modules/rds/README)

Source: ./modules/rds

Version:

### <a name="module_resource_groups"></a> [resource\_groups](./modules/resource-groups/README)

Source: ./modules/resource-groups

Version:

### <a name="module_securityhub"></a> [securityhub](./modules/securityhub/README)

Source: ./modules/securityhub

Version:

### <a name="module_ssm"></a> [ssm](./modules/ssm/README)

Source: ./modules/ssm

Version:

### <a name="module_state"></a> [state](./modules/state/README)

Source: ./modules/state

Version:

### <a name="module_vpn"></a> [vpn](./modules/vpn/README)

Source: ./modules/vpn

Version:

### <a name="module_whitecloud"></a> [whitecloud](./modules/whitecloud/README)

Source: ./modules/whitecloud

Version:

## Required Inputs

The following input variables are required:

### <a name="input_initial_deploy_keys"></a> [initial\_deploy\_keys](#input\_initial\_deploy\_keys)

Description: n/a

Type: `list(string)`

### <a name="input_initial_ssh_keys"></a> [initial\_ssh\_keys](#input\_initial\_ssh\_keys)

Description: n/a

Type: `map(string)`

### <a name="input_internal_hosted_zone"></a> [internal\_hosted\_zone](#input\_internal\_hosted\_zone)

Description: n/a

Type: `string`

### <a name="input_ops_public_key"></a> [ops\_public\_key](#input\_ops\_public\_key)

Description: SSH public key for `ops` user

Type: `string`

## Optional Inputs

The following input variables are optional (have default values):

### <a name="input_region"></a> [region](#input\_region)

Description: n/a

Type: `string`

Default: `"eu-central-1"`

## Outputs

The following outputs are exported:

### <a name="output_acm_certificate_arn"></a> [acm\_certificate\_arn](#output\_acm\_certificate\_arn)

Description: n/a

### <a name="output_assets_read_iam_credentials"></a> [assets\_read\_iam\_credentials](#output\_assets\_read\_iam\_credentials)

Description: Credentials used by the read assets bucket IAM user

### <a name="output_assets_readwrite_iam_credentials"></a> [assets\_readwrite\_iam\_credentials](#output\_assets\_readwrite\_iam\_credentials)

Description: Credentials used by the read-write assets bucket IAM user

### <a name="output_astrodocs_cf_s3"></a> [astrodocs\_cf\_s3](#output\_astrodocs\_cf\_s3)

Description: Details for Astrodocs cloudfront/s3

### <a name="output_bastion"></a> [bastion](#output\_bastion)

Description: n/a

### <a name="output_bastion_cidr"></a> [bastion\_cidr](#output\_bastion\_cidr)

Description: DEPRECATED: Use `bastion`

### <a name="output_bastion_private_ip"></a> [bastion\_private\_ip](#output\_bastion\_private\_ip)

Description: DEPRECATED: Use `bastion`

### <a name="output_bi_ops_s3_arn"></a> [bi\_ops\_s3\_arn](#output\_bi\_ops\_s3\_arn)

Description: ARN of the S3 bucket used for code storage of BI operations

### <a name="output_bi_ops_s3_name"></a> [bi\_ops\_s3\_name](#output\_bi\_ops\_s3\_name)

Description: Name of the S3 bucket used for code storage

### <a name="output_cloudfront_cert"></a> [cloudfront\_cert](#output\_cloudfront\_cert)

Description: Details for Cloudfront certificate

### <a name="output_db_subnet_name"></a> [db\_subnet\_name](#output\_db\_subnet\_name)

Description: n/a

### <a name="output_dms"></a> [dms](#output\_dms)

Description: n/a

### <a name="output_documentation_readwrite_iam_credentials"></a> [documentation\_readwrite\_iam\_credentials](#output\_documentation\_readwrite\_iam\_credentials)

Description: Credentials used by the read-write documentation bucket IAM user

### <a name="output_internal"></a> [internal](#output\_internal)

Description: n/a

### <a name="output_kms_key_arn"></a> [kms\_key\_arn](#output\_kms\_key\_arn)

Description: n/a

### <a name="output_kms_logs_arn"></a> [kms\_logs\_arn](#output\_kms\_logs\_arn)

Description: n/a

### <a name="output_lambda_arn"></a> [lambda\_arn](#output\_lambda\_arn)

Description: Details for Cloudfront certificate

### <a name="output_private_subnet_ids"></a> [private\_subnet\_ids](#output\_private\_subnet\_ids)

Description: n/a

### <a name="output_public_subnet_ids"></a> [public\_subnet\_ids](#output\_public\_subnet\_ids)

Description: n/a

### <a name="output_rds_monitoring_arn"></a> [rds\_monitoring\_arn](#output\_rds\_monitoring\_arn)

Description: n/a

### <a name="output_rds_parameter_group_name"></a> [rds\_parameter\_group\_name](#output\_rds\_parameter\_group\_name)

Description: n/a

### <a name="output_route53_hosted_zone_fqdns"></a> [route53\_hosted\_zone\_fqdns](#output\_route53\_hosted\_zone\_fqdns)

Description: n/a

### <a name="output_route53_zone_ids"></a> [route53\_zone\_ids](#output\_route53\_zone\_ids)

Description: TODO: Return corresponding zones when available

### <a name="output_route_tables"></a> [route\_tables](#output\_route\_tables)

Description: n/a

### <a name="output_s3_store_bucket_id"></a> [s3\_store\_bucket\_id](#output\_s3\_store\_bucket\_id)

Description: n/a

### <a name="output_ssh_public_keys"></a> [ssh\_public\_keys](#output\_ssh\_public\_keys)

Description: n/a

### <a name="output_transit_gateway_ids"></a> [transit\_gateway\_ids](#output\_transit\_gateway\_ids)

Description: Transit gateway identifiers used to reach Flatex network

### <a name="output_transit_gateway_route_tables"></a> [transit\_gateway\_route\_tables](#output\_transit\_gateway\_route\_tables)

Description: Transit gateway route tables identifiers used to reach Flatex network

### <a name="output_transit_gateways"></a> [transit\_gateways](#output\_transit\_gateways)

Description: Transit gateways used to reach Flatex network

### <a name="output_vpc_id"></a> [vpc\_id](#output\_vpc\_id)

Description: n/a



