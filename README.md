# Project Name

> Project description

## Related Projects

  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc.

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

## Creating new Redis EC2 Instance

sudo yum update
sudo yum -y install gcc make # install GCC compiler
cd /usr/local/src
sudo wget http://download.redis.io/redis-stable.tar.gz
sudo tar xvzf redis-stable.tar.gz
sudo rm -f redis-stable.tar.gz
cd redis-stable
sudo make distclean
sudo make
sudo yum install -y tcl
sudo make test
sudo cp src/redis-server /usr/local/bin/
sudo cp src/redis-cli /usr/local/bin/
cd /usr/local/src
cd redis-stable/
sudo cp redis.conf /etc/redis.conf
sudo vim /etc/redis.conf
sudo /usr/local/bin/redis-server /etc/redis.conf --daemonize yes


sudo su
sudo echo never > /sys/kernel/mm/transparent_hugepage/enabled
sudo sysctl vm.overcommit_memory=1
sysctl -w net.core.somaxconn=65535
sudo sysctl -w fs.file-max=100032
sysctl -p

