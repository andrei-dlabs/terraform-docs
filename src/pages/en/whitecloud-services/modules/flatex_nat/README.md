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

- [aws_ec2_transit_gateway_route.whitebox](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/ec2_transit_gateway_route) (resource)
- [aws_ec2_transit_gateway_route_table_association.vpc](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/ec2_transit_gateway_route_table_association) (resource)
- [aws_ec2_transit_gateway_vpc_attachment.vpc_attachment](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/ec2_transit_gateway_vpc_attachment) (resource)
- [aws_instance.nat_gw](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/instance) (resource)
- [aws_network_interface.nat_gw](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/network_interface) (resource)
- [aws_route.flatex](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/route) (resource)
- [aws_route.nat](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/route) (resource)
- [aws_route53_record.nat_gw](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/route53_record) (resource)
- [aws_security_group.nat_gw](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/security_group) (resource)
- [aws_ami.ubuntu](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/ami) (data source)
- [aws_route53_zone.whitecloud](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/route53_zone) (data source)
- [local_file.sshd_config](https://registry.terraform.io/providers/hashicorp/local/latest/docs/data-sources/file) (data source)

## Modules

No modules.

## Required Inputs

The following input variables are required:

### <a name="input_flatex_cidr"></a> [flatex\_cidr](#input\_flatex\_cidr)

Description: Network Whitebox

Type: `string`

### <a name="input_granted_ips"></a> [granted\_ips](#input\_granted\_ips)

Description: IP address registered in Flatex's firewall rules

Type: `list(string)`

### <a name="input_ingress_cidr"></a> [ingress\_cidr](#input\_ingress\_cidr)

Description: Allowed ingress CIDR for NAT instances

Type: `list(string)`

### <a name="input_intra_route_tables"></a> [intra\_route\_tables](#input\_intra\_route\_tables)

Description: AWS Route table identifier for intra networks

Type: `list(string)`

### <a name="input_ops_key"></a> [ops\_key](#input\_ops\_key)

Description: Allowed public SSH keys to connect bastion

Type: `string`

### <a name="input_snat_ips"></a> [snat\_ips](#input\_snat\_ips)

Description: AWS EC2 NAT instances to SNAT Flatex communication

Type: `list(string)`

### <a name="input_subnets"></a> [subnets](#input\_subnets)

Description: Subnets identifiers for flatex VPN connection

Type: `list(string)`

### <a name="input_transit_gateway"></a> [transit\_gateway](#input\_transit\_gateway)

Description: AWS transit gateway identifier for Flatex VPN connection

Type: `string`

### <a name="input_transit_gateway_route_table"></a> [transit\_gateway\_route\_table](#input\_transit\_gateway\_route\_table)

Description: AWS transit gateway route table identifier for Flatex VPN connection

Type: `string`

### <a name="input_vpc_id"></a> [vpc\_id](#input\_vpc\_id)

Description: Virtual Private Cloud identifier

Type: `string`

### <a name="input_whitebox_cidr"></a> [whitebox\_cidr](#input\_whitebox\_cidr)

Description: Network flatexDEGIRO

Type: `string`

## Optional Inputs

The following input variables are optional (have default values):

### <a name="input_instance_type"></a> [instance\_type](#input\_instance\_type)

Description: AWS EC2 instance type

Type: `string`

Default: `"t2.nano"`

## Outputs

No outputs.


