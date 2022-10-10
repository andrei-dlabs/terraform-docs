---
title: Whitecloud Services
layout: /src/layouts/MainLayout.astro
---



## Requirements

No requirements.

## Providers

The following providers are used by this module:

- <a name="provider_aws"></a> [aws](#provider\_aws)

- <a name="provider_aws.east"></a> [aws.east](#provider\_aws.east)

- <a name="provider_local"></a> [local](#provider\_local)

## Resources

The following resources are used by this module:

- [aws_db_subnet_group.database](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/db_subnet_group) (resource)
- [aws_default_network_acl.default](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/default_network_acl) (resource)
- [aws_default_route_table.nat_gateway](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/default_route_table) (resource)
- [aws_default_security_group.default](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/default_security_group) (resource)
- [aws_egress_only_internet_gateway.nat_gateway](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/egress_only_internet_gateway) (resource)
- [aws_eip.nat](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/eip) (resource)
- [aws_iam_instance_profile.bastion](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/iam_instance_profile) (resource)
- [aws_iam_role.bastion](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/iam_role) (resource)
- [aws_iam_role_policy.bastion](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/iam_role_policy) (resource)
- [aws_instance.bastion](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/instance) (resource)
- [aws_internet_gateway.nat_gateway](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/internet_gateway) (resource)
- [aws_kms_alias.dnssec](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/kms_alias) (resource)
- [aws_kms_alias.logs](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/kms_alias) (resource)
- [aws_kms_alias.main](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/kms_alias) (resource)
- [aws_kms_key.dnssec_key](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/kms_key) (resource)
- [aws_kms_key.logs](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/kms_key) (resource)
- [aws_kms_key.main](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/kms_key) (resource)
- [aws_nat_gateway.nat_gateway](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/nat_gateway) (resource)
- [aws_network_acl.database](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/network_acl) (resource)
- [aws_network_acl.flatex](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/network_acl) (resource)
- [aws_network_acl.private](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/network_acl) (resource)
- [aws_network_acl.public](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/network_acl) (resource)
- [aws_route.egress](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/route) (resource)
- [aws_route.private](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/route) (resource)
- [aws_route53_hosted_zone_dnssec.main](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/route53_hosted_zone_dnssec) (resource)
- [aws_route53_key_signing_key.main](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/route53_key_signing_key) (resource)
- [aws_route53_record.bastion](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/route53_record) (resource)
- [aws_route53_zone.main](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/route53_zone) (resource)
- [aws_route53_zone.whitecloud](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/route53_zone) (resource)
- [aws_route_table.database](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/route_table) (resource)
- [aws_route_table.flatex](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/route_table) (resource)
- [aws_route_table.private](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/route_table) (resource)
- [aws_route_table.public](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/route_table) (resource)
- [aws_route_table_association.database](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/route_table_association) (resource)
- [aws_route_table_association.flatex](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/route_table_association) (resource)
- [aws_route_table_association.private](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/route_table_association) (resource)
- [aws_route_table_association.public](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/route_table_association) (resource)
- [aws_s3_bucket.whitecloud_store](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket) (resource)
- [aws_s3_bucket_acl.whitecloud_store](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_acl) (resource)
- [aws_s3_bucket_public_access_block.whitecloud_store](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_public_access_block) (resource)
- [aws_security_group.bastion](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/security_group) (resource)
- [aws_security_group.vpc](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/security_group) (resource)
- [aws_service_discovery_private_dns_namespace.whitecloud](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/service_discovery_private_dns_namespace) (resource)
- [aws_subnet.database_a](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/subnet) (resource)
- [aws_subnet.database_b](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/subnet) (resource)
- [aws_subnet.internal_flatex](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/subnet) (resource)
- [aws_subnet.public_az](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/subnet) (resource)
- [aws_subnet.subnet_az](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/subnet) (resource)
- [aws_vpc.main](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/vpc) (resource)
- [aws_vpc_endpoint.ec2](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/vpc_endpoint) (resource)
- [aws_vpc_endpoint.ecs](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/vpc_endpoint) (resource)
- [aws_vpc_endpoint.secretsmanager](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/vpc_endpoint) (resource)
- [aws_ami.ubuntu](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/ami) (data source)
- [aws_availability_zones.available](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/availability_zones) (data source)
- [aws_caller_identity.current](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/caller_identity) (data source)
- [aws_iam_policy_document.bastion_policy](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/iam_policy_document) (data source)
- [aws_iam_policy_document.bastion_role](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/iam_policy_document) (data source)
- [aws_iam_policy_document.cloudwatch](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/iam_policy_document) (data source)
- [aws_partition.current](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/partition) (data source)
- [aws_region.current](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/region) (data source)
- [local_file.sshd_config](https://registry.terraform.io/providers/hashicorp/local/latest/docs/data-sources/file) (data source)

## Modules

No modules.

## Required Inputs

The following input variables are required:

### <a name="input_app_name"></a> [app\_name](#input\_app\_name)

Description: Name of the application

Type: `string`

### <a name="input_bastion_deploy_keys"></a> [bastion\_deploy\_keys](#input\_bastion\_deploy\_keys)

Description: Allowed public SSH keys to connect bastion

Type: `list(string)`

### <a name="input_bastion_ssh_keys"></a> [bastion\_ssh\_keys](#input\_bastion\_ssh\_keys)

Description: n/a

Type: `map(any)`

### <a name="input_environment"></a> [environment](#input\_environment)

Description: The environment against which the resource is created

Type: `string`

### <a name="input_org_name"></a> [org\_name](#input\_org\_name)

Description: Name of the organisation

Type: `string`

### <a name="input_region"></a> [region](#input\_region)

Description: AWS Region

Type: `string`

### <a name="input_whitecloud_fqdn"></a> [whitecloud\_fqdn](#input\_whitecloud\_fqdn)

Description: Whitecloud FQDN

Type: `string`

## Optional Inputs

The following input variables are optional (have default values):

### <a name="input_db_subnet_cidr_block"></a> [db\_subnet\_cidr\_block](#input\_db\_subnet\_cidr\_block)

Description: Whitecloud database subnet CIDR blocks

Type: `list(string)`

Default:

```json
[
  "10.42.1.0/24",
  "10.42.2.0/24"
]
```

### <a name="input_default_availability_zone"></a> [default\_availability\_zone](#input\_default\_availability\_zone)

Description: AWS Availability Zone

Type: `string`

Default: `"eu-central-1a"`

### <a name="input_route53_zones"></a> [route53\_zones](#input\_route53\_zones)

Description: AWS Route53 hosted zones FQDNs

Type: `map(string)`

Default:

```json
{
  "dev": "whitecloud.sandbox.whitebox.eu",
  "pre": "whitecloud.sandbox.whitebox.eu",
  "prod": "whitecloud.sandbox.whitebox.eu",
  "sandbox": "whitecloud.sandbox.whitebox.eu",
  "test": "whitecloud.sandbox.whitebox.eu",
  "uat": "whitecloud.sandbox.whitebox.eu"
}
```

### <a name="input_ssh_port"></a> [ssh\_port](#input\_ssh\_port)

Description: SSH Port

Type: `number`

Default: `4222`

### <a name="input_whitecloud_bastion_internal_ip"></a> [whitecloud\_bastion\_internal\_ip](#input\_whitecloud\_bastion\_internal\_ip)

Description: Whitecloud Bastion IP address

Type: `string`

Default: `"10.42.8.10"`

### <a name="input_whitecloud_internal_subnet_flatex_az"></a> [whitecloud\_internal\_subnet\_flatex\_az](#input\_whitecloud\_internal\_subnet\_flatex\_az)

Description: Whitecloud Flatex availability zone

Type: `list(string)`

Default:

```json
[
  "eu-central-1a",
  "eu-central-1b"
]
```

### <a name="input_whitecloud_internal_subnet_flatex_cidr"></a> [whitecloud\_internal\_subnet\_flatex\_cidr](#input\_whitecloud\_internal\_subnet\_flatex\_cidr)

Description: Whitecloud Flatex CIDR

Type: `list(string)`

Default:

```json
[
  "10.42.211.0/24",
  "10.42.212.0/24"
]
```

### <a name="input_whitecloud_vpc_cidr_block"></a> [whitecloud\_vpc\_cidr\_block](#input\_whitecloud\_vpc\_cidr\_block)

Description: Whitecloud VPC CIDR block

Type: `string`

Default: `"10.42.0.0/16"`

## Outputs

The following outputs are exported:

### <a name="output_availability_zones"></a> [availability\_zones](#output\_availability\_zones)

Description: n/a

### <a name="output_bastion_cidr"></a> [bastion\_cidr](#output\_bastion\_cidr)

Description: n/a

### <a name="output_bastion_private_ip"></a> [bastion\_private\_ip](#output\_bastion\_private\_ip)

Description: n/a

### <a name="output_bastion_security_group_id"></a> [bastion\_security\_group\_id](#output\_bastion\_security\_group\_id)

Description: n/a

### <a name="output_database_route_table_ids"></a> [database\_route\_table\_ids](#output\_database\_route\_table\_ids)

Description: n/a

### <a name="output_database_subnet_group_name"></a> [database\_subnet\_group\_name](#output\_database\_subnet\_group\_name)

Description: n/a

### <a name="output_database_subnet_ids"></a> [database\_subnet\_ids](#output\_database\_subnet\_ids)

Description: n/a

### <a name="output_flatex_route_table_ids"></a> [flatex\_route\_table\_ids](#output\_flatex\_route\_table\_ids)

Description: n/a

### <a name="output_flatex_subnet_ids"></a> [flatex\_subnet\_ids](#output\_flatex\_subnet\_ids)

Description: n/a

### <a name="output_kms_key_logs_arn"></a> [kms\_key\_logs\_arn](#output\_kms\_key\_logs\_arn)

Description: n/a

### <a name="output_kms_key_main_arn"></a> [kms\_key\_main\_arn](#output\_kms\_key\_main\_arn)

Description: n/a

### <a name="output_nat_gateway_ips"></a> [nat\_gateway\_ips](#output\_nat\_gateway\_ips)

Description: n/a

### <a name="output_private_route_table_ids"></a> [private\_route\_table\_ids](#output\_private\_route\_table\_ids)

Description: n/a

### <a name="output_private_subnet_ids"></a> [private\_subnet\_ids](#output\_private\_subnet\_ids)

Description: n/a

### <a name="output_public_route_table_ids"></a> [public\_route\_table\_ids](#output\_public\_route\_table\_ids)

Description: n/a

### <a name="output_public_subnet_ids"></a> [public\_subnet\_ids](#output\_public\_subnet\_ids)

Description: n/a

### <a name="output_route53_internal_zone_id"></a> [route53\_internal\_zone\_id](#output\_route53\_internal\_zone\_id)

Description: n/a

### <a name="output_route53_main_zone_id"></a> [route53\_main\_zone\_id](#output\_route53\_main\_zone\_id)

Description: n/a

### <a name="output_route53_zones"></a> [route53\_zones](#output\_route53\_zones)

Description: n/a

### <a name="output_store_bucket_id"></a> [store\_bucket\_id](#output\_store\_bucket\_id)

Description: n/a

### <a name="output_vpc_cidr"></a> [vpc\_cidr](#output\_vpc\_cidr)

Description: n/a

### <a name="output_vpc_id"></a> [vpc\_id](#output\_vpc\_id)

Description: n/a



