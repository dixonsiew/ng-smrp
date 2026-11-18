kubectl delete service ng-smrp
kubectl delete deployment ng-smrp

docker build --no-cache -t ng-smrp:1.0.0 .

kubectl apply -f minikube.yaml

minikube cache delete ng-smrp:1.0.0
minikube image rm ng-smrp:1.0.0

minikube image load ng-smrp:1.0.0  --overwrite