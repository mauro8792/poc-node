LIN:  
```
VERSION=$(date +%y%m%d%H%M)  && echo $VERSION  

LIN DOCKER:  
```
docker build --no-cache --progress plain -f Dockerfile -t server:$VERSION .   
```

LIN DOCKER:  
```
docker push us.icr.io/directv-uat-cr/applogic-activaciones:$VERSION  