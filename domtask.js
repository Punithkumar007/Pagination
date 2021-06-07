var request = new XMLHttpRequest();
request.open('GET','https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json');
var requestdata = []
request.onload  = () =>{
requestdata = JSON.parse(request.response);
  var prev = document.createElement('input');
  prev.setAttribute('id','prev');
      prev.setAttribute('type', 'button');
      prev.setAttribute('value', 'Prev');
      prev.setAttribute('onClick','prev()');
      document.body.append(prev);
for(var i=1;i<=10;i++){
    var button = document.createElement('input');
      button.setAttribute('id',i);
      button.setAttribute('type', 'button');
      button.setAttribute('value', i);
      button.setAttribute('onClick','show(id)');
      document.body.append(button)
    }
    var next = document.createElement('input');
  next.setAttribute('id','next');
      next.setAttribute('type', 'button');
      next.setAttribute('value', 'next');
      next.setAttribute('onClick','next()');
      document.body.append(next);
  }
  var table = document.createElement('table');
  var gid = 1;
  function show(id){
      var id  = parseInt(id);
      gid = id;
      table.innerHTML="";
      table.setAttribute("class", "test");
      var thead=document.createElement('thead');
      thead.setAttribute('class','thead-dark');
      var tr = document.createElement('tr');
      var th1=document.createElement('th');
      var th2=document.createElement('th');
      var th3=document.createElement('th');
      th1.innerHTML="ID";
      th2.innerHTML="Name";
      th3.innerHTML="Email";
      tr.append(th1,th2,th3);
      thead.append(tr);

      for(var i=((id-1)*10);i<id*10;i++){
        var tbody=document.createElement('tbody');
        var tbodytr=document.createElement('tr');
        var td1  = document.createElement('td');
        var td2  = document.createElement('td');
        var td3  = document.createElement('td');
        td1.innerText = requestdata[i].id;
        td2.innerText = requestdata[i].name;
        td3.innerText = requestdata[i].email;
        tbodytr.append(td1,td2,td3);
        tbody.append(tbodytr);
        table.append(thead,tbody);
      }
      document.body.append(table)
  }

  function prev(){
  if(gid>1){
    gid --;
      show(gid);
    }
  }

    function next(){
  if(gid<10){
    gid ++;
      show(gid);
    }
  }

request.send();
