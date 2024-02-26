FROM ubuntu:latest

RUN apt-get update && apt-get install -y openssh-server hydra net-tools curl
COPY password-list.txt password-list.txt

CMD ["/bin/bash"]
