---
title: Whitebox
layout: ../../layouts/MainLayout.astro
---

# Hi there!

This is your first markdown page. It probably isn't styled much, although
Markdown does support **bold** and _italics._

To learn more about adding a layout to your page, read the next section on **Markdown Layouts.**

## Requirements

The following requirements are needed by this module:

- <a name="requirement_aws"></a> [aws](#requirement\_aws) (~> 4.8.0)

## Providers

The following providers are used by this module:

- <a name="provider_aws"></a> [aws](#provider\_aws) (4.8.0)

- <a name="provider_terraform"></a> [terraform](#provider\_terraform)

## Modules

The following Modules are called:

### <a name="module_fake-services"></a> [fake-services](#module\_fake-services)

Source: ./modules/fake-services

Version:

### <a name="module_frontend"></a> [frontend](#module\_frontend)

Source: ./modules/frontend

Version:

### <a name="module_image-service"></a> [image-service](#module\_image-service)

Source: ./modules/image-service

Version:

### <a name="module_nginx"></a> [nginx](#module\_nginx)

Source: ./modules/nginx

Version:

### <a name="module_performance-service"></a> [performance-service](#module\_performance-service)

Source: ./modules/performance-service

Version:

### <a name="module_projection-engine"></a> [projection-engine](#module\_projection-engine)

Source: ./modules/projection-engine

Version:

### <a name="module_whitebox-core"></a> [whitebox-core](#module\_whitebox-core)

Source: ./modules/whitebox-core

Version:

## Resources

The following resources are used by this module:

- [aws_service_discovery_private_dns_namespace.whitebox](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/service_discovery_private_dns_namespace) (resource)
- [aws_availability_zones.available](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/availability_zones) (data source)
- [terraform_remote_state.shared](https://registry.terraform.io/providers/hashicorp/terraform/latest/docs/data-sources/remote_state) (data source)

## Required Inputs

The following input variables are required:

### <a name="input_ecs_desired_tasks"></a> [ecs\_desired\_tasks](#input\_ecs\_desired\_tasks)

Description: AWS ECS desired tasks amount per service

Type: `number`

### <a name="input_ecs_max_health_percent"></a> [ecs\_max\_health\_percent](#input\_ecs\_max\_health\_percent)

Description: AWS ECS maximum healthy percent

Type: `number`

### <a name="input_ecs_min_health_percent"></a> [ecs\_min\_health\_percent](#input\_ecs\_min\_health\_percent)

Description: AWS ECS minimum healthy percent

Type: `number`

### <a name="input_github_token_arn"></a> [github\_token\_arn](#input\_github\_token\_arn)

Description: Github credentials ARN

Type: `string`

### <a name="input_nginx_hostname"></a> [nginx\_hostname](#input\_nginx\_hostname)

Description: Hostname for Frontend nginx

Type: `string`

## Optional Inputs

The following input variables are optional (have default values):

### <a name="input_region"></a> [region](#input\_region)

Description: n/a

Type: `string`

Default: `"eu-central-1"`

## Outputs

No outputs.

