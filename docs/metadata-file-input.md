
## Metadata File Input 

The metadata file is specified using the `--metadata <filename>` option. Metadata file is a tab-separated file that contains the information about the samples-to-groups mapping. 

- The metadata file can contain any number of columns. 
- The names of the values listed below the grouping that was used in the left-hand side of the AMOVA formula must match the names of the individuals as they appear in the input data file, e.g. VCF file or distance matrix.
- The metadata file must contain a header row.

For example, the following metadata file contains information about the individuals, regions, populations, and subpopulations:

```
$ cat tests/data/metadata_Individual_Region_Population_Subpopulation.tsv
Individual    Region    Population    Subpopulation
pop1_ind1     reg1      pop1          subpop1
pop1_ind2     reg1      pop1          subpop2
pop1_ind3     reg1      pop1          subpop2
pop2_ind1     reg1      pop2          subpop3
pop2_ind2     reg1      pop2          subpop3
pop2_ind3     reg1      pop2          subpop3
pop3_ind1     reg2      pop3          subpop4
pop3_ind2     reg2      pop3          subpop4
pop3_ind3     reg2      pop3          subpop4
```

Here, if a formula `Individual~Region/Population/Subpopulation` was used, we can read this metadata file as "the Individual `pop1_ind1` belongs to the Subpopulation `subpop1`, which belongs to the Population `pop1` in the Region `reg1`".
