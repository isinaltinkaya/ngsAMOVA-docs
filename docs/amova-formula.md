## AMOVA Formula 

The formula option `--formula` defines the AMOVA model to be fitted. The formula must be of the form:

```sh
--formula Individual ~ Group/subgroup/subsubgroup
```

The formula can be modified to suit the specific experimental design. 

- The left-hand side of the tilde `~` is the AMOVA model to be fitted with the distance matrix. 
- The right-hand side specifies the hierarchical grouping (population, region, etc). The groups are in the order of decreasing hierarchy and are separated by `/`.
- Specifying `--formula Individual ~ Population` will simply test for population differentiation.
- The group names in the formula must exist among the column names in the metadata file. For details about the metadata file, see [Metadata File Input](#metadata-file-input---metadata).
