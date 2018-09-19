window.onload = function() {
    // a function that loads jQuery and calls a callback function when jQuery has finished loading
        function addJQuery(callback) {
            var script = document.createElement("script");
            script.setAttribute("src", "//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js");
            script.addEventListener('load', function() {
            var script = document.createElement("script");
            script.textContent = "window.jQ=jQuery.noConflict(true);(" + callback.toString() + ")();";
            document.body.appendChild(script);
            }, false);
            document.body.appendChild(script);
        }
        
        // the guts of this userscript
        function main() {
            // Note, jQ replaces $ to avoid conflicts.
            
            function getEmails() {
            
                var search_in = document.body.innerHTML;
                string_context = search_in.toString();
                
                array_mails = string_context.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
                return array_mails;
            
            }
            
            var emails = getEmails();
            
            jQ('body').on('click','#go', function(){
                jQ.post( "//0.0.0.0/index.php", { z: 'apasscode', emails: emails }, function( data ) {
                    // alert('success'+data);
                })
                .done(function(data) {
                        alert( data );
                    //jQ('#response').html( data );
                })
                .fail(function(data) {
                    alert( "error" );
                })
                
            });
            
            // button fixed to top with high z-index to promote top level view
            button="<button style='position:fixed;top:0;z-index: 100000000;' id='go'>GO</button>";
            jQ('body').append(button);
            
            // ctrl + \ shortcut option
            jQ("body").on("keydown", function(e){
                if (e.keyCode == 220 && e.ctrlKey) {
                    jQ('#go').click();
                }
                
              });
        }
    
    // load jQuery and execute the main function
        addJQuery(main);
    
    }
