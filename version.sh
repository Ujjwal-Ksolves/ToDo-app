CI_COMMIT_TAG=1.0.2
IFS=. read -r v1 v2 v3 <<< "${CI_COMMIT_TAG}"    # split into (integer) components
((v3++))                                         # do the math
version="${v1}.${v2}.${v3}"                        # paste back together
