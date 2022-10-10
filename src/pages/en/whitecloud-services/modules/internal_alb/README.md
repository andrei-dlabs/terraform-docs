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

- [aws_alb.internal](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/alb) (resource)
- [aws_alb_listener.http](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/alb_listener) (resource)
- [aws_alb_target_group.http](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/alb_target_group) (resource)
- [aws_security_group.alb](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/security_group) (resource)
- [aws_caller_identity.current](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/caller_identity) (data source)

## Modules

No modules.

## Required Inputs

The following input variables are required:

### <a name="input_acm_certificate_arn"></a> [acm\_certificate\_arn](#input\_acm\_certificate\_arn)

Description: AWS ACM certificate ARN

Type: `string`

### <a name="input_allowed_cidr_blocks"></a> [allowed\_cidr\_blocks](#input\_allowed\_cidr\_blocks)

Description: Allowed CIDR blocks for ALB

Type: `list(string)`

### <a name="input_name"></a> [name](#input\_name)

Description: Load balancer name

Type: `string`

### <a name="input_subnet_ids"></a> [subnet\_ids](#input\_subnet\_ids)

Description: Public subnet identifiers

Type: `list(string)`

### <a name="input_vpc_id"></a> [vpc\_id](#input\_vpc\_id)

Description: AWS VPC ID

Type: `string`

## Optional Inputs

No optional inputs.

## Outputs

The following outputs are exported:

### <a name="output_dns_name"></a> [dns\_name](#output\_dns\_name)

Description: n/a

### <a name="output_http_listener_arn"></a> [http\_listener\_arn](#output\_http\_listener\_arn)

Description: n/a

### <a name="output_internal_lb"></a> [internal\_lb](#output\_internal\_lb)

Description: n/a

### <a name="output_security_group_id"></a> [security\_group\_id](#output\_security\_group\_id)

Description: n/a

### <a name="output_zone_id"></a> [zone\_id](#output\_zone\_id)

Description: n/a


