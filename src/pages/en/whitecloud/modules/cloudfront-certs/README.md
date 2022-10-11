---
title: Whitecloud Services
layout: /src/layouts/MainLayout.astro
---



## Requirements

No requirements.

## Providers

The following providers are used by this module:

- <a name="provider_aws"></a> [aws](#provider\_aws)

- <a name="provider_aws.us_east"></a> [aws.us\_east](#provider\_aws.us\_east)

## Resources

The following resources are used by this module:

- [aws_acm_certificate.whitecloud_cloudfront_cdn](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/acm_certificate) (resource)
- [aws_acm_certificate_validation.cloudfront-whitecloud](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/acm_certificate_validation) (resource)
- [aws_route53_record.cloudfront-whitecloud](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/route53_record) (resource)

## Modules

No modules.

## Required Inputs

The following input variables are required:

### <a name="input_aws_route53_zone_id"></a> [aws\_route53\_zone\_id](#input\_aws\_route53\_zone\_id)

Description: Route54 zone id

Type: `string`

### <a name="input_aws_s3_bucket_name"></a> [aws\_s3\_bucket\_name](#input\_aws\_s3\_bucket\_name)

Description: AWS bucket name to store certificates

Type: `string`

### <a name="input_domain"></a> [domain](#input\_domain)

Description: Cloudfront certificate domain name

Type: `string`

### <a name="input_name"></a> [name](#input\_name)

Description: Cloudfront Certificate Human name

Type: `string`

## Optional Inputs

The following input variables are optional (have default values):

### <a name="input_aws_s3_cert_foldername"></a> [aws\_s3\_cert\_foldername](#input\_aws\_s3\_cert\_foldername)

Description: Folder name to store certificates

Type: `string`

Default: `"certificates"`

## Outputs

The following outputs are exported:

### <a name="output_acm_certificate"></a> [acm\_certificate](#output\_acm\_certificate)

Description: n/a


