<script type="text/javascript">
        var timer1, timer2;
        document.onkeypress=resetTimer;
        document.onmousemove=resetTimer;
        function resetTimer()
        {
           document.getElementById('timeoutPopup').style.display='none';
           clearTimeout(timer1);
           clearTimeout(timer2);
                // waiting time in minutes
            var wait=30;

           // alert user one minute before
            timer1=setTimeout(alertUser, (60000*wait)-1);

            // logout user
            timer2=setTimeout(logout, 60000*wait);
        }

        function alertUser()
        {
            document.getElementById('timeoutPopup').style.display='block';
        }

        function logout()
        {
            window.location.href='Logout.aspx';
        }



} </script>
