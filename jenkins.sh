docker-compose -f docker-compose.yml up --build -d
docker ps
docker login -u ujjwal200119 -p Ujjwal@2023
docker tag todo-list-server ujjwal200119/todo-app:server-app1.0.0
docker push ujjwal200119/todo-app:server-app1.0.0
docker tag todo-list-client ujjwal200119/todo-app:client-app1.0.0
docker push ujjwal200119/todo-app:client-app1.0.0
kubectl apply -f mysql-pv.yml
kubectl apply -f mysql.yml
kubectl apply -f server.yml
kubectl apply -f client.yml
