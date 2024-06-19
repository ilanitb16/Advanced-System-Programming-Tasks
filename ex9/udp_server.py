from socket import socket, AF_INET, SOCK_DGRAM

s = socket(AF_INET, SOCK_DGRAM)
src_ip = ''
src_port = 12345
s.bind((src_ip, src_port))

while True:
    data, sender_info = s.recvfrom(2048)
    print("Received data from", sender_info, ": ", data.decode())
    uppercase_data = data.upper()
    print("Sending back uppercase data:", uppercase_data.decode(), "to", sender_info)
    s.sendto(uppercase_data, sender_info)
