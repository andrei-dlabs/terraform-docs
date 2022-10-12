---
title: Whitebox
layout: /src/layouts/MainLayout.astro
---

# Terraform

This github repository contains the infrastructure automation for AWS using Terraform from Hashicorp.

## Getting started

- [Documentation](https://www.notion.so/whtbx/Whitecloud-AWS-d1dd9dc406834cc190feafdb97af2fcd)
- [Network Diagram](https://lucid.app/lucidchart/35c6fba9-6f5d-4b38-be4a-f03db84c8300/edit?page=Xm0rv3w-1eUC&invitationId=inv_1a0c085c-e9db-4119-8e71-d29627246fa7)
- [AWS CLI Configuration](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html)

### Configure AWS credentials

Install AWS CLI (macOS):

`brew install awscli`

You will need the following environment variables:

- AWS_ACCESS_KEY_ID
- AWS_SECRET_ACCESS_KEY
- AWS_SESSION_TOKEN

## Structure

### Project `docker`

Current approach consists of using ECS as a container orchestrator. This folder is to keep a base ubuntu image, so we
can use it in all the rest of images.

It also contains a sample docker-compose.yml file to provision a private cloud formation for mobile API, which could be
useful to provide additional environments to QA team (on-demand).

### Project `whitecloud`

This project is configured to have a single terraform workspace (default). Currently, it configures a VPC, VPNs,
subnets, etc. and this information is shared across a remote state. Any other project, can load the information from the
terraform state without having to worry about main infrastructure components. At the same, we reuse and keep critical
components safe from environments (i.e: VPNs, NAT instances, Squid Proxy, etc.)

Services provisioned:

- ecs cluster (main)
- squid proxy
- vpn server
- site-to-site vpn

### Project `whitecloud-services`

This project is configured with `dev` and `uat` environments currently, but will cover the following workspaces:

- dev
- test
- uat
- sandbox
- pre (maybe)
- prod

The goal of this project is to contain anything that is environment specific. Currently is agnostic to the base
infrastructure because we wanted to reuse Flatex's UAT environment in our dev, test and uat environments. But this
project can perfectly provision a specific VPC for each environment, without using the main one (It's up to discussion
with TrueNode).

Services provisioned:

- ecs cluster (environment specific)
- birdbox: Mobile app related infrastructure
- whitebox-aio: Test to deploy the all-in-one image at AWS (WIP)

## Secrets

Secrets needs to be stored in AWS secret manager to be encrypted wit CMK (Custom Master Key). We enabled password
rotation for databases, but it is mandatory to use a specific JSON structure (See RDS module).

NOTE: If rotation lambda application doesn't find this estructure, it won't be able to rotate credentials.

## Terraform Commands

Each project contains a Makefile to facilitate worskpace switching and command execution.

Project `whitecloud` only contains a single workspace and doesn't require `env` option.

```shell
make tf.plan
make tf.apply
```

Project `whitecloud-services` contains different workspaces (dev, uat, prod). It is mandatory to provide `env` option.

```shell
make tf.plan env=dev
make tf.apply env=dev
```

See `Makefile` for additional information.

### Update ECS service

There are two ways to force a new deployment:

1. Login through AWS console, navigate to ECS, select the cluster and update the service using Web UI.
2. Using AWS CLI from command line:

```shell
# Replace service name (birdbox-HasuraService-87AxN0yPgEwj) with required one
aws ecs update-service --cluster whitecloud-dev-ecs \
  --service birdbox-HasuraService-87AxN0yPgEwj \
  --force-new-deployment --region eu-central-1
```

> When having a single instance, this doesn't update the service. You need to set `minimumHealthyPercent` to zero or
> configure 2 replicas to avoid downtime. (See documentation in Notion)

---

## Whitebox Services

### Birdbox

Birdbox is the alias for mobile related services, currently GraphQL engine.

[Birdbox GitHub](https://github.com/whiteboxservices/birdbox)

## Documentation

Terraform-docs is used for generating the documentation. For running locally, install terraform-docs on your machine
and `make documentation` .

When deploying to main, a pipeline(`documentation.yaml`) is triggered that updates the documentation automatically and
uploads the file to an S3 bucket.
