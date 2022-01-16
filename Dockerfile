# Ubuntu 20.04 LTS supported until April 2025
FROM ubuntu:20.04

COPY tools/docker-install.bash /tmp/
RUN /tmp/docker-install.bash
