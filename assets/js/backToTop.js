let botao = document.getElementById("topBtn");

            window.onscroll = function() {scrollBody()};
            // Função para fazer aparecer e desaparecer o botão flutuante
            function scrollBody() {
                
                if(document.documentElement.scrollTop > 700) {
                    botao.style.visibility = "visible";

                } else {
                    botao.style.visibility = "hidden";
                }
            }
            // Função para ir ao topo da página
            function irParaTopo(){
                document.documentElement.scrollTop = 0;
            }