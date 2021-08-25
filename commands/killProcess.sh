# kill process in specific port
# first find process id. For example in port 443
lsof -n -i :443

# Then, supose that your pid is 24409
kill -9 24409

