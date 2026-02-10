# Ubuntu 24.04 LTS supported until June 2029
FROM ubuntu:24.04

COPY tools/docker-install.bash /tmp/
RUN /tmp/docker-install.bash
