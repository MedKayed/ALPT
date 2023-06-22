axios.defaults.headers.common['Accept'] = 'application/ld+json';
axios.defaults.headers.put['Content-Type'] = 'application/ld+json';
axios.defaults.headers.get['Content-Type'] = 'application/ld+json';
axios.defaults.headers.post['Content-Type'] = 'application/ld+json';
axios.defaults.headers.delete['Content-Type'] = 'application/ld+json';
axios({
    method: 'get',
    url: 'http://localhost:8000/api/contacts',
    responseType: 'application/ld+json'
  })
    .then(function (response) {
        data=JSON.parse(response.data);
        const contacts = data;
      console.log(typeof(contacts));
      console.log(contacts["hydra:member"][0].tel1);
    });
    