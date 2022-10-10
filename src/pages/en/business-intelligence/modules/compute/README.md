---
title: Whitecloud Services
layout: /src/layouts/MainLayout.astro
---



## Requirements

No requirements.

## Providers

The following providers are used by this module:

- <a name="provider_aws"></a> [aws](#provider\_aws)

- <a name="provider_tls"></a> [tls](#provider\_tls)

## Resources

The following resources are used by this module:

- [aws_autoscaling_group.bi_ops](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/autoscaling_group) (resource)
- [aws_iam_instance_profile.bi_ops](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/iam_instance_profile) (resource)
- [aws_iam_role.bi_ops](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/iam_role) (resource)
- [aws_iam_role_policy.kms](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/iam_role_policy) (resource)
- [aws_iam_role_policy.ssm](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/iam_role_policy) (resource)
- [aws_iam_role_policy_attachment.cw](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/iam_role_policy_attachment) (resource)
- [aws_iam_role_policy_attachment.ssm](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/iam_role_policy_attachment) (resource)
- [aws_key_pair.bi_ops](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/key_pair) (resource)
- [aws_launch_template.bi_ops](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/launch_template) (resource)
- [aws_security_group.bi_ops](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/security_group) (resource)
- [tls_private_key.bi_ops](https://registry.terraform.io/providers/hashicorp/tls/latest/docs/resources/private_key) (resource)
- [aws_ami.bi_ops](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/ami) (data source)
- [aws_caller_identity.current](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/caller_identity) (data source)
- [aws_iam_policy_document.bi_ops_assume](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/iam_policy_document) (data source)
- [aws_iam_policy_document.kms](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/iam_policy_document) (data source)
- [aws_iam_policy_document.ssm](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/iam_policy_document) (data source)
- [aws_region.current](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/region) (data source)

## Modules

No modules.

## Required Inputs

The following input variables are required:

### <a name="input_app_name"></a> [app\_name](#input\_app\_name)

Description: Name of the application

Type: `string`

### <a name="input_bastion_cidrs"></a> [bastion\_cidrs](#input\_bastion\_cidrs)

Description: CIDR ranges of bastion instances

Type: `list(string)`

### <a name="input_kms_arn"></a> [kms\_arn](#input\_kms\_arn)

Description: ARN of the KMS key to use for encrypting storage

Type: `string`

### <a name="input_org_name"></a> [org\_name](#input\_org\_name)

Description: Name of the organisation

Type: `string`

### <a name="input_private_subnet_ids"></a> [private\_subnet\_ids](#input\_private\_subnet\_ids)

Description: IDs of the private subnets assigned to the VPC

Type: `list(string)`

### <a name="input_vpc_id"></a> [vpc\_id](#input\_vpc\_id)

Description: ID of the VPC to which the resources are associated

Type: `string`

## Optional Inputs

No optional inputs.

## Outputs

The following outputs are exported:

### <a name="output_asg_id"></a> [asg\_id](#output\_asg\_id)

Description: ID of the ASG for BI operations

### <a name="output_bi_ops_iam_role_name"></a> [bi\_ops\_iam\_role\_name](#output\_bi\_ops\_iam\_role\_name)

Description: Name of the BI ops role name

### <a name="output_bi_ops_key_pair"></a> [bi\_ops\_key\_pair](#output\_bi\_ops\_key\_pair)

Description: Key pair used for the BI ops instances




# Business Intelligence Compute submodule

The `compute` submodule for business intelligence (BI) is composed out of three main components:

1. A key-pair to be used by EC2 instances used for BI operations
2. A Launch Template (LT) to be used by EC2 instances used for BI operations
3. An Auto Scaling Group (ASG), responsible for providing scaling potential and self-healing capabilities for the BI
   operations EC2 instances

Supporting components for the two components above are also initialised as a part of this module, such as:

* Security group for the EC2 instances
* IAM instance profile for the EC2 instances, enabling access to SSM and CloudWatch

It is important to also call out what the Launch Templates make usage of a pre-prepared AMI, which features several
tools and packages installed, and which is referenced in the `data.tf` file.

## Introduction

It is important to call out that since the BI module is only applied against `pre-production` and `production`,
consequently, this submodule will only ever be applied for those modules.

Most of the configuration of the module can be found in the `locals.tf` file, which provides an overview on the
configurations that have been applied for the submodule.

## Structure

This section contains information on the structure of the submodule, specifically the custom files that have been
created, as well as the order in which they should be read. All standard files (i.e. `variables.tf`, `output.tf`) are
considered standard knowledge, and have been explored in the sections below.

* *key-pair.tf*
    * Generates a random key-pair per workspace, which is then saved into the EC2 key pair section
    * This key-pair is to be used by the Launch Template
* *data.tf*
    * Responsible for identifying the AMI that must be used by the Launch Template
* *iam.tf*
    * Defines a role and policies for interacting with SSM and CloudWatch
    * Creates an IAM instance profile, to be used by the Launch Template
* *template.tf*
    * Defines the Launch Template for the EC2 instances
    * Creates a reference to the IAM instance profile that needs to be attached to the EC2 instances (thus providing
      access to SSM and CW)
    * Defines default tags that must be applied to all instances created by the Launch Template
* *asg.tf*
    * Defines the Auto Scaling Group for the EC2 instances
    * The number of desired instances can be controlled through the `locals.tf` file - feel free to change this to a
      variable if the amount of machines differs per workspace in the future
    * Defines the subnets to which the instances need to be deployed, as well as the Launch Template to be used

## Inputs

| Name               | Description                                                                                   | Type         |
|--------------------|-----------------------------------------------------------------------------------------------|--------------|
| bastion_cidrs      | CIDR ranges of bastion instances, to enable access into the database                          | list(string) |
| kms_arn            | ARN of the KMS key to use for encrypting storage                                              | string       |
| vpc_id             | ID of the VPC to which the resources are associated                                           | string       |
| org_name           | Name of the organisation, used as a default tag for EC2 instances created through this module | string       |
| app_name           | Name of the application, used as a default tag for EC2 instances created through this module  | string       |
| private_subnet_ids | IDs of the private subnets assigned to the VPC                                                | list(string) |

## Outputs

| Name            | Description                            | Type   |
|-----------------|----------------------------------------|--------|
| bi_ops_key_pair | Key pair used for the BI ops instances | string |
| asg_id          | ID of the ASG for BI operations        | string |
