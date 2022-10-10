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

- [aws_acm_certificate.certificate_authority](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/acm_certificate) (resource)
- [aws_ec2_client_vpn_authorization_rule.vpn_auth_rule](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/ec2_client_vpn_authorization_rule) (resource)
- [aws_ec2_client_vpn_endpoint.vpn](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/ec2_client_vpn_endpoint) (resource)
- [aws_ec2_client_vpn_network_association.vpn_subnets](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/ec2_client_vpn_network_association) (resource)
- [aws_security_group.vpn_access](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/security_group) (resource)

## Modules

No modules.

## Required Inputs

The following input variables are required:

### <a name="input_acm_server_certificate_arn"></a> [acm\_server\_certificate\_arn](#input\_acm\_server\_certificate\_arn)

Description: (optional) describe your variable

Type: `string`

### <a name="input_bastion_cidr"></a> [bastion\_cidr](#input\_bastion\_cidr)

Description: Bastion CIDR

Type: `string`

### <a name="input_subnet_ids"></a> [subnet\_ids](#input\_subnet\_ids)

Description: Public subnet identifiers

Type: `list(string)`

### <a name="input_vpc_cidr"></a> [vpc\_cidr](#input\_vpc\_cidr)

Description: Target VPC CIDR to allow VPN connection

Type: `string`

### <a name="input_vpc_id"></a> [vpc\_id](#input\_vpc\_id)

Description: Virtual Private Cloud identifier

Type: `string`

## Optional Inputs

The following input variables are optional (have default values):

### <a name="input_ssh_port"></a> [ssh\_port](#input\_ssh\_port)

Description: SSH Port

Type: `number`

Default: `4222`

## Outputs

No outputs.



