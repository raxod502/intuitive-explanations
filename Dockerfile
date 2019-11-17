FROM ubuntu:rolling

ARG UID

COPY _scripts/docker-install.bash /tmp/
RUN /tmp/docker-install.bash "$UID"

ENV PATH="/opt/anaconda/bin:$PATH"

USER $UID
WORKDIR /home/docker/src

ENTRYPOINT ["/usr/local/bin/pid1.bash"]
CMD bash

COPY _scripts/pid1.bash /usr/local/bin/
