 function validate()
			{
            var username = document.getElementById("username").value;
            var email = document.getElementById("email").value;
			var password = document.getElementById("password").value;
			var password2 = document.getElementById("password2").value;
			
                if(username == undefined || username == '')
				
				{
                    Swal.fire({
						title: 'Napaka!',
						text: 'Uporabniško ime je prazno',
						type: 'error',
                        confirmButtonText: 'Nazaj'
                        
					  })
              
                }
                else if(email == undefined || email == '')
                {
                    Swal.fire({
                        title: 'Napaka!',
                        text: 'Email je prazen',
                        type: 'error',
                        confirmButtonText: 'Nazaj'
                        
                      })
                }

                else if(username == 'jan')
				{
                    Swal.fire({
						title: 'Napaka!',
						text: 'Uorabnik s tem imenom že obstaja',
						type: 'error',
                        confirmButtonText: 'Nazaj'
                        
					  })

                }
                else if(email == 'j@j')
				{
                    Swal.fire({
						title: 'Napaka!',
						text: 'Ta email že obstaja',
						type: 'error',
                        confirmButtonText: 'Nazaj'
                        
					  })

				}
			   else if( password == password2)
				{
                    
                    Swal.fire({
                       
                        type: 'success',
                        title: 'Uspešno!',
						text: 'Registracija je uspešna',
                        showConfirmButton: false,
                        html:
                        '<a href="login.html"><button class="swal2-confirm swal2-styled"> Prijava</button></a> ',                
                        
                      })
                }
                else
                {
                    
                    Swal.fire({
                        
						title: 'Napaka!',
						text: 'Gesli nista enaki',
						type: 'error',
                        confirmButtonText: 'Nazaj'
                      
					  })

                }
                document.getElementById('password').value = '';
                document.getElementById('password2').value = '';
		//	window.location.href='login.html';
			
			


			
			}