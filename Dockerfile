FROM ubuntu:20.04

COPY tools/docker-install.bash /tmp/
RUN /tmp/docker-install.bash
