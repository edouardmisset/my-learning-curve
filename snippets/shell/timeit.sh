#!/bin/zsh

# Define a function called 'timeit' that takes any number of arguments.
# Each argument is a command that will be timed.
function timeit() {
  # Loop over all arguments passed to the function.
  for cmd in "$@"; do
    # Initialize a variable to hold the total execution time of the command.
    total=0
    iterations=100
    # Run the command 100 times.
    for i in {1..$iterations}; do
      # Get the start time in nanoseconds.
      start=$(date +%s%N)
      # Execute the command, suppressing its output.
      eval $cmd >/dev/null 2>&1
      # Get the end time in nanoseconds.
      end=$(date +%s%N)
      # Calculate the difference between the end and start times.
      diff=$(($end - $start))
      # Add the difference to the total execution time.
      total=$(($total + $diff))
    done

    # Calculate the average execution time of the command in seconds.
    average=$(echo "scale=0; $total / $iterations / 1000000" | bc -l)
    # Print the command and its average execution time, coloring the output.
    printf "\e[32m%-50s\e[0m \e[33m%15s\e[0m\n" "$cmd" "$average"
  done
}

# Clear the terminal.
clear
# Print the headers for the output table, coloring the output.
printf "\e[34m%-50s %15s\e[0m\n" "Command" "Average Time (ms)"
# Print a line to separate the headers from the data.
printf "%-66s\n" "-------------------------------------------------------------------"

# Call the 'timeit' function with the commands to be timed.
timeit "bun install --backend=hardlink && rm -rf bun.lockb node_modules" "yarn install --no-scripts && rm -rf yarn.lock node_modules " "npm install --no-scripts --ignore-scriptd && rm -rf package-lock.json node_modules" "pnpm install --ignore-scripts && rm -rf pnpm-lock.yaml node_modules"
