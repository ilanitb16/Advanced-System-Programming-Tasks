from socket import socket, AF_INET, SOCK_STREAM

# socket creation
p = 12345
s = socket(AF_INET, SOCK_STREAM)
s.bind(('', p))
s.listen(5)

print(f"Web server started: http://localhost:{p}")

while True:
	# accept connection
	client, addr = s.accept()

	# read HTTP request from socket
	request = client.recv(4096)
	print(request)

	# reply to client
	client.send(b'HTTP/1.1 200 OK\n')
	client.send(b'Content-Type: text/html\n')
	client.send(b'Access-Control-Allow-Origin: *\n')
	client.send(b'\n')
	client.send(b'Hello world')
	client.close()