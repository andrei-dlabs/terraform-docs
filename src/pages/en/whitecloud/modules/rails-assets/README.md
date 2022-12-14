---
title: Whitecloud Services
layout: /src/layouts/MainLayout.astro
---



## Requirements

No requirements.

## Providers

No providers.

## Resources

No resources.

## Modules

The following Modules are called:

### <a name="module_iam"></a> [iam](./modules/iam/README)

Source: ./modules/iam

Version:

### <a name="module_s3"></a> [s3](./modules/s3/README)

Source: ./modules/s3

Version:

## Required Inputs

The following input variables are required:

### <a name="input_kms_arn"></a> [kms\_arn](#input\_kms\_arn)

Description: ARN of the KMS key that is to be used for encrypting storage

Type: `string`

### <a name="input_prefix"></a> [prefix](#input\_prefix)

Description: Prefix to apply to resources generated by the module

Type: `string`

## Optional Inputs

No optional inputs.

## Outputs

The following outputs are exported:

### <a name="output_assets_read_access_key"></a> [assets\_read\_access\_key](#output\_assets\_read\_access\_key)

Description: Access key used by the read assets bucket user

### <a name="output_assets_read_secret_key"></a> [assets\_read\_secret\_key](#output\_assets\_read\_secret\_key)

Description: Secret key used by the read assets bucket user

### <a name="output_assets_readwrite_access_key"></a> [assets\_readwrite\_access\_key](#output\_assets\_readwrite\_access\_key)

Description: Access key used by the read-write assets bucket user

### <a name="output_assets_readwrite_name"></a> [assets\_readwrite\_name](#output\_assets\_readwrite\_name)

Description: Name of the read-write assets user

### <a name="output_assets_readwrite_secret_key"></a> [assets\_readwrite\_secret\_key](#output\_assets\_readwrite\_secret\_key)

Description: Secret key used by the read-write assets bucket user




# Rail-Assets submodule

The Rail-Assets submodule is composed out of three main components:

1. A private S3 bucket with versioning enabled.
2. One IAM user with read-write access on the S3 bucket mentioned above
3. One IAM user with read-only access on the S3 bucket mentioned above

## Introduction

Rails-Assets submodule creates a bucket and two IAM users that are used to store and version the assets inside
the `whitebox-on-rails` folder from `whitebox` repository.

## Structure

This section contains information on the structure of the submodule, specifically the custom files that have been
created, as well as the order in which they should be read. All standard files (i.e. `variables.tf`, `output.tf`) are
considered standard knowledge, and have been explored in the sections below.

This submodule is composed out of 2 other submodules: `iam` and `s3`.

* *s3*
    * `assets_bucket.tf`
        * Responsible for creating a private S3 bucket

* *iam*
    * `policy.tf`
        * Defines the policies of the said users
    * `user.tf`
        * Responsible for creating two IAM users (one with read-write access on the bucket above mentioned and the other
          with read-only access)
        * The read-write user is used for uploading the assets to the S3 bucket
        * The read-only user is used for retrieving the assets in any needed repository

## Inputs

* `rails-assets`

| Name        | Description                                             | Type   |
|-------------|---------------------------------------------------------|--------|
| prefix      | Prefix to apply to resources generated by the module    | string |

* `s3`

| Name        | Description                                             | Type   |
|-------------|---------------------------------------------------------|--------|
| prefix      | Prefix to apply to resources generated by the module    | string |

* `iam`

| Name        | Description                                          | Type   |
|-------------|------------------------------------------------------|--------|
| prefix      | Prefix to apply to resources generated by the module | string |
| bucket_arn  | The arn of the assets s3 bucket                      | string |

## Outputs

* `rails-assets`

| Name                        | Description                                          | Type   |
|-----------------------------|------------------------------------------------------|--------|
| assets_readwrite_access_key | Access key used by the read-write assets bucket user | string |
| assets_readwrite_secret_key | Secret key used by the read-write assets bucket user | string |
| assets_read_access_key      | Access key used by the read assets bucket user       | string |
| assets_read_secret_key      | Secret key used by the read assets bucket user       | string |

* `s3`

| Name              | Description                     | Type   |
|-------------------|---------------------------------|--------|
| assets_bucket_arn | The arn of the assets s3 bucket | string |

* `iam`

| Name                        | Description                                          | Type   |
|-----------------------------|------------------------------------------------------|--------|
| assets_readwrite_access_key | Access key used by the read-write assets bucket user | string |
| assets_readwrite_secret_key | Secret key used by the read-write assets bucket user | string |
| assets_read_access_key      | Access key used by the read assets bucket user       | string |
| assets_read_secret_key      | Secret key used by the read assets bucket user       | string |

