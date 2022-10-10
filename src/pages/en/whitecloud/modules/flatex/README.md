---
title: Whitecloud Services
layout: /src/layouts/MainLayout.astro
---



## Requirements

No requirements.

## Providers

The following providers are used by this module:

- <a name="provider_aws"></a> [aws](#provider\_aws)

- <a name="provider_local"></a> [local](#provider\_local)

## Resources

The following resources are used by this module:

- [aws_customer_gateway.flatex](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/customer_gateway) (resource)
- [aws_ec2_transit_gateway.flatex](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/ec2_transit_gateway) (resource)
- [aws_ec2_transit_gateway_route.flatex](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/ec2_transit_gateway_route) (resource)
- [aws_ec2_transit_gateway_route_table.flatex](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/ec2_transit_gateway_route_table) (resource)
- [aws_ec2_transit_gateway_route_table_association.flatex](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/ec2_transit_gateway_route_table_association) (resource)
- [aws_ec2_transit_gateway_route_table_association.nat_egress](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/ec2_transit_gateway_route_table_association) (resource)
- [aws_ec2_transit_gateway_vpc_attachment.nat_vpc_attachment](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/ec2_transit_gateway_vpc_attachment) (resource)
- [aws_vpn_connection.flatex](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/vpn_connection) (resource)
- [aws_ami.ubuntu](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/ami) (data source)
- [aws_route53_zone.whitecloud](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/route53_zone) (data source)
- [aws_s3_object.vpn_psk1](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/s3_object) (data source)
- [aws_s3_object.vpn_psk2](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/s3_object) (data source)
- [local_file.sshd_config](https://registry.terraform.io/providers/hashicorp/local/latest/docs/data-sources/file) (data source)

## Modules

No modules.

## Required Inputs

The following input variables are required:

### <a name="input_attached_subnet_ids"></a> [attached\_subnet\_ids](#input\_attached\_subnet\_ids)

Description: Subnets identifiers allowed to use flatex VPN connection

Type: `list(string)`

### <a name="input_bgp_asn"></a> [bgp\_asn](#input\_bgp\_asn)

Description: BGP ASN

Type: `number`

### <a name="input_database_route_table_ids"></a> [database\_route\_table\_ids](#input\_database\_route\_table\_ids)

Description: AWS Route table identifier for database networks

Type: `list(string)`

### <a name="input_flatex_degiro_route_cidr"></a> [flatex\_degiro\_route\_cidr](#input\_flatex\_degiro\_route\_cidr)

Description: Network flatexDEGIRO

Type: `string`

### <a name="input_flatex_env"></a> [flatex\_env](#input\_flatex\_env)

Description: Flatex environment (uat/prod)

Type: `string`

### <a name="input_flatex_route_table_ids"></a> [flatex\_route\_table\_ids](#input\_flatex\_route\_table\_ids)

Description: AWS Route table identifier for flatex networks

Type: `list(string)`

### <a name="input_flatex_whitebox_nat_ips"></a> [flatex\_whitebox\_nat\_ips](#input\_flatex\_whitebox\_nat\_ips)

Description: IP address registered in Flatex's firewall rules

Type: `list(string)`

### <a name="input_flatex_whitebox_route_cidr"></a> [flatex\_whitebox\_route\_cidr](#input\_flatex\_whitebox\_route\_cidr)

Description: Network Whitebox

Type: `string`

### <a name="input_gw_ip"></a> [gw\_ip](#input\_gw\_ip)

Description: Flatex's customer gateway peer address

Type: `string`

### <a name="input_ops_key"></a> [ops\_key](#input\_ops\_key)

Description: Allowed public SSH keys to connect bastion

Type: `string`

### <a name="input_s3_bucket_name"></a> [s3\_bucket\_name](#input\_s3\_bucket\_name)

Description: AWS S3 bucket name to load shared keys

Type: `string`

### <a name="input_s3_psk_keys"></a> [s3\_psk\_keys](#input\_s3\_psk\_keys)

Description: AWS S3 object keys for VPN preshared keys (2 required)

Type: `list(string)`

### <a name="input_vpc_id"></a> [vpc\_id](#input\_vpc\_id)

Description: Virtual Private Cloud identifier

Type: `string`

## Optional Inputs

No optional inputs.

## Outputs

The following outputs are exported:

### <a name="output_transit_gateway"></a> [transit\_gateway](#output\_transit\_gateway)

Description: n/a



