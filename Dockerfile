# Ubuntu 26.04 LTS supported until June 2031
FROM ubuntu:26.04

COPY tools/docker-install.bash /tmp/
RUN /tmp/docker-install.bash
