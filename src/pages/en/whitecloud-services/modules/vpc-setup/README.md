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

- [aws_route.accepter](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/route) (resource)
- [aws_route.owner](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/route) (resource)
- [aws_vpc_peering_connection.main](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/vpc_peering_connection) (resource)
- [aws_vpc_peering_connection_accepter.main](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/vpc_peering_connection_accepter) (resource)
- [aws_caller_identity.current](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/caller_identity) (data source)

## Modules

No modules.

## Required Inputs

The following input variables are required:

### <a name="input_accepter_destinations"></a> [accepter\_destinations](#input\_accepter\_destinations)

Description: AWS VPC CIDR block

Type: `list(string)`

### <a name="input_accepter_route_tables"></a> [accepter\_route\_tables](#input\_accepter\_route\_tables)

Description: AWS route tables in accepter VPC (main)

Type: `list(string)`

### <a name="input_owner_destinations"></a> [owner\_destinations](#input\_owner\_destinations)

Description: AWS VPC CIDR block

Type: `list(string)`

### <a name="input_owner_route_tables"></a> [owner\_route\_tables](#input\_owner\_route\_tables)

Description: AWS route tables in current VPC (environments)

Type: `list(string)`

### <a name="input_shared_vpc_id"></a> [shared\_vpc\_id](#input\_shared\_vpc\_id)

Description: AWS VPC identifier for main VPC

Type: `string`

### <a name="input_vpc_id"></a> [vpc\_id](#input\_vpc\_id)

Description: AWS VPC identifier for each environment (dev/test/uat/sandbox/pre/prod)

Type: `string`

## Optional Inputs

No optional inputs.

## Outputs

No outputs.


