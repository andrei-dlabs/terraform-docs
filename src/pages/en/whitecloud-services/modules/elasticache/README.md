---
title: Whitecloud Services
layout: /src/layouts/MainLayout.astro
---



## Requirements

No requirements.

## Providers

The following providers are used by this module:

- <a name="provider_aws"></a> [aws](#provider\_aws)

- <a name="provider_random"></a> [random](#provider\_random)

## Resources

The following resources are used by this module:

- [aws_elasticache_replication_group.single](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/elasticache_replication_group) (resource)
- [aws_elasticache_replication_group.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/elasticache_replication_group) (resource)
- [aws_elasticache_subnet_group.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/elasticache_subnet_group) (resource)
- [aws_elasticache_user.default](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/elasticache_user) (resource)
- [aws_elasticache_user.dynamic](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/elasticache_user) (resource)
- [aws_elasticache_user_group.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/elasticache_user_group) (resource)
- [aws_secretsmanager_secret.default](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/secretsmanager_secret) (resource)
- [aws_secretsmanager_secret.user](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/secretsmanager_secret) (resource)
- [aws_secretsmanager_secret_version.default](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/secretsmanager_secret_version) (resource)
- [aws_secretsmanager_secret_version.user](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/secretsmanager_secret_version) (resource)
- [aws_security_group.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/security_group) (resource)
- [random_password.default_pass](https://registry.terraform.io/providers/hashicorp/random/latest/docs/resources/password) (resource)
- [random_password.password](https://registry.terraform.io/providers/hashicorp/random/latest/docs/resources/password) (resource)
- [random_password.username](https://registry.terraform.io/providers/hashicorp/random/latest/docs/resources/password) (resource)

## Modules

No modules.

## Required Inputs

The following input variables are required:

### <a name="input_accepted_sgs"></a> [accepted\_sgs](#input\_accepted\_sgs)

Description: IDs of the security groups that can make inbound requests

Type: `list(string)`

### <a name="input_bastion_cidrs"></a> [bastion\_cidrs](#input\_bastion\_cidrs)

Description: CIDR ranges of the bastion instances

Type: `list(string)`

### <a name="input_cluster_instance_type"></a> [cluster\_instance\_type](#input\_cluster\_instance\_type)

Description: Instance type of the Redis cluster

Type: `string`

### <a name="input_cluster_name"></a> [cluster\_name](#input\_cluster\_name)

Description: Name of the Redis cluster

Type: `string`

### <a name="input_cluster_subnets"></a> [cluster\_subnets](#input\_cluster\_subnets)

Description: Subnets to which the ElastiCache cluster should be deployed

Type: `list(string)`

### <a name="input_kms_arn"></a> [kms\_arn](#input\_kms\_arn)

Description: ARN of the KMS key to use for encryption

Type: `string`

### <a name="input_redis_users"></a> [redis\_users](#input\_redis\_users)

Description: Redis users to create and the keyspace access strings that they are provided

Type: `map(object({ keyspace : string }))`

### <a name="input_vpc_id"></a> [vpc\_id](#input\_vpc\_id)

Description: ID of the VPC to which the cluster is to be deployed

Type: `string`

## Optional Inputs

No optional inputs.

## Outputs

The following outputs are exported:

### <a name="output_endpoint"></a> [endpoint](#output\_endpoint)

Description: Configuration endpoint address for the EC cluster




# Whitecloud Services ElastiCache module

The ElastiCache submodule for Whitecloud Services is composed out of three main components:

1. An EC cluster, configured using Redis 6.2, featuring 3 nodes per workspace
2. A set of users with random credentials (one per environment, 6 in total across the two workspaces)
3. Secret Manager secrets for the user credentials

## Introduction

It is important to call out that since the EC submodule can be applied for both `nonprod` and `prod`. Depending on the
target workspace, various users can be customised to exist in different clusters (via the `redis_users` variable), which
is a map that takes the following format:

```
redis_users = {
  dev     = { keyspace : "~dev::*" },
  sandbox = { keyspace : "~sandbox::*" },
  test    = { keyspace : "~test::*" },
  uat     = { keyspace : "~uat::*" },
}
```

The keys of the map are used as user identifiers, whereas the keyspace is used to define access to a specific Redis
partition - i.e. the `dev` user can only use the `dev` keyspace. Please note that the user ID is strictly used as an
internal identifier and that all Redis user continue to feature randomly generated credentials for `username`
and `password`.

Most of the configuration of the module can be found in the `locals.tf` file, which provides an overview on the
configurations that have been applied for the submodule.

## Structure

This section contains information on the structure of the submodule, specifically the custom files that have been
created, as well as the order in which they should be read. All standard files (i.e. `variables.tf`, `output.tf`) are
considered standard knowledge, and have been explored in the sections below.

* *security.tf*
    * Defines the security group for the EC cluster, enabling access from a set of security groups, as well as access
      from the bastion CIDRs
* *config.tf*
    * Responsible for defining the subnet group for the EC cluster
* *cluster.tf*
    * Responsible for defining the EC2 cluster itself
* *users.tf*
    * Responsible for defining the randomly generated users (as well as the `default` user which must always exist for
      Redis)
* *secrets.tf*
    * Responsible for defining Secret Manager entries for the randomly generated users
    * Responsible for defining a secret entry for the default user

Please note that a format similar to the one used for RDS instances has been provided for the Secret Manager entries.

## Inputs

| Name                  | Description                                                                            | Type                               |
|-----------------------|----------------------------------------------------------------------------------------|------------------------------------|
| cluster_name          | Name of the Redis cluster                                                              | string                             |
| cluster_instance_type | Instance type of the Redis cluster. Validated against known AWS instance types for EC. | string                             |
| cluster_subnets       | List of subnet IDs to which the ElastiCache cluster should be deployed                 | list(string)                       |
| vpc_id                | ID of the VPC to which the cluster is to be deployed                                   | string                             |
| kms_arn               | "ARN of the KMS key to use for encryption"                                             | string                             |
| accepted_sgs          | IDs of the security groups that can make inbound requests                              | list(string)                       |
| bastion_cidrs         | "CIDR ranges of the bastion instances"                                                 | list(string)                       |
| redis_users           | Redis users to create and the keyspace access strings that they are provided           | map(object({ keyspace : string })) |

Please read here for more information regarding the access strings required
for `redis_users`: https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Clusters.RBAC.html#Access-string

## Outputs

| Name     | Description                                       | Type   |
|----------|---------------------------------------------------|--------|
| endpoint | Configuration endpoint address for the EC cluster | string |
