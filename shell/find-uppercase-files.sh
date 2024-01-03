#!/bin/sh

# This script finds all files in the current directory and its subdirectories
# that have uppercase letters in their names, excluding hidden files and directories.

# find command is used to search for files in a directory hierarchy
# . - represents the current directory
# \( ! -regex '.*/\..*' \) - excludes hidden files and directories (those starting with a dot)
# -type f - restricts the search to files
# -name '*[[:upper:]]*' - matches any file name that contains at least one uppercase letter

find . \( ! -regex '.*/\..*' \) -type f -name '*[[:upper:]]*'
