axios.defaults.headers.common['Accept'] = 'application/ld+json';
axios.defaults.headers.put['Content-Type'] = 'application/ld+json';
axios.defaults.headers.get['Content-Type'] = 'application/ld+json';
axios.defaults.headers.post['Content-Type'] = 'application/ld+json';
axios.defaults.headers.delete['Content-Type'] = 'application/ld+json';
console.log(123);
axios({
    method: 'get',
    url: 'http://localhost:8000/api/libraries?page=1',
    responseType: 'application/ld+json'
  })
    .then(function (response) {
        data=JSON.parse(response.data);
        console.log('Inside Then');
        const libraries = data;
      console.log(libraries);
      let lbs=[];
      let htmlString='';
      let i=1;
      $('#example1 tbody').html('');
      // Create a temporary container element
      //const container = document.createElement('table');

      libraries["hydra:member"].forEach(element => {
        lbs.push(element);
        htmlString+=`<tr>
      <td>`+i+`</td>
      <td class="text-right"><a href="bp_infos.html">`+element.nom+`</a></td>
      <td class="text-right">`+element.matricule+`</td>
      <td class="text-right">`+element.categorie+`</td>
      <td class="text-right">المسؤول</td>
      <td class="text-right ltr">76 256 531</td>
      <td>
        <a href="bp_infos.html"><i class="fa fa-eye"></i></a>
        <a href="bp_infos.html?id=`+element.id+`" alt="تعديل" title="تعديل"><i class="fa fa-edit"></i></a>&nbsp;
      </td>
    </tr>`;
    // Set the HTML content of the container element
      //container.innerHTML = htmlString;
      //table=document.getElementById('example1');
      $('#example1 tr:last').after(htmlString);
      i++;
      //table.getElementsByTagName('tbody').append(container);
        
      });

      //const parser = new DOMParser();
      //const html = parser.parseFromString(htmlString, 'text/html');

      //console.log(html);
     // document.getElementById('example1').append(html.body);
     // console.log(libraries["hydra:member"][0]);
    });
    