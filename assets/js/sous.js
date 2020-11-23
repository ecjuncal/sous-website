function submitWaitlistEmail() {
    var email = document.getElementById('waitlist-email').value
    var endpoint = 'https://api.airtable.com/v0/appJcXhkiILMpsdAZ/Emails';
    var data = '{"records": [{"fields": {"Email": "' + email + '"}}]}'
    
    var xhr = new XMLHttpRequest();
    xhr.open("POST", endpoint, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Authorization', 'Bearer keyx1kn8sMLgvA6tO');
    xhr.send(data);
  };