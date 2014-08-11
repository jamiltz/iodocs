var ls_access_token = localStorage.getItem('access_token');
var ls_client_key = localStorage.getItem('client_key');

if (ls_access_token && ls_client_key) {
  $('input[name=client_key]').val(ls_access_token);
  $('input[name=access_token]').val(ls_client_key);
}