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

- [aws_efs_access_point.shared](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/efs_access_point) (resource)
- [aws_efs_file_system.shared](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/efs_file_system) (resource)
- [aws_efs_mount_target.mount](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/efs_mount_target) (resource)
- [aws_security_group.efs](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/security_group) (resource)

## Modules

No modules.

## Required Inputs

The following input variables are required:

### <a name="input_kms_key_id"></a> [kms\_key\_id](#input\_kms\_key\_id)

Description: AWS KMS key identifier to encrypt EFS volumes

Type: `string`

### <a name="input_subnet_ids"></a> [subnet\_ids](#input\_subnet\_ids)

Description: Subnet identifiers

Type: `list(string)`

### <a name="input_vpc_cidr_block"></a> [vpc\_cidr\_block](#input\_vpc\_cidr\_block)

Description: Whitecloud VPC CIDR block

Type: `string`

### <a name="input_vpc_id"></a> [vpc\_id](#input\_vpc\_id)

Description: AWS VPC identifier

Type: `string`

## Optional Inputs

No optional inputs.

## Outputs

The following outputs are exported:

### <a name="output_access_point_id"></a> [access\_point\_id](#output\_access\_point\_id)

Description: n/a

### <a name="output_efs_shared_access_point_id"></a> [efs\_shared\_access\_point\_id](#output\_efs\_shared\_access\_point\_id)

Description: n/a

### <a name="output_efs_shared_fs_id"></a> [efs\_shared\_fs\_id](#output\_efs\_shared\_fs\_id)

Description: n/a

### <a name="output_fs_id"></a> [fs\_id](#output\_fs\_id)

Description: n/a


