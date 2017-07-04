$(function() {
    
    $("#contact-form").validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            name: {
                required: true,
            },
            message: {
                required: true,
            }
        },
        
        messages: {
            email: {
                required: 'Please enter your email address.'
            },
            name: {
                required: 'Please fill in your name.'
            },
            message: {
                required: 'Please specify your project details.'
            }
        }
        
    });
    
});