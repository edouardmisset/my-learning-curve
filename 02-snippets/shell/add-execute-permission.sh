#!/bin/zsh

# This function adds execute permissions to a file.
# It takes one parameter, which is the name of the file.
# The chmod command is used to change the permissions of files or directories.
# +x adds execute permissions.
# "$1" is a special variable in shell scripts that represents the first argument passed to the function.
add_execute_permission() {
  chmod +x "$1"
}
