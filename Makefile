PHONY: documentation
documentation: ## run script that retrieved md files from S3 and adjusts them accordingly
	- node src/prepare-documentation-files.js
