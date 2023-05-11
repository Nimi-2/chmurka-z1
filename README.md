<h1>chmurka-z1</h1>
  <h2>Zadania obowiązkowe</h2>
     <h3>Zadanie 1</h3>
     W folderze 1 znajdują się pliki do zadania 1.<br>
     Dodatkowo są tam umieszczone screenshoty z działania aplikacji.<br>
     Użyte komendy: <br>
     docker build  -t zz . <br>
     docker run -d -p 9003:80 --name zz zz<br>
     <h3>Zadanie 2</h3>
     W folderze e1 znajdują się pliki do zadania 2<br>
     image.png pokazuje wynik wykonania zadania<br>       
     Użyte komendy: <br>
     docker build -f Dockerfile2 -t zd1 . <br>
     docker run --network host -p 9002:80 --name zd1 zd1<br>
     <h3>Zadanie 3</h3>
     W folderze z3 znajduje się pdf gdzie można zobaczyć wynik 2 komend:
     docker logs <id kontenera><br>
     docker history <nazwa kontenera><br>
     Pokazują między innymi z ilu warst zbudowany jest obraz.<br>
     Wszystkie komendy do zbudowamnia kontenera jak i obrazu znajdują się przy opisie każdego z zadań.<br>
     Przykład tych komend:<br>
     docker build -t nazwa_obrazu . <br>
     docker run -d --name nazwa_kontenera nazwa_obrazu <br>
  <h2>Lab 6
    </h2>
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
     <h2>
      Całość została stworzona na systemie Windows
        
        
    
  
  
  
