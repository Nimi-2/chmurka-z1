<h1>chmurka-z1<h1>
  <br>
  <h2>Lab 6<h2>
  W folderze lab6 znajduje się tylko plik Dockerfile, ponieważ buildctl jest za duży. <br>
  Aby całe zd działo należy posiadać bildctl. <br>
  Plik docker.pdf przedstawia screenshoty z wykonywanego zadania.<br>
  Użyte komendy:<br>
  buildctl -v // sprawdzenie versji buildctl oraz czy w ogóle go posiadamy<br>
  docker run --rm --privileged -d --name buildkit moby/buildkit <br>
  docker ps --filter name=buildkit <br>
  set BUILDKIT_HOST=docker-container://buildkit  <br>
  buildctl build --frontend=dockerfile.v0 --local context=. --local dockerfile=. --output type=image,name=docker.io/nimi22/lab:bkit1,push=true <br>
    //należy pamiętać by wcześniej zalogować się na swojego dockerhuba, w moim przypadku jest to użytkowniki: nimi22 <br>
   docker run -it docker.io/nimi22/lab:bkit1 <br>
    Po znaku zachęty # należy wydać komendy: <br>
    ls <br>
    cat imo.txt<br>
    <br>
    <h2>Zadania obowiązkowe<h2>
     <h3>Zadanie 1<h3>
     W folderze e1 znajdują się pliki do zadania 1<br>
     image.png pokazuje wynik wykonania zadania<br>       
     Użyte komendy: <br>
     docker build -f Dockerfile2 -t zd1 . <br>
     docker run --network host -p 9002:80 --name zd1 zd1<br>
     

 ===================================================================================
      Całość została stworzona na systemie Windows
        
        
    
  
  
  
