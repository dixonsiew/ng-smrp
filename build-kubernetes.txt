kubectl delete service ng-smrp
kubectl delete deployment ng-smrp

docker build --no-cache -t docker.io/wfsiew888/ng-smrp:1.0.0  .

docker push docker.io/wfsiew888/ng-smrp:1.0.0

kubectl apply -f deployment.yaml