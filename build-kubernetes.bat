kubectl delete service ng-smrp-service
kubectl delete deployment ng-smrp

docker build --no-cache -t docker.io/wfsiew888/ng-smrp:1.11 .

docker push docker.io/wfsiew888/ng-smrp:1.11

kubectl apply -f deployment.yaml