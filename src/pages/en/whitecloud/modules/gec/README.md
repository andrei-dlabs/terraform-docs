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

- [aws_customer_gateway.gec](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/customer_gateway) (resource)
- [aws_vpn_connection.gec](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/vpn_connection) (resource)
- [aws_vpn_connection_route.flatex](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/vpn_connection_route) (resource)
- [aws_s3_object.vpn_psk1](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/s3_object) (data source)
- [aws_s3_object.vpn_psk2](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/s3_object) (data source)

## Modules

No modules.

## Required Inputs

The following input variables are required:

### <a name="input_s3_bucket_name"></a> [s3\_bucket\_name](#input\_s3\_bucket\_name)

Description: AWS S3 bucket name to load shared keys

Type: `string`

### <a name="input_vpc_id"></a> [vpc\_id](#input\_vpc\_id)

Description: Virtual Private Cloud identifier

Type: `string`

### <a name="input_vpn_gateway_id"></a> [vpn\_gateway\_id](#input\_vpn\_gateway\_id)

Description: AWS VPC Gateway identifier

Type: `string`

## Optional Inputs

The following input variables are optional (have default values):

### <a name="input_bgp_asn"></a> [bgp\_asn](#input\_bgp\_asn)

Description: GEC VPN (German Edge Cloud)

Type: `number`

Default: `65000`

### <a name="input_flatex_route_cidr"></a> [flatex\_route\_cidr](#input\_flatex\_route\_cidr)

Description: n/a

Type: `string`

Default: `"10.4.65.0/24"`

### <a name="input_gw_ip"></a> [gw\_ip](#input\_gw\_ip)

Description: n/a

Type: `string`

Default: `"185.145.196.162"`

### <a name="input_psk1_object_key"></a> [psk1\_object\_key](#input\_psk1\_object\_key)

Description: n/a

Type: `string`

Default: `"whitecloud-dev-gec_vpn_psk1"`

### <a name="input_psk2_object_key"></a> [psk2\_object\_key](#input\_psk2\_object\_key)

Description: n/a

Type: `string`

Default: `"whitecloud-dev-gec_vpn_psk2"`

## Outputs

No outputs.



