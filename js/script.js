document.getElementById('avatar').addEventListener('change', function() {
    const file = this.files[0];
    const reader = new FileReader();
  
    reader.onloadend = function() {
      document.getElementById('viewavatar').src = reader.result;
    }
  
    if (file) {
      reader.readAsDataURL(file);
    } else {
      document.getElementById('avatarview').src = "";
    }
  });

  
  