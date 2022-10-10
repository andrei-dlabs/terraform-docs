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

- [aws_codedeploy_app.bi](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/codedeploy_app) (resource)
- [aws_codedeploy_deployment_group.bi](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/codedeploy_deployment_group) (resource)
- [aws_codepipeline.bi](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/codepipeline) (resource)
- [aws_iam_policy.codepipeline_execution](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/iam_policy) (resource)
- [aws_iam_policy.s3_access](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/iam_policy) (resource)
- [aws_iam_role.codedeploy](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/iam_role) (resource)
- [aws_iam_role.codepipeline](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/iam_role) (resource)
- [aws_iam_role_policy_attachment.codedeploy_codedeploy](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/iam_role_policy_attachment) (resource)
- [aws_iam_role_policy_attachment.codedeploy_ec2](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/iam_role_policy_attachment) (resource)
- [aws_iam_role_policy_attachment.codepipeline_execution](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/iam_role_policy_attachment) (resource)
- [aws_iam_role_policy_attachment.iam_instance_s3_attachment](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/iam_role_policy_attachment) (resource)
- [aws_s3_bucket.codepipeline_artifacts](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket) (resource)
- [aws_s3_bucket_acl.codepipeline_artifacts](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_acl) (resource)
- [aws_s3_bucket_public_access_block.codepipeline_artifacts](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_public_access_block) (resource)
- [aws_s3_bucket_server_side_encryption_configuration.codepipeline_artifacts](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_server_side_encryption_configuration) (resource)
- [aws_s3_bucket_versioning.codepipeline_artifacts](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_versioning) (resource)
- [aws_iam_policy_document.assume_codedeploy](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/iam_policy_document) (data source)
- [aws_iam_policy_document.assume_codepipeline](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/iam_policy_document) (data source)
- [aws_iam_policy_document.codepipeline_execution](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/iam_policy_document) (data source)
- [aws_iam_policy_document.iam_role_s3](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/iam_policy_document) (data source)

## Modules

No modules.

## Required Inputs

The following input variables are required:

### <a name="input_auto_scaling_groups"></a> [auto\_scaling\_groups](#input\_auto\_scaling\_groups)

Description: IDs of the ASGs that should be assigned to the CodeDeploy group

Type: `list(string)`

### <a name="input_bi_ops_role_name"></a> [bi\_ops\_role\_name](#input\_bi\_ops\_role\_name)

Description: Name of the BI ops role name

Type: `string`

### <a name="input_codestorage_s3_arn"></a> [codestorage\_s3\_arn](#input\_codestorage\_s3\_arn)

Description: ARN of the S3 bucket to be used by code deployment services

Type: `string`

### <a name="input_codestorage_s3_name"></a> [codestorage\_s3\_name](#input\_codestorage\_s3\_name)

Description: Name of the S3 bucket to be used by code deployment services

Type: `string`

### <a name="input_kms_arn"></a> [kms\_arn](#input\_kms\_arn)

Description: ARN of the KMS key used for encrypting storage

Type: `string`

## Optional Inputs

No optional inputs.

## Outputs

No outputs.



# Business Intelligence Deployment submodule

The deployment submodule for business intelligence (BI) is composed out of two main components:

1. Configuration for CodeDeploy (application and deployment group)
2. Configuration for CodePipeline (source + deployment action)

Supporting components for the two components above are also initialised as a part of this module, such as:

* An S3 bucket for CodePipeline artifacts
* IAM role and policies for CodeDeploy
* IAM role and policies for CodePipeline

## Introduction

It is important to call out that since the BI module is only applied against `pre-production` and `production`,
consequently, this submodule will only ever be applied for those modules.

Most of the configuration of the module can be found in the `locals.tf` file, which provides an overview on the
configurations that have been applied for the submodule.

## Structure

This section contains information on the structure of the submodule, specifically the custom files that have been
created, as well as the order in which they should be read. All standard files (i.e. `variables.tf`, `output.tf`) are
considered standard knowledge, and have been explored in the sections below.

* *code-deploy.tf*
    * Responsible for creating a CodeDeploy application
    * Responsible for creating a CodeDeploy deployment group, linking it to the auto-scaling group of the `compute`
      submodule of the `bi` module, and enabling rollback support
* *code-pipeline.tf*
    * Defines the CodePipeline component for the submodule
    * Uses S3 as a source artifact (specifically the ZIP archive that is pushed through GitHub actions from
      the `data-science` repository)
    * Uses CodeDeploy as a deployment step, thus pushing the ZIP archive to all EC2 instances assigned to the `bi` Auto
      Scaling Group
* *storage.tf*
    * Defines the S3 bucket to be used for CodePipeline artifacts
* *iam.tf*
    * Defines the role and policies for CodeDeploy
    * Defines the role and policies for CodePipeline

## Inputs

| Name                | Description                                                     | Type         |
|---------------------|-----------------------------------------------------------------|--------------|
| auto_scaling_groups | IDs of the ASGs that should be assigned to the CodeDeploy group | list(string) |
| codestorage_s3_arn  | ARN of the S3 bucket to be used by code deployment services     | string       |
| codestorage_s3_name | Name of the S3 bucket to be used by code deployment services    | string       |
| kms_arn             | KMS key ARN, used for encrypting the contents of the S3 buckets | string       |

## Outputs

None.

