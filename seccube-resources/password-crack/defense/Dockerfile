FROM ubuntu:latest

RUN apt-get update && apt-get install -y openssh-server net-tools curl
RUN mkdir /var/run/sshd
RUN echo 'root:william' | chpasswd
RUN sed -i 's/#PasswordAuthentication yes/PasswordAuthentication yes/g' /etc/ssh/sshd_config
RUN sed -i 's/#PermitRootLogin prohibit-password/PermitRootLogin yes/' /etc/ssh/sshd_config

EXPOSE 22
CMD ["/usr/sbin/sshd", "-D"]
